import React from 'react';
import { defaults } from '../utils/constants.js';

const SetWager = ({ setWager, setView, standardUnit }) => {
    const [wager, setWagerValue] = useState(defaults.defaultWager);

    const handleClick = () => {
        setWager(wager);
        setView('Deploy');
    }

    return (
        <div>
            <input
                type='number'
                placeholder={defaults.defaultWager}
                onChange={(e) => setWagerValue(e.currentTarget.value)}
            /> {standardUnit}
            <br />
            <button
                onClick={() => handleClick()}
            >Set wager</button>
        </div>
    );
}

export default SetWager;

