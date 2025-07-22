const Header = () => {
  return (
    <header>
      <img src="" alt="" />
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