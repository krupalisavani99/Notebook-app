import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const login = (input) => {
    if (!input.email || !input.password) {
      alert("Email and password fields cannot be empty");
      return;
    }

    const registerusers = JSON.parse(localStorage.getItem("users"));
    if (!registerusers) {
      alert("No registered users found. Please register first.");
      return;
    }

    let user = registerusers.find(
      (user) => user.email === input.email && user.password === input.password
    );
    if (user) {
      localStorage.setItem("loggedin", true);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert("User and password do not match");
    }
  };

  const logout = () => {
    localStorage.setItem("loggedin", false);
    navigate("/login");
  };
  return { login, logout, user };
};

export default useLogin;
