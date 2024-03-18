import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import salata from "../../assets/images/salata.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <header className="headerContainer">
        <div className="headerLogo">
          <img className="logo" src={logo} alt="logo" />
          <h3 className="logoName">Lilies</h3>
        </div>

        <ul className="headerMenu">
          <li className="headerList1">
            <NavLink className="headerList1" to="/">
              Home
            </NavLink>
          </li>
          <li className="headerList2">
            <NavLink className="headerList2" to="/login">
              Login
            </NavLink>
          </li>
          <li className="headerList3">
            <NavLink className="headerList2" to="/register">
              Sign Up
            </NavLink>
          </li>
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

export default Home;
