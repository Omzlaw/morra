import React from 'react';
import { GAME_OUTCOME } from '../../utils/constants';

const GameEnd = ({ points, gameOutcome, balance, standardUnit }) => {
    const { aliceWinCount, bobWinCount } = points;
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Game Over</h3>

                <div className="mb-3"><h4>{`Alice ${aliceWinCount} : ${bobWinCount} Bob`}</h4></div>
                <div className="mb-3">
                    <span>{GAME_OUTCOME[gameOutcome]}</span>
                </div>
                <div className="mb-3">
                    <span>{`Current Balance: ${balance} ${standardUnit}`}</span>
                </div>
                <button
                    className="btn btn-danger"
                    onClick={() => location.href = '/'}
                >Exit</button>
            </div>
        </div>
    );
}

export default GameEnd;