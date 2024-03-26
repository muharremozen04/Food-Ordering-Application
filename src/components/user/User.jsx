import { useState, useRef } from "react";
import { Menu } from "../../mockData/product";
import "./User.css";

function MenuComponent() {
  const [cart, setCart] = useState([]);
  const specialRequestsRefs = useRef({});

  function handleOrder(product, index) {
    const specialRequest = specialRequestsRefs.current[index].value;
    setCart((currentCart) => [...currentCart, { ...product, specialRequest }]);
  }

  function removeFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div>
      <h2 className="MenuName">Restoran Menüsü</h2>
      <div className="menu-items">
        {Menu[0].products.map((product, index) => (
          <div className="menu-item" key={index}>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price}</p>
            <img src={product.image} alt={product.name} />
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
            <img src={item.image} alt={item.name} />
            {item.specialRequest && <p>Özel İstek: {item.specialRequest}</p>}
            <button onClick={() => removeFromCart(index)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuComponent;
