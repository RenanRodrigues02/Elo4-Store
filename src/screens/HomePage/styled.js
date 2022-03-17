import styled from 'styled-components'

export const ContainerIntro = styled.div `

  display:block;
  padding-top:8%;
  padding-left:55%;


h1{
  width: 80%;
  color:#2A457D;
  font-size: 1.8rem;
}

h2{
  color:#F8F4F4;
}

@media (max-width: 800px){
  h1{
    position:absolute;
    width:230px;
    font-size:1.5rem;
    color:#2A457D;
    top:120px;
    right:55px;
  }
  h2{
    position:absolute;
    width:230px;
    font-size:1.2rem;
    top:160px;
    right:50px;
  }
}

`
export const ContainerIntro2 = styled.div `
  width:220px;
  padding-left:36%;
  padding-top: 90px;
  color:#332E19;

@media (max-width: 450px){
    position:absolute;
    width: 200px;
    font-size:1rem;
    top:310px;
    right:85px;
  }

`

export const LogoImage = styled.img`
  width: 18%;
  position:absolute;
  bottom:43%;
  margin-left: 35%;
  opacity: 120%;

@media (max-width: 800px){

  position:absolute;
  width: 200px;
  height:200px;

  right:90px;
  top:210px;

}

`
export const LogoImage2 = styled.img`
  position:absolute;
  width: 85px;
  height: 85px;
  position:absolute;
  bottom: 10%;
  margin-left: 4%;
  transition: 4s;

`
export const ButtonAction = styled.button`
  position:absolute;
  left:700px;
  margin-top:8px;
  
  border: none;
  letter-spacing: 0.2rem;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  padding: 12px 28px;
  cursor:pointer;
  background-color: #FBD830;
  color: black;
  border: 3px solid #3F51B5;
  border-right:none;
  border-left:none;

  @media (max-width: 380px) {
  
  position:absolute;
  background-color: blue;
  left:80px;
  top:510px;
  font-size: 10px;
  letter-spacing: 0.1rem;
  border: none;
  background-color: #FBD830;
  border: 3px solid #3F51B5;
  border-right:none;
  border-left:none;
  }

`


