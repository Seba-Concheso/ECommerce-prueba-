import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
// import "./CartElement.css";

const CartElement = () => {
  const { cart } = useContext(dataContext);

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <div className="cartContent">
        {cart?.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} className="cartImage" alt={product.title} />
            <h5>{product.name}</h5>
            <CartItemCounter product={product} />
            <h6>${product.price * product.quanty}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartElement;
