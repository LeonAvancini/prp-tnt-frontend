import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { lightGray, secondary, white } from "../../utils/colors";
import ProductRow from "../../components/ProductRow";
import { product } from "../../utils/routes";

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

//FIXME: ProductInterface is used in two differents components (Home | Product)
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
  const [products, setProducts] = useState<ProductInterface[] | undefined>([]);

  const handleClick = () => {
    navigate(product);
  };

  const ADMIN = true;

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/product/all");
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery<
    ProductInterface[],
    Error
  >("products", fetchProducts);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) {
    return <>Cargando...</>;
  }

  if (isError) {
    return <>Ocurrio un error - {error}</>;
  }

  if (!products) {
    return <>No se encontraron productos</>;
  }

  return (
    <ProductsContainer>
      {ADMIN && (
        <AddProductButton onClick={handleClick}>
          Agregar Producto
        </AddProductButton>
      )}
      {products.map((product: ProductInterface) => (
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
