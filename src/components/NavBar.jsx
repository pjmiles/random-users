import { NavLink, Outlet } from "react-router-dom"
import '../styles/Navbar.css'

const NavBar = () => {
  return (
    <nav>
        <div>
            Home
        </div>
        <ul>
            <li><NavLink to="/">display</NavLink></li>
            <li><NavLink to="/all-pages">all</NavLink></li>
        </ul>
        <Outlet />
    </nav>
  )
}

export default NavBar