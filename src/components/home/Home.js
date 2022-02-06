import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import Cards from "./Cards";
import loadingGif from "../../assets/loading.gif";
import { Header, MainContainer, Container, CardContainer, Image, ErrorDiv } from "./HomeStyle";

const Home = () => {
  const { treesData } = useContext(MainContext);
  // console.log("treesData: ", treesData);

    return (
      <MainContainer>
        <Container>
          <Header> ──── Dashboard ──── </Header>
        </Container>
        <Container>
          {treesData === undefined ? (
              <Image src={loadingGif} alt="loading" />
          ) : treesData ? (
            <CardContainer>
              {treesData?.map((item, id) => (
                <Cards key={id} item={item}/>
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