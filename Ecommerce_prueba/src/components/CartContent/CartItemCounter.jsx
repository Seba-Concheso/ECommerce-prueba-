import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

/* eslint-disable react/prop-types */
const CartItemCounter = ({ product }) => {
  const { cart, setCart, addCart } = useContext(dataContext);
  const decrese = () => {
    const productRepeat = cart.find((item) => item.id === product.id);
    productRepeat.quanty > 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)));
  };
  return (
    <>
      <p className="counterButton" onClick={decrese}>
        -
      </p>
      <p>{product.quanty}</p>
      <p className="counterButton" onClick={() => addCart(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
