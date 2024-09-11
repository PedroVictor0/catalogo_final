import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar () {
    return <nav className="nav">
        <h2>CATÁLOGO DE JOGOS</h2>

        <ul> 

            <li> 
                <Link to="/">
                    <button>
                        Home
                    </button>
                </Link>
            </li>

            <li>
                <Link to="/sobre">
                    <button>
                        Sobre
                    </button>
                </Link>
            </li>

            <li>
                <Link to="/plataforma">
                    <button>
                        Plataforma  
                    </button>
               </Link>
            </li>

            <li>
                <Link to="/login">
                    <button>
                        Login
                    </button>
               </Link>
            </li>
        
        
        </ul> 

        <input placeholder="Pesquisar"></input>
    </nav>
}