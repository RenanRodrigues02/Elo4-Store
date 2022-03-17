
import React from "react";
import logo from "../../assets/logo.png"
import product01 from"../../assets/product01.jpg"
import product02 from"../../assets/product02.jpg"
import product03 from"../../assets/product03.jpg"
import logo2 from "../../assets/logo2.png"
import {ButtonContainer,ButtonAction, ContainerIntro,ContainerIntro2, ContainerImage2, Footer, LogoImage, ProductImage, TextButton, TextHome, TextHome2, TextHomeContainer, TextHomeProduct1} from "./styled"
import {LogoImage2} from "./styled"
import {useHistory} from "react-router-dom"
import { goToProductsScreen } from "../../routes/coordinator";
import Button from '@material-ui/core/Button'



const HomePage = () => {
  const history = useHistory ()
  return (
      <div>
        <ContainerIntro>
        <h1>Ser feliz é simples.</h1>
        <h2>É contagiante.</h2>
        </ContainerIntro>
        <ButtonAction onClick={() =>  goToProductsScreen (history)}>   
           <h3>NOSSOS PRODUTOS</h3>
           </ButtonAction>  

        <LogoImage src={logo} />
        <ContainerIntro2>
        <h3>Tudo que você precisa em um só lugar. Aproveite!</h3>
        </ContainerIntro2>
     
       
      </div>

  );
};

export default HomePage;
