import React from 'react';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const WaitingForAttacher = ({ ctcInfoStr }) => {
    const copyToClipboard = (button) => {
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }

    return (
        <div>
            Waiting for Attacher to join...
            <br /> Please give them this contract info:
            <pre className='ContractInfo'>
                {ctcInfoStr}
            </pre>
            <button
                onClick={(e) => copyToClipboard(e.currentTarget)}
            >Copy to clipboard</button>
        </div>
    )
}

export default WaitingForAttacher;
