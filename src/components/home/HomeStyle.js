import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* background: #E1F1DD; */
  height: fit-content;
  /* padding: 5px; */
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* background: #E1F1DD; */
  width: 100%;
  margin: 1rem;
  /* padding: 5px; */
`;
export const Header = styled.h1`
  font-size: 2.5rem;
  line-height: 1rem;
  text-align: center;
  color: #02475E;
  width: 100%;
`;
export const Image = styled.img`
  height: 150px;
  border-radius: 10px;
  text-align: center;
`;
export const ErrorDiv = styled.div`
  color: red;
  font-size: 2em;
  text-align: center;
  margin: 50px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* background: #E1F1DD; */
  height: fit-content;
  /* padding: 5px; */
`;
export const Card = styled.div`
  height: 300px;
  background: blue;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;
export const CardHeader = styled.h1`
  font-size: 1.5rem;
  line-height: 1rem;
  text-align: center;
  color: white;
  width: 100%;
`;
export const CardDescription = styled.h1`
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: center;
  color: white;
  width: 100%;
`;
export const CardButton = styled.button`
  background: blue;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: 1px solid black;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;
