import React from "react";
import "./DesarrolladoresVistas"

function DesarrolladoresVistas({len}){

    return(
        <div className="lenvista">
            <h1> {len.nnombre}</h1>
            <h2> {len.nespecialidad}</h2>
            <h2> {len.ngrado}</h2>
            <img src={len.image} alt={len.image + "image"}></img>

        </div>
    )
}

export default DesarrolladoresVistas;