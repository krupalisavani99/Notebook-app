import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();

  const register = (input) => {
    let existingUsers = localStorage.getItem("users");
    existingUsers = existingUsers ? JSON.parse(existingUsers) : [];

    existingUsers.push(input);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    navigate("/login");
  };

  return register;
};

export default useRegister;