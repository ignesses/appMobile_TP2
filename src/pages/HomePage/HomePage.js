import styled from "styled-components";
import { NavBarComponent, FooterComponent, CategoryComponent } from "../";
import { StarLogoURL } from "./constants";

export const HomePage = ({ setStarWars }) => {
  return (
    <>
      <NavBarComponent />
      <Home>
        <Wrapper>
          <StarWarsLogo src={StarLogoURL} alt="Star Wars Logo" />
        </Wrapper>
      </Home>
      <BackgroundWrapper>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <CategoryComponent
                setStarWars={setStarWars}
                name={"Personajes"}
                img={process.env.PUBLIC_URL + /images/ + "characters.jpg"}
                apiString={"people"}
                route={"/characters"}
              />
            </div>
            <div className="col-6">
              <CategoryComponent
                setStarWars={setStarWars}
                name={"Naves"}
                img={process.env.PUBLIC_URL + /images/ + "starships.jpg"}
                apiString={"starships"}
                route={"/starships"}
              />
            </div>
          </div>
        </div>
      </BackgroundWrapper>
      <FooterComponent SFooter={"Ignacio Esses"} />
    </>
  );
};

const Home = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/images/hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const StarWarsLogo = styled.img`
  margin: auto;
  width: 350px;
`;

const BackgroundWrapper = styled.div`
  background-color: #cecece;
  padding-bottom: 100px;
`;
