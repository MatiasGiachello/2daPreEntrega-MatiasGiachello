import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Mates Artesanales</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2"> Imperiales </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/3"> Camioneros </NavLink>
          </li>

          <li>
            <NavLink to="/categoria/4"> Ceramica </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/5"> Termos </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar