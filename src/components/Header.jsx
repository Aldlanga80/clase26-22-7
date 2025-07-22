const Header = () => {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png?20171228163613" alt="" />
      <nav>
        <ul>
          {/*Cambiar elemento a por componentes Link de react-router-dom*/}
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <button>Cerrar Secion</button>
        </ul>
      </nav>
    </header>
  )
}
export { Header }