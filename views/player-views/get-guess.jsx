import React, { useState } from 'react';
import { GUESS } from '../../utils/constants';

const GetGuess = ({ setGuess }) => {
    const [guess, pickGuess] = useState(0);
    return (
        <div>
            <div>
                <h3>Choose a guess value</h3>
                <div className="mb-3">
                    <label htmlFor="guess" className="form-label">Pick a guess</label>
                    <select className="form-control" id="guess" onChange={(e) => pickGuess(e.currentTarget.value)} aria-describedby="guessInfo">
                        {
                            GUESS?.map((value, index) => <option key={index} value={value}>{value}</option>)
                        }
                    </select>
                    <div id="guessInfo" className="form-text">(0 - 10)</div>
                </div>
                <button
                    className="btn btn-success"
                    onClick={() => setGuess(guess)}
                >Guess</button>
            </div>
        </div>
    );
}

export default GetGuess;
