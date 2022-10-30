import React, { useState } from 'react';
import { defaults } from '../../utils/constants';

const SetWager = ({ setWagerValue, setView, standardUnit }) => {
    const [wager, getWager] = useState(defaults.defaultWager);

    const handleClick = () => {
        setWagerValue(wager);
        setView('Deploy');
    }

    return (
        <div className="body text-center">
            <div>
                <div className="mb-3">
                    <label htmlFor="wager" className="form-label">Wager</label>
                    <input placeholder={`${defaults.defaultWager} ${standardUnit}`} 
                        onChange={(e) => getWager(e.currentTarget.value)} type="number" className="form-control" id="wager" aria-describedby="wagerInfo" />
                    <div id="wagerInfo" className="form-text">Minimum of 1 ALGO.</div>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => handleClick()}
                >Set wager</button>
            </div>
        </div>
    );
}

export default SetWager;

