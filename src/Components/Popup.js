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
                            <h1 className="simple-center">College Size Info</h1>
                            <p className="simple-center">College Size: {props.info.size}</p>
                            <p className="simple-center">Student Size: {props.info.studentsize}</p>
                        </div>

                        <div className="majors">
                            <h1 className="simple-center">Top Majors</h1>
                            {props.info.majors.map(m => {
                                return <p className="simple-center">{props.info.majors.indexOf(m)+1+". "}{m}</p>
                            })}
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
