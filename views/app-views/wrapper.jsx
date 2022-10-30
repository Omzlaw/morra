import React from 'react';



const Wrapper = ({ startGame, selectPeraAlgoWallet, selectMyAlgoWallet, view }) => {
    return (
        <div className="body text-center">
            <div>
                <header className="mb-5">
                    <h1>Welcome to the Morra Game</h1>
                    <h6>First to guess correctly 3 times wins the game</h6>
                </header>
                {view == "StartGame" && (<button
                className="btn btn-success"
                    onClick={() => startGame()}
                >Start</button>)}

                {view == "SelectWallet" && (
                    <div>
                        <div className="mb-3"><span>Select Wallet to connect</span></div>
                        <div>
                            <button
                                className="btn btn-warning mx-2"
                                onClick={() => selectPeraAlgoWallet()}
                            >PeraAlgo Wallet</button>
                            <button
                                className="btn btn-primary mx-2"
                                onClick={() => selectMyAlgoWallet()}
                            >MyAlgo Wallet</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wrapper;