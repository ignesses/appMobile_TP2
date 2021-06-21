import { useHistory } from "react-router";
import styled from "styled-components";

export const CategoryComponent = ({
  setStarWars,
  img,
  name,
  apiString,
  route,
}) => {
  const history = useHistory();

  function handleClick() {
    setStarWars(apiString);
    history.replace(route);
  }

  return (
    <div className="row pt-5 pb-3 justify-content-center">
      <div className="col-12">
        <div className="card">
          <ImgCat onClick={handleClick}>
            <img className="card-img-top" src={img} alt="Card cap" />
            <H1>{name}</H1>
          </ImgCat>
        </div>
      </div>
    </div>
  );
};

const ImgCat = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const H1 = styled.h1`
  text-transform: uppercase;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
`;
