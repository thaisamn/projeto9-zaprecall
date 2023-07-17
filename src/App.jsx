import styled from "styled-components"
import Container from "./Componentes/Container"

export default function App() {

  return (
    <SCApp>
      <Container/>
    </SCApp>
  )
}

const SCApp = styled.div`
  font-family: 'Recursive', sans-serif;
`;