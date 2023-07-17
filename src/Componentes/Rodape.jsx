import styled from "styled-components";


export default function Rodape() {

    return (
      <SCRodape>
      0/4 CONCLUÍDOS
      </SCRodape>
    )
}

const SCRodape = styled.div`
    background-color: #25e913;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  left: 0;
  bottom: 0;
`;