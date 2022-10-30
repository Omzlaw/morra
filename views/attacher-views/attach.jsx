import React, { useState } from 'react';


const Attach = ({ attach }) => {
    const [ctcInfoStr, setCtcInfoStr] = useState('{}');
    return (
        <div className="body text-center">
            <div>
                <h3>Please paste the contract info to attach to:</h3>
                <div className="mb-3">
                    <label htmlFor="contract-info" className="form-label">Contract Info</label>
                    <textarea spellCheck="false"
                        row="6"
                        className="form-control"
                        id="contract-info"
                        onChange={(e) => setCtcInfoStr(e.currentTarget.value)}
                        placeholder='{}'
                    />
                </div>
                <button
                    className="btn btn-success"
                    disabled={!ctcInfoStr}
                    onClick={() => attach(ctcInfoStr)}
                >Attach</button>
            </div>
        </div>
    );
}

export default Attach;