
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolbar} from "./styled"
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import { goToProductsScreen,  goToHomePage } from "../../routes/coordinator";




const Header = () => {

  const history = useHistory ()
  return (

    <AppBar position="static">
      <StyledToolbar> 
        <Button onClick={() => goToHomePage  (history)} color="inherit">ELO4-STORE</Button>
        <Button onClick={() => goToProductsScreen  (history)} color="inherit"> VER PRODUTOS</Button>
      </StyledToolbar>
      
  </AppBar>



  );
};

export default Header;
