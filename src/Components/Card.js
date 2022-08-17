import { useState } from 'react';
import React from 'react';
import Popup from "./Popup";



export default function Card(props){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <>
            <div className="card-front" style={{ backgroundColor: `${props.color}` }}>
                <h1 className="h1-card">{props.name}</h1>
                <div className="photo">
                    <img src={props.img}></img>
                </div>
                <div>
                    <button onClick={toggleModal}>Show More</button>
                </div>
            </div>

            {modal && (
                <Popup showPopup={setModal} info = {props}></Popup>
            )}
        </>

    )

}
