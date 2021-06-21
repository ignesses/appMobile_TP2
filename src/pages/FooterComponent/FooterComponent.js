import styled from "styled-components";

export const FooterComponent = ({ SFooter }) => {
  return (
    <Footer className="fixed-bottom">
      <span>{SFooter}</span>&nbsp;- Escuela Multimedial Da Vinci (2021)
    </Footer>
  );
};

const Footer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  color: white;

  span {
    color: #dba90d;
    text-transform: uppercase;
  }
`;
