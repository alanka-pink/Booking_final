import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">Khách sạn</span>
      </Link>
        {user ? user.username : ( <div className="navItems">
        <Link to="/register">
          <button className="navButton">Đăng kí</button>
          </Link>
          <Link to="/login">
          <button className="navButton">Đăng nhập</button>
          </Link>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar