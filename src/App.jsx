import logo from "./assets/images/logo.png";
import salata from "./assets/images/salata.png";
import "./App.css";

function App() {
  return (
    <div>
      <header className="headerContainer">
        <div className="headerLogo">
          <img className="logo" src={logo} alt="logo" />
          <h3 className="logoName">Lilies</h3>
        </div>

        <ul className="headerMenu">
          <li className="headerList1">Home</li>
          <li className="headerList2">Login</li>
          <li className="headerList3">Sign Up</li>
        </ul>
      </header>

      <div className="bodyContainer">
        <div className="bodyComment">
          <h3 className="bodyComment1">Order food anytime, anywhere</h3>
          <h1 className="bodyComment2">
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </h1>
        </div>

        <div className="bodyImage">
          <img className="salata" src={salata} alt="salata" />
        </div>
      </div>
    </div>
  );
}

export default App;
