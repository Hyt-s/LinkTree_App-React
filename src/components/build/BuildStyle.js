import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: #E1F1DD; */
  height: 100%;
  width: 90%;
`;
export const Header = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  font-style: italic;
  color: #02475E;
  margin-bottom: 2rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #E1F1DD; */
  width: 100%;
  margin: 1rem;
  /* padding: 5px; */
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;
export const FormLabel = styled.label`
  font-size:1rem;
  margin-bottom: 2px;
`;
export const FormInput = styled.input`
  height: 150px;
  text-align: center;
`;
export const ErrorDiv = styled.div`
  color: red;
  font-size: 1em;
  text-align: center;
`;
export const Button = styled.button`
  background: blue;
  border-radius: 3px;
  height: 30px;
  color: white;
  padding: 5px;
  justify-self:flex-end;
  &: hover {
      cursor: pointer;
  }
`;
export const SubHeader = styled.h6`
  margin-top: 3rem;
  padding-top: 2rem;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: center;
  font-style: italic;
  color: #02475E;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
export const ButtonView = styled(Link)`
  padding: 0.8rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  background: #00ADB5;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'Girassol', sans-serif;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    background-color: #E1F1DD;
    border: 1px solid #00ADB5;
    border-radius: 10px;
    width: 100%;
  }
`;