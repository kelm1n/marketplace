import { ICard } from "../../types";
import "./Card.css";

interface CardProps {
  card: ICard;
}
export default function Card({ card }: CardProps) {
  return (
    <div className="card">
      <img className="card__image" src={card.image}></img>
      <div className="card__content">
        <h3 className="card__title">{card.title}</h3>
        <p className="card__description">{card.description}</p>
        <p className="card__price">{card.price} ₽</p>
        <p className="card__category">{card.category}</p>
      </div>
      <button>Купить</button>
    </div>
  );
}
