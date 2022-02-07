import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, ErrorDiv, Form, FormLabel, Header, MainContainer, ButtonView, SubHeader } from './BuildStyle';
import { NewContext } from "../../context/NewContext";
import axios from 'axios';

const initialValues = {
    title: "",
    link: "",
};

const validationSchema = Yup.object({
    title: Yup.string()
    .max(40,"Must be 40 characters or less")
    .required("Required. Enter name"),

    link: Yup.string()
    .url("Invalid link address")
    .required("Required. Enter a link")
});

function BuildLinks() {
    const { tree, links, setLinks } = useContext(NewContext);
    let navigate = useNavigate();

    const onSubmit = values => {
        // console.log("values: ", values);
        // console.log("tree", tree);
        let header = document.querySelector(".linkHeader")
        header.innerHTML="PLEASE WAIT"

        const data = {
            link_title: values.title,
            link_url: values.link,
            tree: tree?.id
        }
        axios.post("https://link-tree-app.herokuapp.com/links/", data)
        .then(response => {
            links.push(response.data)
            setLinks(links);
            alert("The link has been successfully added. You can add a new one.")
            header.innerHTML="Please  enter  your  new links :"
        })
        .catch(error => {
            alert("An error occurred, please resubmit! ", error);
            header.innerHTML="Please  enter  your  new links :"
        })
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    function viewButtonClick() {
        navigate("/view");
    }
    
    return (
        <MainContainer>
            <Header className='linkHeader'> Please  enter  your  links : </Header>
            <Container>
                <Form method='POST' onSubmit={formik.handleSubmit}>
                    <FormLabel  htmlFor="title">Link title:</FormLabel>
                    <input type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} placeholder='Add link title'></input>
                    {formik.touched.title && formik.errors.title ? <ErrorDiv>{formik.errors.title}</ErrorDiv> : <div style={{visibility:"hidden"}}></div>}
                    <br/>
                    <FormLabel  htmlFor="link">Link url:</FormLabel>
                    <input type="text" id="link" name="link" onChange={formik.handleChange} value={formik.values.link} onBlur={formik.handleBlur} placeholder='Enter a link'></input>
                    {formik.touched.link && formik.errors.link ? <ErrorDiv>{formik.errors.link}</ErrorDiv> : <div style={{visibility:"hidden"}}></div>}
                    <br/>

                    <Button type='submit'>Add</Button>
                </Form>

                <SubHeader>if you finished, you can now watch your linktree.</SubHeader>
                <ButtonView onClick={viewButtonClick}>Go View</ButtonView>
            </Container>
        </MainContainer>
    )
}

export default BuildLinks;