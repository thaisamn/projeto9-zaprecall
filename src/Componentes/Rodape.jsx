import { useState } from "react";
import styled from "styled-components";


export default function Rodape({cards}) {

    return (
      <SCRodape>
      {cards.filter(card => card.status).length || 0}/{cards.length || 0} CONCLUÍDOS
      </SCRodape>
    )
}

const SCRodape = styled.div`
    background-color: #fff;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  left: 0;
  bottom: 0;
`;