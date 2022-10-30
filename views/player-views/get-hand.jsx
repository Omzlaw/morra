import React, { useState } from 'react';
import { HAND } from '../../utils/constants';

const GetHand = ({ setHand }) => {
    const [finger, pickFinger] = useState(0);
    return (
        <div>
            <div>
                <h3>Select the number of fingers to play</h3>
                <div className="mb-3">
                    <label htmlFor="finger" className="form-label">Select Finger</label>
                    <select className="form-control" id="finger" onChange={(e) => pickFinger(e.currentTarget.value)} aria-describedby="fingerInfo">
                        {
                            HAND?.map((value, index) => <option key={index} value={value}>{value}</option>)
                        }
                    </select>
                    <div id="fingerInfo" className="form-text">(0 - 5)</div>
                </div>
                <button
                    className="btn btn-success"
                    onClick={() => setHand(finger)}
                >Set</button>
            </div>
        </div>
    );
}

export default GetHand;
