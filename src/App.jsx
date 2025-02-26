import "./App.css";
import "./style.global.css";

// importação dos componentes para o App.jsx
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    {/* Irá conter o conteúdo da Header e a Navbar(É provável que na NavBar não contenha os caminhos) */}
      <Header />
      
    {/* Conteúdo principal, cujo terá as imagens tiradas no decorrer do ano, videos das viagens e por fim os trotes  */}
      <Main />

    {/* Irá conter as informações da escola, redes socias, número de contato e possivelmente colaboradores do projeto  */}
      <Footer />
    </>
  );
}

export default App;
