import React, { useState } from 'react';
import { GUESS } from '../../utils/constants';

const GetGuess = ({ setGuess }) => {
    const [guess, pickGuess] = useState(0);
    return (
        <div>
            <div>Choose a guess value for total finger</div>
            <select onChange={(e) => pickGuess(e.currentTarget.value)}>
                {
                    GUESS?.map((value, index) => <option key={index} value={value}>{value}</option>)
                }
            </select>
            <button
                onClick={() => setGuess(guess)}
            >Guess</button>
        </div>
    );
}

export default GetGuess;
