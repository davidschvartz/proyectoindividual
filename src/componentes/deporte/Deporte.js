import "./Deporte.css";
import { Link } from "react-router-dom";
import Futbol from "../futbol/Futbol";
import Tenis from "../tenis/Tenis";



const Deporte = (
    {  id,url_imagen, deporte }
    ) => {
    
    

    return ( 
            
       
    <div className="carta d-flex justify-content-center ">
        <div className="card " style={{width: "18rem"}}key={id}>
   <img src={url_imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{deporte}</h5>
    <p className="card-text">Es un hecho establecido hace demasiado tiempo por eso te invito a que vengas a nuestras canchas a disfrutar con tus amigos y aprendas a ser un equipo esto lo aprendemos de nuestros maestros Cesar y Brian . .</p>
     <Link to={`/${deporte}`} className="btn btn-primary">Ir a cancha</Link> 
    
    </div>
  </div>
  </div>
  


  
  

  
      

     );
}

export default Deporte;