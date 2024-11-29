import { Link } from "react-router-dom";
import Logo1 from "../assets/logo.png";  // Corrigindo o caminho da imagem

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={Logo1} alt="Logo" className="logo" /> {/* Exibindo a logo */}
          </li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/duvidas">Dúvidas</Link></li>
          <li><Link to="/planos">Planos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/cadastar">Cadastrar</Link></li>
        </ul>
      </nav>
    </>
  );
}

{/* ok */}