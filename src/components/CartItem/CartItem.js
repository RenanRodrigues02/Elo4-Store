import React from "react";
import { ItemContainer, ItemImage, TextContainer, NameText, ButtonRemove } from "./syled";

const CartItem = (props) => {
  return (
    <div>
    <ItemContainer>
      <ItemImage alt={props.product.name} src={props.product.photos[0]} />
      <TextContainer>
        <NameText>{props.product.name}</NameText>
        <p>
          R${Number(props.product.price).toFixed(2)}{" "}
          <b>x{props.product.amount}</b>
        </p>
        <ButtonRemove onClick={() => props.removeFromCart(props.product)}>
        Remover
      </ButtonRemove>
      </TextContainer>
    </ItemContainer>
 

    </div>
    
  );
};

export default CartItem;
