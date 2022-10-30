import React from 'react';


const Wrapper = ({ startGame }) => {
    return (
        <div className="App">
            <header className="App-header" id="root">
                <h1>Welcome to the Morra Game</h1>
                <h4>First to guess correctly 3 times wins the game</h4>
            </header>
            <button
                onClick={() => startGame()}
            >Start</button>
        </div>
    );
}

export default Wrapper;