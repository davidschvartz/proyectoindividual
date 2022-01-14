import { Link } from "react-router-dom";
import "./Nav.css";
import Deportes from "../../img/deportes.jpg"



const Nav = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/"><img  src={Deportes} className="solodeportes" /></Link>    
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="navbar-brand" to="/futbol">Futbol</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/tenis">Tenis</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/voley">Voley</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default Nav;