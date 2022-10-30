import React from 'react';

const AwaitingResult = ({ hand, guess }) => {
    return (
        <div>
            <div>Awaiting result</div>
            <div><span>{`You played a hand of ${hand} and placed a guess of ${guess}`}</span></div>

        </div>
    );
}

export default AwaitingResult;