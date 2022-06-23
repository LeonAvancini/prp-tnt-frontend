import styled from "styled-components";

import { primary, white } from "../../utils/colors";

const Container = styled.footer`
  // position: fixed;
  // bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  background-color: ${primary};
  padding: 0.2rem;
`;

const ParagraphStyled = styled.p`
  color: ${white};
`;

const Footer = () => {
  return (
    <Container>
      <ParagraphStyled>© 2022 Fedmar</ParagraphStyled>
    </Container>
  );
};

export default Footer;
