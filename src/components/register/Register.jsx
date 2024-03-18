import "./Register.css";

function Register() {
  return (
    <div className="loginContainer">
      <form>
        <h5>
          SIGN IN
          <p className="loginContainerParagraf">
            Fill in the information to register
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
        <label>
          <p className="loginContainerPassword">Repeat Password</p>
          <input
            className="loginContainerPassword2"
            placeholder="Enter your Repeat password"
            type="password"
          />
        </label>
        <input type="submit" value="SIGN IN" />
        <p className="loginContainerParagraf2">
          Confirm the confirmation message sent to your e-mail.
        </p>
      </form>
    </div>
  );
}

export default Register;
