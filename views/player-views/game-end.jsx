import React from 'react';
import { GAME_OUTCOME } from '../../utils/constants';

const GameEnd = ({ points, gameOutcome }) => {
    const { aliceWinCount, bobWinCount } = points;
    return (
        <div>
            <h3>Game Over</h3>

            <div><span>{`Alice ${aliceWinCount} : ${bobWinCount} Bob`}</span></div>
            <div>
                <span>{GAME_OUTCOME[gameOutcome]}</span>
            </div>
            <button
                onClick={() => location.href = '/'}
            >Exit</button>
        </div>
    );
}

export default GameEnd;