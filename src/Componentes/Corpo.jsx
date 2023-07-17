import styled from "styled-components";
import Flashcard from "./FlashCard/Flashcard";
export default function Corpo({cards, responder}) {
  return (
    <SCCorpo>
      {cards.map((card, index) =>  <Flashcard key={index} card={card} index={index} responder={responder}/>)}
    </SCCorpo>
  );
}


const SCCorpo = styled.div`
  margin-bottom:  100px;
`;
