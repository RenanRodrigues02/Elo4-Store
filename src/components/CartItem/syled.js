import styled from "styled-components";
import Card from '@material-ui/core/Card'

export const ItemContainer = styled(Card)`
   display: flex;
  flex-direction: row; 
  height: 220px;
  width: 500px;
  justify-content: space-between;
  margin-top: 20px;
  

  @media (max-width: 800px){
    /* display:grid;
    grid-template-columns: 1fr; */
   
    margin-top: 40px;
    width: 300px;
    margin-right: 50px;
  }

`;

export const ItemImage = styled.img`
  height: 230px;
  width: 230px;

  @media (max-width: 800px){
    height: 230px;
    width: 130px;
    
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    color:black;
    font-size: 1.3rem;
  }
  @media (max-width: 800px){
   
    p{
        color:black;
        font-size: 1rem; 
      } 
    }
`;

export const NameText = styled.h2`
  margin: 30px;
  font-size: 1.5rem;

  @media (max-width: 800px){
      width:150px;  
      font-size: 1rem; 
      }
    } 

`;

export const ButtonRemove = styled.button `
  margin-top: 15px;
  background-color: #EE1818; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration:upperCase;
  display: inline-block;
  font-size: 12px;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 800px){
      margin-top: 20px;

  }


`