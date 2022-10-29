import React, { useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { HAND, GUESS, GAME_OUTCOME } from '../utils/constants';
import GameView from '../views/player-views/game-view';
import Timeout from '../views/player-views/timeout';
import GameEnd from '../views/player-views/game-end';


const WithPlayer = (WrappedComponent, account) => {
    const Player = () => {

        const [view, setView] = useState('Wrapper');
        const [points, setPoints] = useState({});
        const [gameOutcome, setGameOutcome] = useState(null);
        const [playable, setPlayable] = useState(false);
        const [resolveHandP, setResolveHandP] = useState(false);
        const [resolveGuessP, setResolveGuessP] = useState(false);

        const random = () => {
            return reach.hasRandom.random();
        }

        const setHand = (hand) => { resolveHandP(hand); }

        const getHand = async () => {

            const hand = await new Promise(resolveHandP => {
                setPlayable(true);
                setView('GetHand');
                setResolveHandP(resolveHandP);
            });
            return hand;
        }

        const setGuess = (guess) => { resolveGuessP(guess); }

        const getGuess = async (fingersPlayed) => {
            const guess = await new Promise(resolveGuessP => {
                setView('GetGuess');
                setResolveGuessP(resolveGuessP);
            });
            return guess;
        }

        const seePoints = (aliceWinCount, bobWinCount) => {
            setView('GameView');
            setPoints({ aliceWinCount, bobWinCount });
        }

        const seeOutcome = (gameOutcome, aliceWinCount, bobWinCount) => {
            setView('GameEnd');
            setGameOutcome(gameOutcome);
            setPoints({ aliceWinCount, bobWinCount });
        }

        const informTimeout = () => {
            setView('Timeout');
        }


        switch (view) {
            case 'Wrapper':
                return <WrappedComponent acc={account} interactObjects={{ random, getHand, getGuess, seePoints, seeOutcome, informTimeout }} />
            case 'GameView' || 'GetHand' || 'GetGuess':
                return <GameView points={points} setHand={setHand} setGuess={setGuess} playable={playable} view={view} />;
            case 'GameEnd':
                return <GameEnd gameOutcome={gameOutcome} points={points} />;
            case 'Timeout':
                return <Timeout />;
            default:
                return (
                    <div></div>
                );
        }
    }

    return Player;
}

export default WithPlayer;