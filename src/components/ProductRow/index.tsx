import styled from "styled-components";

import { white } from "../../utils/colors";

const RowContainer = styled.div<{ showProduct?: boolean }>`
  display: ${(props) => (props.showProduct ? "flex" : "none")};
  flex-direction: row;
  background-color: ${white};
  margin: 10px 0px 0px 0px;
  padding: 10px 10px;
  height: 5rem;
`;

const ProductInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  height: auto;
  width: 20%;
  object-fit: contain;
  padding-right: 10px;
`;

interface ProductRowProps {
  name: string;
  description?: string;
  price: number | null;
  image?: string;
  available: boolean;
}

const ProductRow = ({
  name,
  description,
  price,
  image,
  available,
}: ProductRowProps) => {
  return (
    <RowContainer showProduct={available}>
      <ProductImage src={image} alt={name} />
      <ProductInformation>
        <div>{name}</div>
        <div>{price && <>${price}</>}</div>
      </ProductInformation>
    </RowContainer>
  );
};

export default ProductRow;
