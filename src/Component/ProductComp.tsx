import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../Context/CartContext";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

// type Product = {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     image: string;
//   };

const ProductComp: React.FC = () => {
    const cartContext  = useContext(CartContext);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handlefetch();
  }, []);



  const handlefetch: () => Promise<void> = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      let data = res.data;

      setProducts(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleAddToCart = (product: Product) => {
    cartContext?.addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description,
    });
  };

  return (
    <div className="mt-4 ms-5 ">
      <div className="row ms-5">
        {products.map((product) => (
          <div className="card col-3 m-4  ">
            <img
              className="card-img-top"
              src={product.image}
              alt="Card image cap"
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description.substring(0, 100)}
              </p>
              <a onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComp;
