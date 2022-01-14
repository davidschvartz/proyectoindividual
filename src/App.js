import logo from './logo.svg';
import{BrowserRouter as Router,Routes,Route,link, UNSAFE_RouteContext} from "react-router-dom";
import './App.css';
import Nav from './componentes/nav/Nav';
import Carrusel from './componentes/carrusel/Carrusel';
import Deporte from './componentes/deporte/Deporte';
import Home from './componentes/home/Home'
import Deportes from './componentes/deportes';
import Futbol from './componentes/futbol/Futbol';
import Tenis from './componentes/tenis/Tenis';
import Voley from './componentes/voley/Voley';
import Social from './componentes/social/Social';
import Footer from './componentes/footer/Footer';


function App() {
  return (
    <div>
     <Router>

     <Nav/>
   
      <Routes>
        
      
      <Route path ="/" element = {<Home />}/>

      <Route path ="/deporte" element = {<Deporte />}/>
      
      <Route path = "/futbol" element = {<Futbol />} />

      <Route path = "/tenis" element = {<Tenis />} />
      
      <Route path = "/voley" element = {<Voley />} />


      
 



      </Routes>
      <Footer/>
     </Router>
     

    </div>
  );
}

export default App;
