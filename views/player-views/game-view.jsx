import React from 'react';
import GetGuess from './get-guess';
import GetHand from './get-hand';

const GameView = ({ points, setHand, setGuess, playable, view }) => {
    const { aliceWinCount, bobWinCount } = points;

    const getActiveView = () => {
        switch (view) {
            case 'GetHand':
                return <GetHand setHand={setHand} />
            case 'GetGuess':
                return <GetGuess setGuess={setGuess} />
            default:
                return <div></div>
        }
    }

    return (
        <div>
            <h3>Morra Game</h3>
            <span>Alice {aliceWinCount} : {bobWinCount} Bob</span>
            {
                playable ? getActiveView() : <span>Please wait...</span>
            }
        </div>
    );
}


export default GameView;