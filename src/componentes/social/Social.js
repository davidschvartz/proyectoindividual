import "./Social";
import Redes from "../../img/redes.jpg"
import Map from "../../img/map.jpg"


const Social = () => {
  return ( 
    <>
<h3 className="d-flex justify-content-center">Seguinos en nuestras Redes Sociales</h3>
<img  src={Redes} className="img-responsive " width={200}  />


<>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

  
</form>
<div>

<h4 className="d-flex justify-content-center p-5">Ubicacion</h4>
<img src={Map} className="img-responsive " width={500} />



</div>
</>
</>
   );
}
 
export default Social;