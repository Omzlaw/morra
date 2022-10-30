import React from 'react';
import GetGuess from './get-guess';
import GetHand from './get-hand';
import { ROUND_OUTCOME } from '../../utils/constants';

const GameView = ({ points, roundOutcome = "Draw", setHand, setGuess, playable, view }) => {
    const { aliceWinCount, bobWinCount } = points;
    const getActiveView = () => {
        switch (view) {
            case 'GetHand':
                return <GetHand setHand={setHand} />
            case 'GetGuess':
                return <GetGuess setGuess={setGuess} />
            default:
                return <div>Please wait for your turn...</div>
        }
    }

    return (
        <div>
            <h3>Morra Game</h3>
            <span>{`Alice ${aliceWinCount} : ${bobWinCount} Bob`}</span>
            <div>
                <span>{ROUND_OUTCOME[roundOutcome]}</span>
            </div>
            {
                playable ? getActiveView() : <div>Please wait for your turn...</div>
            }
        </div>
    );
}


export default GameView;