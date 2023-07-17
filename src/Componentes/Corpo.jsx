import Flashcard from "./Flashcard";
import { cards } from "../dados";
export default function Corpo() {
  return (
    <div>
      {cards.map((card, index) =>  <Flashcard key={index} card={card} numero={index + 1}/>)}
    </div>
  );
}
