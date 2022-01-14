import "./Tenis.css"
import axios from "axios";
import {useEffect , useState } from "react";
import swal from 'sweetalert';



const Tenis = () => {
    
        const [tenis, settenis] = useState([])
        useEffect(() =>{
            axios.get('https://apipdtc.herokuapp.com/tenis')
                .then((response)=> {
                    settenis(response.data)   
                })
    },[])
   
    const [reservas, setReservas] = useState([])

 
    const agregarreserva = (Tenis,hora) =>{
        let horario = `${tenis}${hora}`
      setReservas([...reservas,horario])
      swal ( " Bienvenido Su Cancha del Dia fue Reserva " ) ;  
  }

  useEffect(()=>{
    localStorage.setItem('reservas', JSON.stringify(reservas))
}, [reservas])
   







        

    return ( 
     

        <>
        {
            tenis.length >0?   
            tenis.map((tenis)=>(
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={tenis.url_imagen} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{tenis.nombre}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                               
                                <div className="d-flex w-100 flex-wrap">

                                {tenis.horarios.map(hora => (
                                     <button key={hora.id} onClick={()=> agregarreserva(tenis.id , hora.id)} className="btn btn-primary d-block me-2 mb-2">{hora.hora}</button>
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
    export default Tenis;