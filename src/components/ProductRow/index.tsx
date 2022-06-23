import styled from "styled-components";
import { darkGray, gray, white } from "../../utils/colors";
import ProductModal from "../ProductModal";

const RowContainer = styled.div<{ showProduct?: boolean }>`
  display: ${(props) => (props.showProduct ? "flex" : "none")};
  flex-direction: row;
  background-color: ${white};
  margin: 10px 0px 0px 0px;
  padding: 10px 20px;
  height: 5rem;
  &:hover {
    background-color: ${gray};
  }
`;

const ProductInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameStyled = styled.h4`
  font-weight: 300;
`;

const PriceStyled = styled.p`
  color: ${darkGray};
  font-size: 1.3rem;
  font-size: bold;
`;

const ProductImage = styled.img`
  height: auto;
  width: 20%;
  object-fit: contain;
  padding-right: 10px;
`;

interface ProductRowProps {
  name: string;
  price: number | null;
  image?: string;
  available: boolean;
}

const ProductRow = ({ name, price, image, available }: ProductRowProps) => {
  // TODO: Create a react portal => https://mauriciogc.medium.com/react-portales-8ff12de4b8e9
  return (
    <>
      <RowContainer
        showProduct={available}
        onClick={() => console.log("Open modal function")}
      >
        <ProductImage src={image} alt={name} />
        <ProductInformation>
          <NameStyled>{name}</NameStyled>
          <PriceStyled>{price && <>${price}</>}</PriceStyled>
        </ProductInformation>
      </RowContainer>
      <ProductModal onClose={() => console.log("Close modal function")} />
    </>
  );
};

export default ProductRow;
