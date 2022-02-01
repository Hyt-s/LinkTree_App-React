import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import loadingGif from "../../assets/loading.gif";
import { Header, MainContainer, Container, CardContainer, Image, ErrorDiv } from "./HomeStyle";

const Home = () => {
    const [trees, setTrees] = useState();
  
    const getData = () => {
        axios.get("")
        .then((response) => {
            console.log("response: ", response);
            setTrees(response.data)
        }).catch((error) => {
            console.log("error: ", error);
        })
    };

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
      <MainContainer>
        <Container>
          <Header> ──── Dashboard ──── </Header>
        </Container>
        <Container>
          {trees === undefined ? (
              <Image src={loadingGif} alt="loading" />
          ) : trees ? (
            <CardContainer>
              {trees?.map((item, id) => (
                <Cards key={id} item={item} />
              ))}
            </CardContainer>
          ) : (
            <ErrorDiv>
              No data available.
            </ErrorDiv>
          )}
        </Container>
      </MainContainer>
    );
};
  
export default Home;