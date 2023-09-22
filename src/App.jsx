import React, { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import "./index.css";

const App = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    setUser(user);
    setPass(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user === "user" && pass === "1234"
      ? setIsLoggedIn(true)
      : setError("Usuario o contraseña incorrecta");
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
          {isLoggedin ? (
            <Dashboard />
          ) : (
            <p className="mt-4 text-red">{error}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default App;
