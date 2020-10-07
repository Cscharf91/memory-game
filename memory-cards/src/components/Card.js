import React, { useState, useEffect } from 'react';

const Card = (props) => {
    return (
        <div className="card" onClick={() => props.handleClick(props.fruit)}>
            <img alt={props.fruit} src={props.img} />
            <p className="fruit-text">{props.fruit}</p>
        </div>
    );
};

export default Card;