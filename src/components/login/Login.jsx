import { useState } from "react";
import DashboardPage from "../../pages/DashboardPage";
import UserPage from "../../pages/UserPage";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminloggedIn, setAdminLoggedIn] = useState(false);
  const [userloggedIn, setUserLoggedIn] = useState(false);

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
    if (email === admin.email && password === admin.password) {
      setAdminLoggedIn(true);
    } else if (email === user.email && password === user.password) {
      setUserLoggedIn(true);
    } else {
      alert("Hatalı kullanıcı adı veya şifre");
    }
  };
  if (adminloggedIn) {
    return (
      <DashboardPage
        adminloggedIn={adminloggedIn}
        userloggedIn={userloggedIn}
      />
    );
  }
  if (userloggedIn) {
    return <UserPage userloggedIn={userloggedIn} />;
  }

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
          Not registered?
          <a className="loginContainerAhref" href="/register">
            Create an account
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
