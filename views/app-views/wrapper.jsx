import React from 'react';


const Wrapper = ({ startGame, selectPeraAlgoWallet, selectMyAlgoWallet, view }) => {
    return (
        <div className="App">
            <header className="App-header" id="root">
                <h1>Welcome to the Morra Game</h1>
                <h4>First to guess correctly 3 times wins the game</h4>
            </header>
            {view == "StartGame" && (<button
                onClick={() => startGame()}
            >Start</button>)}

            {view == "SelectWallet" && (
                <div>
                    <div>Select Wallet to connect</div>
                    <button
                        onClick={() => selectPeraAlgoWallet()}
                    >PeraAlgo Wallet</button>
                    <button
                        onClick={() => selectMyAlgoWallet()}
                    >MyAlgo Wallet</button>
                </div>
            )}
        </div>
    );
}

export default Wrapper;