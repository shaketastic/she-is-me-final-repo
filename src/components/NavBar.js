import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Home from "../pages/Home";
import Blogs from "./Blogs";
// import Blog from "./Blog";


export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
        <div className="links">

        <a href={<Home/>}>
        <img src={logo} alt="girl"></img>
        </a>
          <Link className="link" to="/?cat=bullying">
            <h6>BULLYING</h6>
          </Link>

          <Link className="link" to="/?cat=prevention">
            <h6>PREVENTION</h6>
          </Link>

          <Link className="link" to="/?cat=resources">
            <h6>RESOURCES</h6>
          </Link>

          <Link className="link" to="/?cat=help">
            <h6>Get Help Now</h6>
          </Link>

          <span>Username</span>
          <span>Logout</span>
          <span className="new">
            <Link className="link" to="/new">Write Here</Link>
          </span>

          </div>
        </div>
    </div>
   <Blogs />
  </div> 
  )
}
