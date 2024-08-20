import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartComp: React.FC = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="mt-4">
      <h2>Your Cart</h2>
      <div className="row">
        {cartContext?.cart.map((item) => (
          <div className="col-3 mb-4 m-3">
            <div className="card">
              <img
                className="card-img-top"
                src={item.image}
                height={200}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title.substring(0,20)}</h5>
                <p className="card-text">{item.description.substring(0,90)}</p>
                <a className="btn btn-primary">Quantity: {item.count}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComp;
