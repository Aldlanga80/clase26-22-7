import { Link, Links } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png?20171228163613" alt="" />
      <nav>
        <ul>
          {/*Cambiar elemento a por componentes Link de react-router-dom*/}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register            ">Register</Link></li>
          <button>Cerrar Secion</button>
        </ul>
      </nav>
    </header >
  )
}
export { Header }