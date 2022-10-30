import React from 'react';

const Timeout = () => {
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">A timeout occured</h3>

                <button
                    className="btn btn-danger"
                    onClick={() => location.href = '/'}
                >Exit</button>
            </div>
        </div>
    )
}

export default Timeout;