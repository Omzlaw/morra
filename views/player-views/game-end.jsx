import React from 'react';

const GameEnd = ({ points }) => {
    const { aliceWinCount, bobWinCount } = points;
    return (
        <div>
            <h3>Game Over</h3>

            <span>{`Alice ${aliceWinCount} : ${bobWinCount} Bob`}</span>
            <button
                onClick={() => location.href = '/'}
            >Exit</button>
        </div>
    );
}

export default GameEnd;