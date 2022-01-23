import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({
  cartItems,
  handleRemoveFromCart,
  clearCart,
  currentUser,
}) {
  const navigate = useNavigate();
  const menu_id = cartItems.map((item) => item.id);

  function handlePost() {
    menu_id.map((i) => {
      fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu_id: i, customer_id: currentUser.id }),
      })
        .then((res) => res.json())
        .then(() => {
          clearCart();
          navigate("/orderPage");
        });
    });
  }

  const totalPrice = cartItems.reduce((price, item) => price + item.price, 0);

  let addedItems = cartItems.length ? (
    cartItems.map((item) => {
      return (
        <div>
          <div key={item.name}>
            <div>
              <div>
                <span>{item.name}</span>
                <p>
                  <b>Price: ${item.price}</b>
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Nothing is in the bag</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <div >In your Bag:</div>
        <div >{addedItems}</div>
        <div> Total: $ {totalPrice}</div>
        <div>
          <button
            onClick={handlePost}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
