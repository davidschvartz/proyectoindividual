import "./Carrusel.css";
import Carrusel1 from "../../img/bahiagrande-tenis264.jpg"
import Carrusel2 from "../../img/canchas-de-futbol1.jpg"
import Carrusel3 from "../../img/voleibol-og.jpg"



const Carrusel = () => {
    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carrusel1} className="d-block w-100 " />
    </div>
    <div className="carousel-item">
      <img src={Carrusel2} className="d-block w-100 " />
    </div>
    <div className="carousel-item">
      <img src={Carrusel3} className="d-block w-100 " />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}
 
export default Carrusel;