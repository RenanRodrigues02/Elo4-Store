import React from "react";
import { ButtonContainer } from "./styled";
import { goToCartScreen } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";


const CartButton = () => {
  const history = useHistory();
  return (
    <div>
    <ButtonContainer onClick={() => goToCartScreen(history)}>
      <span role="img" aria-label="carrinho">
        🛒
      </span>
    </ButtonContainer>
    </div>
  );
};

export default CartButton;