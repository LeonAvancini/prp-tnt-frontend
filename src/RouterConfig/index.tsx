import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { product, root, editproduct } from "../utils/routes";
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
          <Route path={editproduct} element={<ProductForm />} />
          {/* product/edit/id*/}
          {/**TODO: ProductForm will need change to create or edit product */}
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default RouterConfig;
