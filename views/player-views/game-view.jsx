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
                return <h4>Please wait for your turn...</h4>
        }
    }

    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Morra Game</h3>
                <h5 className="mb-3">{`Alice ${aliceWinCount} : ${bobWinCount} Bob`}</h5>
                <div className="mb-5">
                    <span>Round state: {ROUND_OUTCOME[roundOutcome]}</span>
                </div>
                {
                    playable ? <div>{getActiveView()}</div> : <h4>Please wait for your turn...</h4>
                }
            </div>
        </div>
    );
}


export default GameView;