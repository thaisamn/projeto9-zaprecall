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
    <>
      {!clicado  && (
        <SCFlashCard clicado={card.status} color={tratarResposta(card.status).color} onClick={() => setClicado(!clicado)}>
          <p>Pergunta {index + 1}</p>
          <img src={`../../public/assets/img/${tratarResposta(card.status).icon}.png`} alt="" srcset="" />
        </SCFlashCard>
      )}
      {clicado && (
        <>
          {!virado ? (
            <SCOpenFlashCard>
              <p>{card.question}</p>
              <div onClick={() => setVirado(!virado)}>
                <img
                  src="../../public/assets/img/seta_virar.png"
                  alt=""
                  srcset=""
                />
              </div>
            </SCOpenFlashCard>
          ) : (
            <SCOpenVerseFlashCard>
              <p>{card.answer}</p>
              <div>
                <SCFlashCardButton onClick={_ => responderFlashCard('errou', index)} color={RED}>Não lembrei</SCFlashCardButton>
                <SCFlashCardButton onClick={_ => responderFlashCard('quase', index)} color={YELLOW}>
                  Quase não lembrei
                </SCFlashCardButton>
                <SCFlashCardButton onClick={_ => responderFlashCard('acertou', index)} color={GREEN}>Zap!</SCFlashCardButton>
              </div>
            </SCOpenVerseFlashCard>
          )}
        </>
      )}
    </>
  );
}
