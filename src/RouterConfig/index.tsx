import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { product, root } from "../utils/routes";
import ProductForm from "../pages/Product";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../pages/Home";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const RouterConfig = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Routes>
          <Route path={root} element={<Home />} />
          <Route path={product} element={<ProductForm />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default RouterConfig;
