import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { root } from "../utils/routes";
import Home from "../pages/Home";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
`;

const RouterConfig = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Routes>
          <Route path={root} element={<Home />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default RouterConfig;
