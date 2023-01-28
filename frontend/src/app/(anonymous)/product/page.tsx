import { FC } from "react";

type Product = {
  name: string;
  description: string;
};

const ProductPage: FC<Product> = ({ name, description }) => {
  return (
    <div>
      <h1>Product</h1>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductPage;
