import React from "react";
import "./Navbar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogin from "../../Hooks/useLogin";

const Navbar = () => {
  const { user, logout } = useLogin();

  return (
    <nav className="navbar">
      <div>
        <h1 className="heading">My Notebook</h1>
      </div>
      <div className="navbar_right">
        {user && <h3>Welcome {user.name}</h3>}
        <RiLogoutCircleRLine onClick={logout} cursor="pointer" fontSize="20px" />
      </div>
    </nav>
  );
  //   return (
  //     <nav className="navbar">
  //       <div>
  //         <h1 className="heading">My Notebook</h1>
  //       </div>
  //       <div className="navbar_right">
  //         {" "}
  //         <h3>Welcome {userData.name}</h3>{" "}
  //         <RiLogoutCircleRLine onClick={handleLogout} className="notes_icon" />
  //       </div>
  //     </nav>
  //   );
};

export default Navbar;
