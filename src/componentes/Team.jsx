import "./Team.css"
import { Link } from "react-router-dom";

function Team ({nombre = "nombre", especialidad = "especialidad"}){
    
    return(

        <div className="team">

            <Link to = {nombre}>
           <h2>{nombre}</h2> 
           </Link>
           <p>{especialidad}</p>

        </div>

    )
}
export default Team;