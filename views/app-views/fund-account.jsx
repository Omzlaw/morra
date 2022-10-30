import React, { useState } from 'react';

const FundAccount = ({ bal, standardUnit, defaultFundAmt, fundAccount, skipFundAccount }) => {
    const [amt, setAmt] = useState(defaultFundAmt);
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Fund account</h3>
                <h5 className="mb-3">Balance: {bal} {standardUnit}</h5>
                <hr />
                <h6 className="mb-3">Would you like to fund your account with additional {standardUnit} ?</h6>
                <span className="mb-5">(This only works on certain devnets)</span>

                <div className="mb-3">
                    <label htmlFor="fund" className="form-label">Amount to fund with</label>
                    <input
                        type='number'
                        placeholder={defaultFundAmt}
                        onChange={(e) => setAmt(e.currentTarget.value)}
                        aria-describedby="fundInfo"
                    />
                    <div id="fundInfo" className="form-text">Minimum of 1 ALGO.</div>
                </div>


                <button className="btn btn-success mx-3" onClick={() => fundAccount(amt)}>Fund Account</button>
                <button className="btn btn-warning mx-3" onClick={() => skipFundAccount()}>Skip</button>
            </div>
        </div>
    );
}

export default FundAccount;