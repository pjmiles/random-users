import { NavLink, Outlet } from "react-router-dom"
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div>
            Home
        </div>
        <ul>
            <li><NavLink to="/">display</NavLink></li>
            <li><NavLink to="/all-pages"></NavLink></li>
        </ul>
        <Outlet />
    </nav>
  )
}

export default NavBar