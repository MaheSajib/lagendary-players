import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import "./player.css";

const player = (props) => {
    const handlePlayerHire = props.handlePlayerHire;

    return (
        <div className="player-container">
            <div className="player">
                <img src={props.player.image} alt=""/>
                <h2>{props.player.name}</h2>
                <p>Position: {props.player.position}</p>
                <p>Salary: {props.player.Salary}</p>
                <button className="hired-button" onClick={() => handlePlayerHire(props.player)}><FontAwesomeIcon icon={faHandshake} /> Hired</button>
            </div>
        </div>
    );
};

export default player;