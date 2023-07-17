import styled from "styled-components";
import Corpo from "./Corpo";
import Rodape from "./Rodape";
import Titulo from "./Titulo";

export default function Container() {
  return (
    <SCContainer>
      <Titulo />
      <Corpo />
      <Rodape />
    </SCContainer>
  );
}

const SCContainer = styled.div`
  margin-top: 42px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100% !important;
`;
