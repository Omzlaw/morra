import React from 'react';


const Deploy = ({ standardUnit, wager, deploy }) => {
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}</h3>
                <button
                    className="btn btn-success"
                    onClick={() => deploy()}
                >Deploy</button>
            </div>
        </div>
    );
}

export default Deploy;