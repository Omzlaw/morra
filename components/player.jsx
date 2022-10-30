import React, { useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { HAND, GUESS, GAME_OUTCOME } from '../utils/constants';
import GameView from '../views/player-views/game-view';
import Timeout from '../views/player-views/timeout';
import GameEnd from '../views/player-views/game-end';
import AwaitingResult from '../views/player-views/waiting-result';


const WithPlayer = (WrappedComponent, account) => {
    const Player = () => {

        const [view, setView] = useState('Wrapper');
        const [points, setPoints] = useState(null);
        const [gameOutcome, setGameOutcome] = useState(null);
        const [playable, setPlayable] = useState(false);
        const [resolveHandP, setResolveHandP] = useState();
        const [resolveGuessP, setResolveGuessP] = useState();
        const [handGuessValue, setHandGuessValue] = useState(null);

        const random = () => {
            return reach.hasRandom.random();
        }

        const setHand = (hand) => {
            setHandGuessValue({ ...handGuessValue, hand: HAND[hand] });
            resolveHandP(hand);
        }

        const getHand = async () => {

            const hand = await new Promise(resolve => {
                setPlayable(true);
                setResolveHandP(() => resolve);
                setView('GetHand');
            });
            return HAND[hand];
        }

        const setGuess = (guess) => {
            setHandGuessValue({ ...handGuessValue, guess: GUESS[guess] });
            resolveGuessP(guess);
            setView("AwaitingResult");
        }

        const getGuess = async (fingersPlayed) => {
            const guess = await new Promise(resolve => {
                setResolveGuessP(() => resolve);
                setView('GetGuess');
            });
            return GUESS[guess];
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
            case 'GameView':
            case 'GetHand':
            case 'GetGuess':
                return <GameView points={points} setHand={setHand} setGuess={setGuess} playable={playable} view={view} />;
            case 'AwaitingResult':
                return <AwaitingResult hand={handGuessValue.hand} guess={handGuessValue.guess} />;
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