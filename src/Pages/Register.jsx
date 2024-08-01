import React from "react";
import { Link } from "react-router-dom";
import "../common/auth.css";
import useFormInput from "../Hooks/useFormInput";
import useRegister from "../Hooks/useRegister";

const Register = () => {
  const [input, handleInputChange] = useFormInput({
    name: "",
    email: "",
    password: "",
  });
  const register = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(input);
  };

  return (
    <div className="container_auth">
      <form onSubmit={handleSubmit} className="auth_card">
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input name="name" value={input.name} onChange={handleInputChange} />
        <label htmlFor="emailid">Email id</label>
        <input name="email" value={input.email} onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={input.password}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="/login">Login here</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
