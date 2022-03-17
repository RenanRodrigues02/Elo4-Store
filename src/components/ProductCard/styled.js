import styled from "styled-components";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const CardContainer = styled(Card)`
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  
  @media (max-width: 800px){
    width: 280px;  
    
  }

`;

export const ButtonBuy = styled.button`

  background-color: #3F51B5; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  ButtonBuy:hover;
  padding: 8px 20px;
  border-radius: 4px 0px 0px 4px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  }
    button{
      button:hover;
    transition: width 0.8s;
    background:red;
  }


`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // display: grid;
  // grid-template-columns: 1fr;
  align-items: center;
  height: 40px;
  padding: 10px;
  width: 200px;

  @media (max-width: 800px){
    width: 280px;  
    
  }

`;

export const PriceText = styled.h3`
  margin: 0;
  color:#332E19;
  font-size: 1.2em;

  @media (max-width: 800px){
    font-size: 1.5em;  
  }

`;

export const NameText = styled.h3`
  margin: 10px 0;
  color: #332E19;
  
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;

`;
