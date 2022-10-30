import React from 'react';

const Timeout = () => {
    return (
        <div>
            <h3>A timeout occured</h3>

            <button
                onClick={() => location.href = '/'}
            >Exit</button>
        </div>
    )
}

export default Timeout;