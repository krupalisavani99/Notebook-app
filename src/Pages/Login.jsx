import React from "react";
import { Link } from "react-router-dom";
import "../common/auth.css";
import useFormInput from "../Hooks/useFormInput";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [input, handleInputChange] = useFormInput({ email: "", password: "" });
  const { login } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(input);
  };

  return (
    <div className="container_auth">
      <form onSubmit={handleLogin} className="auth_card">
        <h1>Login</h1>
        <label htmlFor="emailid">Email id</label>
        <input name="email" value={input.email} onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={input.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
