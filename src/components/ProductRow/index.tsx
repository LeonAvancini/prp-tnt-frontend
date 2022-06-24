import { useState } from "react";
import styled from "styled-components";
import { darkGray, gray, primary, secondary, white } from "../../utils/colors";
import Modal from "../Modal";

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

const PreviewName = styled.h4`
  font-weight: 300;
  text-align: left;
  margin: 0rem 1rem;
`;

const PreviewPrice = styled.p`
  color: ${darkGray};
  font-size: 1.3rem;
  font-weight: bold;
`;

const PreviewProductImage = styled.img`
  height: auto;
  width: 20%;
  object-fit: contain;
  padding-right: 10px;
`;

const ProductImage = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 0.5rem;
  border-top: 1px solid ${primary};
  border-bottom: 1px solid ${primary};
`;

const Name = styled.h2`
  color: ${secondary};
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  position: absolute;
  top: -4.6rem;
  padding: 0.5rem;
  right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

const ProductPrice = styled.p`
  color: ${white};
  font-weight: bold;
`;

const DescriptionText = styled.h3`
  margin-top: 0rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  text-align: left;
  margin: 0;
`;

interface ProductRowProps {
  name: string;
  price: number | null;
  image?: string;
  available: boolean;
  description: string;
}

const ProductRow = ({
  name,
  price,
  image,
  available,
  description,
}: ProductRowProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    // e.preventDefault();
    console.log("ENTRO");
    toggleModal();
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <RowContainer showProduct={available} onClick={handleModal}>
        <PreviewProductImage src={image} alt={name} />
        <ProductInformation>
          <PreviewName>{name}</PreviewName>
          <PreviewPrice>{price && <>${price}</>}</PreviewPrice>
        </ProductInformation>
      </RowContainer>
      <Modal open={isOpen} onClose={handleModal}>
        <Name>{name}</Name>
        <ProductImage src={image} alt={name} />
        <DescriptionContainer>
          {price && (
            <ProductPriceContainer>
              <ProductPrice>${price}</ProductPrice>
            </ProductPriceContainer>
          )}
          <DescriptionText>Descripcion:</DescriptionText>
          <ProductDescription>{description}</ProductDescription>
        </DescriptionContainer>
      </Modal>
    </>
  );
};

export default ProductRow;
