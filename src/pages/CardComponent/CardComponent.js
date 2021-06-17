import styled from "styled-components";
import { toSnakeCase } from "./services";

export const CardComponent = ({ starWars }) => {
  return (
    <>
      <div className="col-3">
        <div className="card mb-4">
          <img
            src={
              process.env.PUBLIC_URL +
              /images/ +
              toSnakeCase(starWars.name) +
              ".jpg"
            }
            className="card-img-top"
            alt={starWars.name}
          />
          <HeaderH2>{starWars.name}</HeaderH2>
          <div className="card-body">
            <Paragraph>
              Año nacimiento: <span>{starWars.birth_year}</span>
            </Paragraph>
            <Paragraph>
              Altura: <span>{starWars.height}</span>
            </Paragraph>
            <Paragraph>
              Peso: <span>{starWars.mass}</span>
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderH2 = styled.h2`
  font-size: 1.3rem;
  text-transform: uppercase;
  position: absolute;
  bottom: 150px;
  left: 15px;
  color: white;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #dba90d;

  span {
    font-size: 0.9rem;
    text-transform: lowercase;
    font-weight: 400;
    color: black;
  }
`;
