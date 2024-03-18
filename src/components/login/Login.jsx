import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const admin = {
    email: "muharremozen04@gmail.com",
    password: "123456",
  };

  const user = {
    email: "berkan@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (email === admin.email && password === admin.password) {
    // } else if (email === user.email && password === user.password) {
    // } else {
    //   alert("Email Veya Şifre Hatalı");
    // }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h5>
          Login
          <p className="loginContainerParagraf">
            Enter your credentials to access your account
          </p>
        </h5>

        <label>
          <p className="loginContainerEmail">Email</p>
          <input
            className="loginContainerUserName"
            placeholder="Enter your email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p className="loginContainerPassword">Password</p>
          <input
            className="loginContainerPassword2"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
        <p className="loginContainerParagraf2">
          Forgot your password?
          <a className="loginContainerAhref" href="">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
