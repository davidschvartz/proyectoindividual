import {useEffect , useState } from "react";
import axios from "axios";
import Deporte from "../deporte"
import "./Deportes.css"

const Deportes = () => {
    const [deportes, setDeportes] = useState([])
   
    useEffect(() =>{
        axios.get('https://apipdtc.herokuapp.com/deportes')
            .then((response)=> {
                setDeportes(response.data)      
                })
    },[])
   
    return (
       <>
         <>
      <h1 className="cancha text-center">Nuestras Canchas</h1>
      
      </>
      
            {deportes.length>0?
                <div className="d-flex d-flex justify-content-evenly p-5   ">
    
            { deportes.map((Juego)=>(
                <div>
                    <Deporte key={Juego.id}{...Juego}/>
                </div>
            ))}
      
           </div>
           :
           <p>cargando</p>
        }
       </>
     );
}

 
export default Deportes;