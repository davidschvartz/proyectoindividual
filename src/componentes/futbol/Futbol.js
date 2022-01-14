import "./Futbol.css"
import axios from "axios";
import {useEffect , useState } from "react";
import swal from 'sweetalert';



const Futbol = () => {
    
        const [futbol, setfutbol] = useState([])
        useEffect(() =>{
            axios.get('https://apipdtc.herokuapp.com/Futbol')
                .then((response)=> {
                    setfutbol(response.data)   
                })
    },[])
   
    const [reservas, setReservas] = useState([])

 
    const agregarreserva = (fulbol,hora) =>{
        let horario = `${fulbol}${hora}`
      setReservas([...reservas,horario])
      swal ( " Bienvenido Su Cancha del Dia fue Reserva " ) ;  }

  useEffect(()=>{
    localStorage.setItem('reservas', JSON.stringify(reservas))
}, [reservas])
   
    
    
    

    
    
    
     return ( 
     

    <>
    {
        futbol.length >0?   
        futbol.map((fulbol)=>(
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={fulbol.url_imagen} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{fulbol.nombre}</h5>
                            <p class="card-text">cantadidad de jugadores :5.</p>
                            <p className="card-tex">Cancha techada/sin techar </p>
                            <div className="d-flex w-100 flex-wrap">
                            {fulbol.horarios.map(hora => (
                              
                                    <button key={hora.id} onClick={()=> agregarreserva(fulbol.id , hora.id)} className="btn btn-primary d-block me-2 mb-2">{hora.hora}</button>
                                
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


        )
}
    
export default Futbol;