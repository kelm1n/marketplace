export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  author: IUser;
  createdAt: string;
}

// карточка в корзине
export interface ICardOrder extends ICard {
  //наследование - extends
  quantity: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export enum Category {
  Electronics = "Электроника",
  Clothing = "Одежда",
  Other = "Другое",
}
