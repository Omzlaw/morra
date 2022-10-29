import React from 'react';


const Deploy = ({ standardUnit, wager, deploy }) => {
    return (
        <div>
            Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
            <br />
            <button
                onClick={() => deploy()}
            >Deploy</button>
        </div>
    );
}

export default Deploy;