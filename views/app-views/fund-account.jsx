import React, { useState } from 'react';

const FundAccount = ({ bal, standardUnit, defaultFundAmt, fundAccount, skipFundAccount }) => {
    const [amt, setAmt] = useState(defaultFundAmt);
    return (
        <div>
            <h2>Fund account</h2>
            <br />
            Balance: {bal} {standardUnit}
            <hr />
            Would you like to fund your account with additional {standardUnit} ?
            <br />
            (This only works on certain devnets)
            <br />
            <input
                type='number'
                placeholder={defaultFundAmt}
                onChange={(e) => setAmt(e.currentTarget.value)}
            />
            <button onClick={() => fundAccount(amt)}>Fund Account</button>
            <button onClick={() => skipFundAccount()}>Skip</button>
        </div>
    );
}

export default FundAccount;