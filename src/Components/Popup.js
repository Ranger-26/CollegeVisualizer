import React from 'react';

//top 3 majors, location, college size, college student size,college name, public or private, list of three majors
export default function Popup(props){
    //onClick={this.handleClick}

    return (
        <div className="card">
            <span className="close" >
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
    )
}
