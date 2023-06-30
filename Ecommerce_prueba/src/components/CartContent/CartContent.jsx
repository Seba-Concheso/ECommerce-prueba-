import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
const CartContent = () => {
  const { cart } = useContext(dataContext);

  //condicional para el carrito si esta vacio con ternario

  return cart.length > 0 ? (
    <>
      <CartElement />
      <CartTotal />
    </>
  ) : (
    <h2>Tu carrito esta vacio</h2>
  );
};

export default CartContent;
