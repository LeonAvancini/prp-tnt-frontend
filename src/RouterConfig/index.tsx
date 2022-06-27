import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { product, backoffice, root, editproduct } from "../utils/routes";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from "../pages/Home";
import ProductForm from "../components/ProductForm";
import Backoffice from "../pages/Backoffice";

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
          <Route path={backoffice} element={<Backoffice />} />
          {/**TODO: ProductForm will need change to create or edit product */}
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default RouterConfig;
