import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quanty, 0);
  return (
    <div className="cartTotal">
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartTotal;
