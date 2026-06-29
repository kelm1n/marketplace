import Card from "./components/Card/Card";
import CardsList from "./components/CardsList/CardsList";
import { ICard } from "./types";
import "./App.css";
import Cookies from "./components/Cookies/Cookies";

export default function App() {
  const LISTCARDS: ICard[] = [
    {
      id: 1,
      title: "Iphone 11",
      description: "новый",
      price: 20000,
      category: "электроника",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq30IyrAzg4M9jRiMh4tEbp4Oh34_EF82Gd5WxtkBhCQ&s=10",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 12",
      description: "новый",
      price: 27000,
      category: "электроника",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_xodFcZq8TWApwjn4wggI9L0lOMBwDYcgJSeU5slBg&s=10",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 13",
      description: "новый",
      price: 35000,
      category: "электроника",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo46IfSsl7NsfI5BkPflnoTJ-w741wr6Hdbt2fwGdjlQ&s=10",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 14",
      description: "новый",
      price: 42000,
      category: "электроника",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22UDK_T1G-PTP8F-ibRebzLVQ--yojjBxdLJhJDkuHw&s=10",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 15",
      description: "новый",
      price: 60000,
      category: "электроника",
      image:
        "https://i.pinimg.com/originals/ea/2b/18/ea2b18ce95258f07ec84b2029b09b597.jpg?nii=t",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 16",
      description: "новый",
      price: 70000,
      category: "электроника",
      image:
        "https://i.pinimg.com/originals/ea/2b/18/ea2b18ce95258f07ec84b2029b09b597.jpg?nii=t",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
    {
      id: 1,
      title: "Iphone 17",
      description: "новый",
      price: 85000,
      category: "электроника",
      image:
        "https://i.pinimg.com/originals/ea/2b/18/ea2b18ce95258f07ec84b2029b09b597.jpg?nii=t",
      author: { id: 2, name: "s", email: "ss" },
      createdAt: "2026-06-01",
    },
  ];

  return (
    <div>
      <h1>Маркетплейс</h1>
      <CardsList cards={LISTCARDS}></CardsList>
      <Cookies></Cookies>
    </div>
  );
}
