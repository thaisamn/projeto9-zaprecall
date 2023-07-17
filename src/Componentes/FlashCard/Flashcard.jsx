import { useState } from "react";
import { colors } from "../../dados";
import {
  SCFlashCard,
  SCFlashCardButton,
  SCOpenFlashCard,
  SCOpenVerseFlashCard,
} from "./Flashcard.styles";


export default function Flashcard({ card, index, responder}) {
  const [clicado, setClicado] = useState(false);
  const [virado, setVirado] = useState(false);
  const { GREEN, RED, YELLOW } = colors;


  const tratarResposta = (key) => {
    let retorno = {}
    switch (key) {
      case 'acertou':
        retorno = {
            color: GREEN,
            icon: 'icone_certo'
          }
        break;
        case 'quase':
          retorno = {
            color: YELLOW,
            icon: 'icone_quase'
          }
        break;
        case 'errou':
          retorno = {
            color: RED,
            icon: 'icone_erro'
          }
        break;
      default:
        retorno = {
          icon: 'seta_play'
        }
        break;
    }
  
    return retorno
  }

  const responderFlashCard = (resposta, posicao) => {
    setClicado(false);
    responder(resposta, posicao)
  }
  
  return (
    <div seletor data-test="flashcard" >
      {!clicado  && (
        <SCFlashCard clicado={card.status} color={tratarResposta(card.status).color} >
          <p seletor data-test="flashcard-text">Pergunta {index + 1}</p> 
          <img  data-test="play-btn" onClick={() => !card.status && setClicado(!clicado)} src={`assets/img/${tratarResposta(card.status).icon}.png`} alt="" srcset="" />
        </SCFlashCard>
      )}
      {clicado && (
        <>
          {!virado ? (
            <SCOpenFlashCard>
              <p seletor data-test="flashcard-text">{card.question}</p>
              <div >
                <img
                  onClick={() => setVirado(!virado)}
                  data-test="turn-btn"
                  src="assets/img/seta_virar.png"
                  alt=""
                  srcset=""
                />
              </div>
            </SCOpenFlashCard>
          ) : (
            <SCOpenVerseFlashCard>
              <p seletor data-test="flashcard-text">{card.answer}</p>
              <div>
                <SCFlashCardButton data-test="no-btn" onClick={_ => responderFlashCard('errou', index)} color={RED}>Não lembrei</SCFlashCardButton>
                <SCFlashCardButton  data-test="partial-btn" onClick={_ => responderFlashCard('quase', index)} color={YELLOW}>
                  Quase não lembrei
                </SCFlashCardButton>
                <SCFlashCardButton  data-test="zap-btn" onClick={_ => responderFlashCard('acertou', index)} color={GREEN}>Zap!</SCFlashCardButton>
              </div>
            </SCOpenVerseFlashCard>
          )}
        </>
      )}
    </div>
  );
}
