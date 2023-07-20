import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../Redux/Auth/Auth.action";

const NavbarReduxThunk = () => {
  const isauth = useSelector((store) => store.Auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // login screen
    if (isauth) {
      dispatch(LogOut());
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "5px solid red",
      }}
    >
      <h1>Redux-Thunk Navbar:</h1>
      <Link
        style={{
          textDecoration: "none",
          color: "red",
        }}
        to="/home"
      >
        <h2>Home</h2>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "red",
        }}
        to="/posts"
      >
        <h2>Posts</h2>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "red",
        }}
        to="/careers"
      >
        <h2>Careers</h2>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "red",
        }}
        to="/feeds"
      >
        <h2>Feeds</h2>
      </Link>
      <button
        onClick={handleLoginClick}
        style={{
          background: "#7925C7",
          color: "#FFFFFF",
          padding: "0.7rem",
          height: "3.2rem",
          width: "7rem",
          fontSize: "1.2rem",
          borderRadius: "1.3rem",
          borderColor: "#7925C7",
          marginTop: "0.8rem",
          cursor: "pointer",
        }}
      >
        {isauth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default NavbarReduxThunk;
