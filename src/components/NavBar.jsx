import { NavLink, Outlet } from "react-router-dom"
import '../styles/Navbar.css'

const NavBar = () => {
  return (
    <nav>
        <div>
            Home
        </div>
        <ul>
            <li><NavLink to="/">Random</NavLink></li>
            <li><NavLink to="/all-pages">Pages</NavLink></li>
        </ul>
        <Outlet />
    </nav>
  )
}

export default NavBar