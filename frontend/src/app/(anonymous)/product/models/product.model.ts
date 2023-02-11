export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

type Rating = {
  count: number;
  rate: number;
};
