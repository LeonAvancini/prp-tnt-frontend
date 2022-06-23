import styled from "styled-components";

import { primary } from "../../utils/colors";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 0.5rem;
  background-color: ${primary};
`;

const LogoImage = styled.img`
  width: 50%;
  height: auto;
`;

const Header = () => {
  return (
    <Container>
      <LogoImage
        src="http://piedemonteclub.com.ar/wp-content/uploads/2021/09/logo_pdm-min.png"
        alt="logo"
      />
    </Container>
  );
};

export default Header;
