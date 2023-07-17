const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", status: "" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", status: "" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula", status: "" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões", status: "" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", status: "" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", status: "" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes", status: "" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
const colors = {
    GREEN: "#2FBE34",
    YELLOW: "#FF922E",
    RED: "#FF3030",
    GRAY: "#333333"
  }
  

export {
    cards,
    colors
}