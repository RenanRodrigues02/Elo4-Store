import React from "react";
import { useHistory } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { TextContainer } from "../../components/CartItem/syled";
import { goToProductsScreen } from "../../routes/coordinator";

import { ScreenContainer, CartBuy, ButtonBuy, TextInitial, BackG   } from "./styled";

const CartScreen = ({ cart, setCart }) => {
  const history = useHistory();

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    const newCart = [...cart];

    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart);
  };

  let priceToPay = 0;
  cart.forEach((prod) => {
    priceToPay += Number(prod.price) * prod.amount;
  });

  const cartCards = cart.map((prod) => {
    return (
      <CartItem key={prod.id} product={prod} removeFromCart={removeFromCart} />
    );
  });

  return (
    <BackG>
      <TextInitial>
        <h1> 🛒 Meu Carrinho<span>.</span></h1>
      </TextInitial>
    <ScreenContainer>
      {cartCards}
    </ScreenContainer>
    <CartBuy>
    <h1> Valor total: R${Number(priceToPay).toFixed(2)}</h1>
    <ButtonBuy onClick={() => goToProductsScreen(history)}>
      comprar
    </ButtonBuy>
    </CartBuy>
   
    </BackG>
  );
};

export default CartScreen;
