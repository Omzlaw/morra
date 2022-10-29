import React, { useState } from 'react';



const AcceptTerms = ({ wager, standardUnit, acceptTerms, declineTerms }) => {

    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            The terms of the game are:
            <br /> Wager: {wager} {standardUnit}
            <br />
            <button
                disabled={disabled}
                onClick={() => {
                    setDisabled(true);
                    acceptTerms();
                }}
            >Accept terms and pay wager</button>
            <button
                disabled={disabled}
                onClick={() => {
                    setDisabled(true);
                    declineTerms();
                }}
            >Decline terms and exit</button>
        </div>
    );
}

export default AcceptTerms;