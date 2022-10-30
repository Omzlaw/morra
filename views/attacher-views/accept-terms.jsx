import React, { useState } from 'react';



const AcceptTerms = ({ wager, standardUnit, acceptTerms, declineTerms }) => {

    const [disabled, setDisabled] = useState(false);
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-3">The terms of the game are:</h3>
                <h5 className="mb-5">Wager: {wager} {standardUnit}</h5>
                <button
                    className="btn btn-success mx-3"
                    disabled={disabled}
                    onClick={() => {
                        setDisabled(true);
                        acceptTerms();
                    }}
                >Accept terms and pay wager</button>
                <button
                    className="btn btn-danger mx-3"
                    disabled={disabled}
                    onClick={() => {
                        setDisabled(true);
                        declineTerms();
                    }}
                >Decline terms and exit</button>
            </div>
        </div>
    );
}

export default AcceptTerms;