import { useState, useRef } from "react";
import { Menu } from "../../mockData/product";
import "./User.css";

function MenuComponent() {
  const [cart, setCart] = useState([]);
  const specialRequestsRefs = useRef({});

  const [countdowns, setCountdowns] = useState({});

  function handleOrder(product, index) {
    const specialRequest = specialRequestsRefs.current[index]?.value || "";
    const updatedCart = [...cart, { ...product, specialRequest }];
    setCart(updatedCart);

    startCountdown(updatedCart.length - 1, product.time);
  }

  function removeFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );

    const updatedCountdowns = { ...countdowns };
    delete updatedCountdowns[indexToRemove];
    setCountdowns(updatedCountdowns);
  }

  function startCountdown(index, time) {
    setCountdowns((prevCountdowns) => ({
      ...prevCountdowns,
      [index]: time * 60,
    }));

    const interval = setInterval(() => {
      setCountdowns((prevCountdowns) => {
        const secondsLeft = prevCountdowns[index] - 1;
        if (secondsLeft <= 0) {
          clearInterval(interval);
          return { ...prevCountdowns, [index]: 0 };
        }
        return { ...prevCountdowns, [index]: secondsLeft };
      });
    }, 1000);

    return () => clearInterval(interval);
  }

  return (
    <div>
      <h2 className="MenuName">Restoran Menüsü</h2>
      <div className="menu-items">
        {Menu[0].products.map((product, index) => (
          <div className="menu-item" key={index}>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price}</p>
            <img className="MenuImage" src={product.image} alt={product.name} />
            <input
              type="text"
              placeholder="özel isteklerinizi yazın"
              ref={(el) => (specialRequestsRefs.current[index] = el)}
            />
            <button onClick={() => handleOrder(product, index)}>
              Sipariş Ver
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Siparişleriniz</h3>
        {cart.map((item, index) => (
          <div key={index} className="menu-item">
            <h4>{item.name}</h4>
            <p>Fiyat: {item.price}</p>
            <img className="MenuImage" src={item.image} alt={item.name} />
            {item.specialRequest && <p>Özel İstek: {item.specialRequest}</p>}
            <p>
              Hazırlanmasına Kalan Süre: {Math.floor(countdowns[index] / 60)}:
              {("0" + (countdowns[index] % 60)).slice(-2)}
            </p>
            <button onClick={() => removeFromCart(index)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuComponent;
