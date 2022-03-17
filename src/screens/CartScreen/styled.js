import styled from "styled-components";


export const BackG = styled.div `
  background-color:#F0D75C;
`

export const TextInitial = styled.div`
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #332E19;

span{
  color:#3F51B5;
}

`

export const ScreenContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-left: 120px;


  @media (max-width: 800px){
    display:grid;
    grid-template-columns: 1fr;
    margin-right: 60px;
  }
  
`;

export const CartBuy = styled.div `
  border-bottom:none;
  border-right:none;
  border-left:none;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 20px;


h1{
  color: #332E19;
  font-size: 1.8rem;
  text-transform: uppercase;
}

@media (max-width: 800px){
  h1{
    font-size: 1.5rem;
  }

}

`

export const ButtonBuy = styled.button `
  margin-bottom: 40px;
  margin-top:20px;


  background-color: #3F51B5; /* Green */
  border: none;
  color: white;
  text-align: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 12px 28px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 800px){
    margin-top:10px;
    font-size: 1rem;
    padding: 12px 32px;
`