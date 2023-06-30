import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Product.css";
const Product = () => {
  const { data, addCart } = useContext(dataContext);

  return (
    <div className="productContainer">
      {data?.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} className="image" alt={product.title} />
          <h5>{product.title}</h5>
          <h6>${product.price}</h6>

          <button className="button" onClick={() => addCart(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
