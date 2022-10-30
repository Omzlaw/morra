import React, { useState } from 'react';
import { HAND } from '../../utils/constants';

const GetHand = ({ setHand }) => {
    const [finger, pickFinger] = useState(0);
    return (
        <div>
            <div>Select the number of fingers to play</div>
            <select onChange={(e) => pickFinger(e.currentTarget.value)}>
                {
                    HAND?.map((value, index) => <option key={index} value={value}>{value}</option>)
                }
            </select>
            <button
                onClick={() => setHand(finger)}
            >Set</button>
        </div>
    );
}

export default GetHand;
