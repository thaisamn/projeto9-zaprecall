import styled from "styled-components"

export default function Titulo() {
    return (
      <SCTitulo>
      <img src="assets/img/logo.png" alt="logo" srcset="sei nao" />
      <h1>ZapRecall</h1>
      </SCTitulo>
    )
}


const SCTitulo  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  h1{
  font-family: 'Righteous', cursiva;
  font-size: 36px;
  color: #ffff;
  }
  img{
    margin-right: 36px;
    width: 52px;
    height: 60px;
  }
`;