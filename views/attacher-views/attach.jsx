import React, {useState} from 'react';


const Attach = ({ attach }) => {
    const [ctcInfoStr, setCtcInfoStr] = useState('{}');
    return (
        <div>
            Please paste the contract info to attach to:
            <br />
            <textarea spellCheck="false"
                className=''
                onChange={(e) => setCtcInfoStr(e.currentTarget.value)}
                placeholder='{}'
            />
            <br />
            <button
                disabled={!ctcInfoStr}
                onClick={() => attach(ctcInfoStr)}
            >Attach</button>
        </div>
    );
}

export default Attach;