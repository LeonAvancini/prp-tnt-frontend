import styled from "styled-components";

import ProductRow from "../../components/ProductRow";
import { lightGray } from "../../utils/colors";
import mockResult from "./data-mockup.json";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${lightGray};
  padding: 0.5rem 0rem;
`;
interface ProductInterface {
  id: number;
  name: string;
  description?: string;
  price: number | null;
  image?: string;
  available: boolean;
}

const Home = () => {
  const { data }: { data: ProductInterface[] } = mockResult;

  return (
    <ProductsContainer>
      {data.map((product: ProductInterface) => (
        <ProductRow
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          available={product.available}
        />
      ))}
    </ProductsContainer>
  );
};

export default Home;
