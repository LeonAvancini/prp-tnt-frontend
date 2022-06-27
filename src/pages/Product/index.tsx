import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

import { lightGray, primary, red, secondary, white } from "../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${lightGray};
  padding: 0.5rem 0rem;
`;
const Title = styled.h3`
  text-align: center;
`;
const FormContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div<{ notColumn?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.notColumn ? "row" : "column")};
`;
const LabelStyled = styled.label`
  margin-bottom: 0.2rem;
`;
const InputStyled = styled.input`
  padding: 0.5rem 0.2rem 0.2rem 0.5rem;
  font-size: 0.9rem;
  &:focus-visible {
    outline: ${primary} auto 1px;
  }
`;
const InputTextAreaStyled = InputStyled.withComponent("textarea");

const Required = styled.span`
  color: ${red};
`;
const ErrorMessage = styled.p`
  color: ${red};
  margin-top: 0;
`;
const ButtonStyled = styled.button`
  padding: 0.7rem;
  background: ${secondary};
  border-radius: 0.4rem;
  color: ${white};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin: 1rem auto;
`;

interface FormData {
  name: string;
  description: string;
  price: number | null;
  image?: string;
  available: boolean;
}

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = yup
  .object({
    name: yup.string().required("Ingrese el nombre del producto"),
    description: yup.string().required("  la descripción del producto"),
    price: yup
      .number()
      .positive()
      .integer()
      .transform((value) => (isNaN(value) ? null : value))
      .nullable(),
    image: yup
      .mixed()
      .test("fileSize", "Imagen del producto es requerida", (file) => {
        return file && file[0]?.size;
      })
      .test("fileFormat", "Formato de imagen no soportado", (file) => {
        return SUPPORTED_FORMATS.includes(file[0]?.type);
      }),
    available: yup.boolean(),
  })
  .required();

//TODO: Add functions and props to create and edit products in the same Component
const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Container>
      <Title>Ingresar nuevo producto</Title>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <LabelStyled>
            <Required>*</Required> Nombre del producto
          </LabelStyled>
          <InputStyled
            autoFocus
            maxLength={25}
            type="text"
            {...register("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <LabelStyled>
            <Required>*</Required> Descripción
          </LabelStyled>
          <InputTextAreaStyled rows={5} {...register("description")} />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <LabelStyled>Precio</LabelStyled>
          <InputStyled type="number" {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <LabelStyled>
            <Required>*</Required> Imagen
          </LabelStyled>
          <input type="file" {...register("image")} />
          <ErrorMessage>{errors.image?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer notColumn>
          <LabelStyled>Disponible</LabelStyled>
          <input type="checkbox" {...register("available")} />
        </InputContainer>
        <ButtonStyled type="submit">Agregar producto</ButtonStyled>
      </FormContainer>
    </Container>
  );
};

export default ProductForm;
