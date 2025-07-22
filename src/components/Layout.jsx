import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = (props) => {
  return (
    <div className={props.background}>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}


export { Layout }