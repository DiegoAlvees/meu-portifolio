import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Portifolio from "./components/Portifolio";
import Contato from "./components/Contato"
import "animate.css";

export default function App() {
  return (
    <div>
      <Home />
      <Sobre />
      <Skills />
      <Portifolio />
      <Contato />
    </div>
  );
}
