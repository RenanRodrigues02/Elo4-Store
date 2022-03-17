import React from "react";
import {
  ProductImage,
  CardContainer,
  PriceContainer,
  PriceText,
  NameText,
  ButtonBuy
} from "./styled";

const ProductCard = (props) => {
  const { name, photos, price } = props.product;

  return (
    <CardContainer>
      <ProductImage alt={name} src={photos[0]} />
      <NameText>{name}</NameText>
      <PriceContainer>
        <PriceText>R${Number(price).toFixed(2)}</PriceText>
        <ButtonBuy onClick={() => props.addItemToCart(props.product)}>
          COMPRAR
        </ButtonBuy>
      </PriceContainer>
    </CardContainer>
  );
};

export default ProductCard;
