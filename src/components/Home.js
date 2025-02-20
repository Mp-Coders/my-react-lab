import React from "react";
import "./../styles/Home.css"; 

const Home = ({ addToCart }) => {
  const products = [
    { id: 1, name: "MinimalDeskLamp", price: "$89.99", img: "https://www.google.com/imgres" },
    { id: 2, name: "CeramicCoffeMug", price: "$24.99", img: "https://www.google.com/imgres" },
    { id: 3, name: "LeatherNoteBook", price: "$34.99", img: "https://www.google.com/imgres" },
    { id: 4, name: "BamboPlantStand", price: "$49.99", img: "https://www.google.com/imgres" },
    { id: 5, name: "AbstractWallArt", price: "$129.99", img: "https://www.google.com/imgres" },
    { id: 6, name: "GeometricBookEnds", price: "$39.99", img: "https://www.google.com/imgres" },
  ];
  

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
