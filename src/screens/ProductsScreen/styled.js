import styled from "styled-components";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const BackG = styled.div `
background-color:#F0D75C;
`
export const ScreenContainer = styled.div`
 
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 40px;
  margin-left:60px;
   

  @media (max-width: 800px){
  display:grid;
  grid-template-columns: 1fr;
  margin: 40px

  }
`;

export const TextProduct = styled.div `

  padding-left: 65px;
  padding-top: 20px;
  padding-bottom: 10px;
  color:#332E19;

span{
  color:#3F51B5;
}

`
