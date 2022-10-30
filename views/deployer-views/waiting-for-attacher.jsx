import React from 'react';

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const WaitingForAttacher = ({ ctcInfoStr }) => {
    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }

    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-3">Waiting for Attacher to join...</h3>
                <h5 className="mb-3">Please give them this contract info:</h5>
                <pre className='contract-info mb-5'>
                    {ctcInfoStr}
                </pre>
                <button
                    className="btn btn-warning"
                    onClick={(e) => copyToClipboard(e.currentTarget)}
                >Copy to clipboard</button>
            </div>
        </div>
    )
}

export default WaitingForAttacher;
