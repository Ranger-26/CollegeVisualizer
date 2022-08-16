import { useState } from 'react';
import React from 'react';


export default function Card(props){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
        if(!modal) {
            console.log("Yes");
            document.body.classList.add('active-modal')
        } else {
            console.log("No");
            document.body.classList.remove('active-modal')
        }
    }

    return (
        <>
            <div className="card-front">
                <h1 className="h1-card">{props.name}</h1>
                <div className="photo">
                    <img src={props.img}></img>
                </div>
                <div className="show-more-button">
                    <button onClick={toggleModal}>Show More</button>
                </div>
            </div>

            {modal && (
                <div className="card">
                    <span className="close" onClick={toggleModal}>
                    &times;
                    </span>
                    <div className="title">
                        <h1 className="card-title">{props.name}</h1>
                        <h2>{props.type + " university in "+props.location}</h2>
                    </div>

                    <div className="info">
                        <p>College Size: {props.size}</p>
                        <p>Student Size: {props.studentsize}</p>
                    </div>

                    <div className="majors">
                        <p>Top three majors: {props.majors.map(m => {
                        return <p>{m}</p>
                    })}</p>
                    </div>

                    <div className="photo">
                        <img src={props.img}></img>
                    </div>
                </div>
            )}
        </>

    )

}