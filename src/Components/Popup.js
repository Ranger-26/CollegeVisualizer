import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

//top 3 majors, location, college size, college student size,college name, public or private, list of three majors, showPopup
export default function Popup(props){

    const closePopup = () =>{
        props.showPopup(false);
    }

    return (
        ReactDom.createPortal(
            <div className="container" onClick={closePopup}>
                <div className="card-info">
                    <div className="card-grid">
                        <div className="title">
                            <h1 className="card-title">{props.info.name}</h1>
                            <h2>{props.info.type + " university in "+props.info.location}</h2>
                        </div>

                        <div className="info">
                            <p>College Size: {props.info.size}</p>
                            <p>Student Size: {props.info.studentsize}</p>
                        </div>

                        <div className="majors">
                            <p>Top three majors: {props.info.majors.map(m => {
                                return <p>{m}</p>
                            })}</p>
                        </div>

                        <div className="photo">
                            <img src={props.info.img}></img>
                        </div>
                    </div>
                </div>
            </div>
            ,
            document.getElementById("portal")
        )

    )
}
