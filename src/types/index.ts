export interface Pedal {
  id: number;
  name: string;
  description_short: string;
  description_long: string;
  image: string[];
  review: string;
  newFlag: boolean;
  price: number;
}

export interface Artist {
  id: number;
  name: string;
  description: string;
  image: string;
  pedals?: Pedal[];
}

export interface Session {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Pedal;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
  authorPhoto?: string;
}
