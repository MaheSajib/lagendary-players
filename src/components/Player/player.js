import React from 'react';
import "./player.css";

const player = (props) => {
    console.log(props);
    const handlePlayerHire = props.handlePlayerHire;

    return (
        <div className="player-container">
            <div className="player">
                <img src={props.player.image} alt=""/>
                <h2>{props.player.name}</h2>
                <p>Position: {props.player.position}</p>
                <p>Salary: {props.player.Salary}</p>
                <button onClick={() => handlePlayerHire(props.player)}>Hire</button>
            </div>
        </div>
    );
};

export default player;