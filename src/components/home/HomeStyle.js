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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  /* background: #E1F1DD; */
  height: fit-content;
  /* padding: 5px; */
`;
export const Card = styled.div`
  height: 300px;
  background: white;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid darkgray;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;
export const CardLinks = styled.div`
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
}
`;
export const CardHeader = styled.h1`
  font-size: 1.9rem;
  line-height: 1rem;
  text-align: center;
  color: slategray;
  width: 100%;
`;
export const CardDescription = styled.p`
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
  padding: 2px;
  margin: 3px;
  overflow:hidden;
  color: darkgrey;
  width: 100%;
`;
export const CardButton = styled.a`
  display: block;
  height: 30px;
  width: 90%;
  text-align: center;
  color: white;
  background: ${props=>props.itemColor};
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  border: 1px solid darkgrey;
  border-radius: 3px;
  &:hover {
    opacity: 0.7;
  }
`;
