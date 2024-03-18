import "./Login.css";

function Login() {
  return (
    <div className="loginContainer">
      <form>
        <h5>
          SIGN IN
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
          />
        </label>
        <label>
          <p className="loginContainerPassword">Password</p>
          <input
            className="loginContainerPassword2"
            placeholder="Enter your password"
            type="password"
          />
        </label>
        <input type="submit" value="SIGN IN" />
        <p className="loginContainerParagraf2">
          Forgot your password?
          <a className="loginContainerAhref" href="">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
