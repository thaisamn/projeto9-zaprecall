import styled from "styled-components";

export const SCFlashCardButton = styled.button`
  background-color: ${props => props.color || '#ffff'};
  width: 84px;
  height: 36px;
  border-radius: 5px;
  border: 0;
  color: #ffff;
  font-size: 12px;
  font-family: Recursive;
  cursor: pointer;
`;

export const SCOpenVerseFlashCard = styled.div`
  width: 295px;
  max-width: 300px !important;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 15px;
  margin-top: 24px;

  div {
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const SCOpenFlashCard = styled.div`
  width: 295px;
  max-width: 300px !important;
  height: 131px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 15px;
  margin-top: 24px;

  img {
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: row-reverse;

  }
`;


export const SCFlashCard = styled.div`
  width: 300px;
  height: 65px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  margin-top: 24px;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color ||  '#333333'};
    text-decoration: ${props => props.clicado && 'line-through'};
  }

  img {
    width: 20px;
    height: 23px;
  }
`;
