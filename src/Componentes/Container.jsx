import styled from "styled-components";
import Corpo from "./Corpo";
import Rodape from "./Rodape";
import Titulo from "./Titulo";
import { cards } from "../dados";
import { useState } from "react";
export default function Container() {
  const [flashCards, setFlashCards] = useState(cards)

  const responder = (resposta, posicao) => {
    console.log(resposta, posicao)
    const card = flashCards[posicao]
    card.status = resposta;
    const newArray = [...flashCards]
    newArray[posicao] = card
    console.log(newArray)
    setFlashCards(newArray)
  }
  
  return (
    <SCContainer>
      <Titulo />
      <Corpo cards={flashCards} responder={responder}/>
      <Rodape cards={flashCards} />
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
