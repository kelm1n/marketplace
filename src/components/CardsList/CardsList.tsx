import { ICard } from "../../types";
import Card from "../Card/Card";
import "./CardsList.css";

interface CardsListProps {
  cards: ICard[];
}

export default function CardsList({ cards }: CardsListProps) {
  return (
    <div className="cards-list">
      {cards.map((card) => (
        <Card card={card}></Card>
      ))}
    </div>
  );
}
