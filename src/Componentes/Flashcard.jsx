import styled from "styled-components"

export default function Flashcard({card, numero}) {

    return (
      <SCFlashCard>
        <span>Pergunta {numero}</span>
        <img src="assets/img/seta_play.png" alt="play" srcset="" />
      </SCFlashCard>
    )
}

const SCFlashCard = styled.div`
  width: 300px;
  height: 65px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #ffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  margin-top: 24px;

  span{
    font-size: 16px;
    font-weight: 700;
    color: #333333;
  }

  img{
    width: 20px;
    height: 23px;
  }

`;