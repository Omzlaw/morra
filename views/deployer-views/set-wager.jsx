import React, { useState } from 'react';
import { defaults } from '../../utils/constants';

const SetWager = ({ setWager, setView, standardUnit }) => {
    const [wager, getWager] = useState(defaults.defaultWager);

    const handleClick = () => {
        setWager(wager);
        setView('Deploy');
    }

    return (
        <div>
            <input
                type='number'
                placeholder={defaults.defaultWager}
                onChange={(e) => getWager(e.currentTarget.value)}
            /> {standardUnit}
            <br />
            <button
                onClick={() => handleClick()}
            >Set wager</button>
        </div>
    );
}

export default SetWager;

