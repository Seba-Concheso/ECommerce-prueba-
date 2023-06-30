import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Product from "../Products/Product";
const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="products-container">
        <Product />
      </div>
    </>
  );
};

export default Home;
