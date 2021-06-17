import React from "react";
import styled from "styled-components";

export const StarShipsPage = () => {
  return <Home>StarsShips</Home>;
};

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.denofgeek.com/wp-content/uploads/2020/05/Star-Destroyer.jpg?fit=1920%2C1080");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
