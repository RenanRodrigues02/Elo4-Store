import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartButton from "../../components/CartButton/CartButton";
import { BackG, ScreenContainer,TextProduct } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const ProductsScreen = ({ cart, setCart }) => {
  // const {cart, setCart} = props
  const products = useRequestData(`${BASE_URL}/products`);

  const addItemToCart = (newItem) => {
    const index = cart.findIndex((i) => i.id === newItem.id);
    const newCart = [...cart];

    if (index === -1) {
      // não está no carrinho
      const cartItem = { ...newItem, amount: 1 };
      newCart.push(cartItem);
    } else {
      // já está no carrinho
      newCart[index].amount += 1;
    }

    setCart(newCart);
  };

  const productCards =
    products &&
    products.products.map((prod) => {
      return (
        <ProductCard
          key={prod.id}
          product={prod}
          addItemToCart={addItemToCart}
        />
      );
    });

  return (
    <div>
      <BackG>
      <TextProduct>
        <h1>Nossos Produtos<span>.</span></h1>
      </TextProduct>
    <ScreenContainer>
      {productCards}
      <CartButton />
    </ScreenContainer>
    </BackG>
    </div>
   
  );
};

export default ProductsScreen;
