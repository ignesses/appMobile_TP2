import React from "react";
import styled from "styled-components";
import { ShipComponent, NavBarComponent, FooterComponent } from "../";

export const StarShipsPage = ({ starWars }) => {
  const [starWarsData, setStarWarsData] = React.useState();

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/${starWars}`).then((res) =>
      res
        .json()
        .then((data) => {
          setStarWarsData(data.results);
          console.log(data.results);
        })
        .catch((e) => {
          console.log("ERROR", e);
        })
    );
  }, [starWars]);

  return (
    <>
      <NavBarComponent />

      <Home>
        <div className="container-fluid px-0">
          <WrapperBG>
            <div className="container">
              <div className="row py-1">
                <div className="col-12">
                  <h1 className="text-light text-uppercase mt-5">Naves</h1>
                </div>
              </div>

              <div className="row">
                {starWarsData &&
                  starWarsData.map((starWars) => (
                    <ShipComponent key={starWars.name} starWars={starWars} />
                  ))}
              </div>
            </div>
          </WrapperBG>
          <FooterComponent SFooter={"Ignacio Esses"} />
        </div>
      </Home>
    </>
  );
};

const Home = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #2c2c2c;
  background-size: cover;
  background-repeat: no-repeat;
`;

const WrapperBG = styled.div`
  background-size: cover;
  background-image: url("images/starships.jpg");
  background-attachment: fixed;
`;
