import "./Voley.css"
import axios from "axios";
import {useEffect , useState } from "react";
import Tenis from "../tenis/Tenis";
import swal from 'sweetalert';



const Voley = () => {
    
        const [voley, setvoley] = useState([])
        useEffect(() =>{
            axios.get('https://apipdtc.herokuapp.com/voley')
                .then((response)=> {
                    setvoley(response.data)   
                })
    },[])
   
    
    const [reservas, setReservas] = useState([])

 
    const agregarreserva = (fulbol,hora) =>{
        let horario = `${voley}${hora}`
      setReservas([...reservas,horario])
      swal ( " Bienvenido Su Cancha del Dia fue Reserva " ) ;  
  }

  useEffect(()=>{
    localStorage.setItem('reservas', JSON.stringify(reservas))
}, [reservas])
   









    return ( 
     

        <>
        {
           voley.length >0?   
           voley.map((voley)=>(
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={voley.url_imagen} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{voley.nombre}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex w-100 flex-wrap">
                                         {voley.horarios.map(hora => (
                                    <button key={hora.id} onClick={()=> agregarreserva(voley.id , hora.id)} className="btn btn-primary d-block me-2 mb-2">{hora.hora}</button>                                    
                               
                               
                               
                               ))}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          ))
    
            :
    <p>cargando</p>
        }
    
        </>
    
    
            );
        }
    export default Voley;