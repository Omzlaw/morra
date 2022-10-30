import React from 'react';

const AwaitingResult = ({ hand, guess }) => {
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Awaiting result...</h3>
                <h5>{`You played a hand of ${hand} and placed a guess of ${guess}`}</h5>
            </div>

        </div>
    );
}

export default AwaitingResult;