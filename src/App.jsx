import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    setUser(user);
    setPass(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user === "user" && pass === "1234" ? alert("Logged In") : alert("Error");
  };

  return (
    <>
      <div className="container-login">
        <form className="login" onSubmit={handleSubmit}>
          <input
            type="user"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="input input-login__name"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="input input-login__name"
            placeholder="password"
          />
          <input
            type="submit"
            value="Log In"
            onClick={handleClick}
            className="btn btn-login"
          />
        </form>
      </div>
    </>
  );
};

export default App;
