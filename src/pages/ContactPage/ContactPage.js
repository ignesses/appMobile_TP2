import React from "react";
import styled from "styled-components";
import { NavBarComponent } from "../";
import { StarLogoURL } from "./constants";

export const ContactPage = () => {
  return (
    <>
      <NavBarComponent />
      <Home>
        <Wrapper>
          <StarWarsLogo src={StarLogoURL} alt="Star Wars logo" />
        </Wrapper>
        <Texto>
          Escuela Multimedial DA VINCI <span>IGNACIO ESSES</span>
        </Texto>
      </Home>
    </>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.denofgeek.com/wp-content/uploads/2020/05/Star-Destroyer.jpg?fit=1920%2C1080");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StarWarsLogo = styled.img`
  margin: auto;
  width: 350px;
  margin-bottom: 20px;
`;

const Texto = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  display: inline;
  width: 400px;
  text-align: center;

  span {
    display: inline;
    font-weight: 300;
    font-size: 2.8rem;
  }
`;
