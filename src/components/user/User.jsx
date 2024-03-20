import { Menu } from "../../mockData/product";

function MenuComponent() {
  return (
    <div>
      <h2>Restoran Menüsü</h2>
      <div className="menu-items">
        {Menu[0].products.map((product, index) => (
          <div className="menu-item" key={index}>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price}</p>
            <button onClick={() => handleOrder(product)}>Sipariş Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function handleOrder(product) {
  console.log("Sipariş verildi:", product.name);
}

export default MenuComponent;
