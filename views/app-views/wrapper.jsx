import React from 'react';


const Wrapper = () => {
    return (
        <div className="App">
            <header className="App-header" id="root">
                <h1>Morra Game</h1>
                <h4>First to guess correctly 3 times wins the game</h4>
                {content}
            </header>
        </div>
    );
}

export default Wrapper;