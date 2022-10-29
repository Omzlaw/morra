import React from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { HAND, GUESS, GAME_OUTCOME } from '../utils/constants';


const WithPlayer = (WrappedComponent, account) => {
    const Player = () => {

        const random = () => {
            return reach.hasRandom.random();
        }

        const getHand = async () => {

            const hand = await ask.ask(`What finger will you play? (0-5)`, (x) => {
                const hand = HAND[x];
                if (hand === undefined) {
                    throw Error(`Not a valid finger ${hand}`);
                }
                return hand;
            });
            console.log(`You played ${HAND[hand]}`);
            return hand;
        }
        const getGuess = async (fingersPlayed) => {

            const guess = await ask.ask(`What number do you guess?`, (x) => {
                const guess = GUESS[x];
                if (guess === undefined) {
                    throw Error(`Not a valid guess ${guess}`);
                }
                return guess;
            });
            console.log(`You guessed ${GUESS[guess]}`);
            return guess;

        }
        const seePoints = (aliceWinCount, bobWinCount) => {
            console.log(`Alice has ${aliceWinCount} point(s). Bob has ${bobWinCount} point(s)\n`);
        }
        const seeOutcome = (gameOutcome, aliceWinCount, bobWinCount) => {
            console.log(`${who} saw outcome ${GAME_OUTCOME[gameOutcome]}.\n`);
            console.log(`Alice ${aliceWinCount} : ${bobWinCount} Bob\n`);
        }
        const informTimeout = () => {
            console.log(`${who} observed a timeout\n`);
        }

        return <WrappedComponent acc={account} interactObjects={{ random, getHand, getGuess, seePoints, seeOutcome, informTimeout }} />
    }

    return Player;
}

export default WithPlayer;