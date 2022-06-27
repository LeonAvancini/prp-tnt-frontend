import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { lightGray, secondary, white } from "../../utils/colors";
import ProductRow from "../../components/ProductRow";
import { product } from "../../utils/routes";
import mockResult from "./data-mockup.json";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${lightGray};
  padding: 0.5rem 0rem;
`;

const AddProductButton = styled.button`
  padding: 1rem;
  background: ${secondary};
  border-radius: 0.4rem;
  color: ${white};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
`;
interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number | null;
  image?: string;
  available: boolean;
}

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(product);
  };

  const ADMIN = true;

  const { data }: { data: ProductInterface[] } = mockResult;
  //TODO: Handling loading and error when we get data from API

  return (
    <ProductsContainer>
      {ADMIN && (
        <AddProductButton onClick={handleClick}>
          Agregar Producto
        </AddProductButton>
      )}
      {data.map((product: ProductInterface) => (
        <ProductRow
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          available={product.available}
          description={product.description}
        />
      ))}
    </ProductsContainer>
  );
};

export default Home;
