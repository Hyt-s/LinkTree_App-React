import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, ErrorDiv, Form, FormLabel, Header, MainContainer } from './BuildStyle';
import { NewContext } from "../../context/NewContext";
import axios from 'axios';
import BuildLinks from "./BuildLinks";

const initialValues = {
    name: "",
    description: "",
    color: "",
};

const validationSchema = Yup.object({
    name: Yup.string()
    .max(30,"Must be 30 characters or less")
    .required("Required. Enter name"),

    description: Yup.string()
    .max(70,"Must be 70 characters or less")
    .required("Required. Enter description"),

    color: Yup.string()
    .required("Required. Select a color"),
});

function Build() {
    const [isOpen, setIsOpen] = useState(true);
    const { setTree } = useContext(NewContext);
    
    const onSubmit = values => {
        console.log("values: ", values);
        const data = {
            tree_title: values.name,
            tree_description: values.description,
            tree_color: values.color
        }
        
        axios.post("https://dfcd2bcd-b4f7-4ad2-b6b1-654cead3f19b.mock.pstmn.io/buildtree", data)
        .then(response => {
            setTree(response.data);
            setIsOpen(false);
        })
        .catch(error => {
            alert("An error occurred, please resubmit! ", error);
        })
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <>
        {isOpen ? (
        <MainContainer>
            <Header> Please  specify  your  linktree : </Header>
            <Container>
                <Form method='POST' onSubmit={formik.handleSubmit}>
                    <FormLabel  htmlFor="name">Name:</FormLabel>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder='Add linktree name'></input>
                    {formik.touched.name && formik.errors.name ? <ErrorDiv>{formik.errors.name}</ErrorDiv> : <div style={{visibility:"hidden"}}></div>}
                    <br/>
                    <FormLabel  htmlFor="description">Description:</FormLabel>
                    <input type="text" id="description" name="description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} placeholder='Enter a description'></input>
                    {formik.touched.description && formik.errors.description ? <ErrorDiv>{formik.errors.description}</ErrorDiv> : <div style={{visibility:"hidden"}}></div>}
                    <br/>

                    <FormLabel htmlFor="color">Choose a color:</FormLabel>
                <select id="colors" name="color" onChange={formik.handleChange} value={formik.values.color} onBlur={formik.handleBlur}>
                        <option value="BL">--Select color:--</option>
                        <option value="AQ">Aqua</option>
                        <option value="BL">Blue</option>
                        <option value="BR">Brown</option>
                        <option value="GO">Gold</option>
                        <option value="GE">Green</option>
                        <option value="OR">Orange</option>
                        <option value="PI">Pink</option>
                        <option value="PU">Purple</option>
                        <option value="RE">Red</option>
                        <option value="VI">Violet</option>
                    </select>

                    {formik.touched.color && formik.errors.color ? <ErrorDiv>{formik.errors.color}</ErrorDiv> : <div style={{visibility:"hidden"}}></div>}
                    <br/>

                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </MainContainer>
            ) : (
                <BuildLinks />
            )}

        </>
    )
}

export default Build;