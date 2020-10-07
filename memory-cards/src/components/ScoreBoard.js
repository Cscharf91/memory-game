import React from 'react';

const ScoreBoard = (props) => {
    return (
        <div className="scoreboard">
            <p className="score">Score: {props.score}</p>
            <p className="highscore">High Score: {props.highscore}</p>
        </div>
    );
}

export default ScoreBoard;