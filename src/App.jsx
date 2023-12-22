import "./App.css";
import { useState } from "react";
import products from "./data/products";

function App() {
  const [totalProduct, setTotalProduct] = useState(products);
  const [addProductCart, setAddProductCart] = useState([]);

  const productIncart = (index) => {
    const newProductInCart = [...addProductCart];
    newProductInCart.push({ ...totalProduct[index], quantity: 1 });
    setAddProductCart(newProductInCart);
  };

  const deleteProductInCart = (index) => {
    const newProductInCart = [...addProductCart];
    newProductInCart.splice(index, 1);
    setAddProductCart(newProductInCart);
  };

  const addQuantity = (index) => {
    const updatedCart = [...addProductCart];
    updatedCart[index].quantity += 1;
    setAddProductCart(updatedCart);
  };

  const subtractQuantity = (index) => {
    const newProductInCart = [...addProductCart];
    if (newProductInCart[index].quantity > 0) {
      newProductInCart[index].quantity -= 1;
    }
    setAddProductCart(newProductInCart);
  };

  const calculateTotalPrice = () => {
    return addProductCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div className="App">
      <section className="product-container">
        <h1 className="product-heading">Products</h1>
        <div className="product-list">
          {totalProduct.map((productList, index) => {
            return (
              <div key={index} className="product">
                <img src={productList.image} alt={productList.name} />
                <h2>{productList.name}</h2>
                <p>{productList.price}</p>
                <button
                  onClick={() => {
                    productIncart(index);
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
      <h1 className="cart-heading">
        Cart (Total Price is {calculateTotalPrice()} Baht)
      </h1>
      {addProductCart.map((productList, index) => {
        return (
          <section key={index} className="cart">
            <div className="cart-item-list">
              <div className="cart-item">
                <h1>Item name: {productList.name}</h1>
                <h2>Price: {productList.price} Baht</h2>
                <h2>Quantity: {productList.quantity}</h2>
                <button
                  className="delete-button"
                  onClick={() => deleteProductInCart(index)}
                >
                  x
                </button>
                <div className="quantity-actions">
                  <button
                    className="add-quantity"
                    onClick={() => addQuantity(index)}
                  >
                    +
                  </button>
                  <button
                    className="subtract-quantity"
                    onClick={() => subtractQuantity(index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
  a;
}
export default App;
