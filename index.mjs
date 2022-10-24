import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);


const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);


const HAND = [0, 1, 2, 3, 4, 5];
const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GAME_OUTCOME = ['Alice wins', 'Playing', 'Bob Wins'];

const Player = (who) => ({
    ...stdlib.hasRandom,
    getHand: () => {
        const hand = Math.floor(Math.random() * 6);
        console.log(`${who} played ${HAND[hand]}\n`);
        
        return hand;
    },
    getGuess: (fingersPlayed) => {
        const guess = Math.floor((Math.random() * 6) + HAND[fingersPlayed]);
        console.log(`${who} guessed a total of ${GUESS[guess]}\n`);
        return guess;
    },
    seePoints: (aliceWinCount, bobWinCount) => {
        console.log(`Alice has ${aliceWinCount} point(s). Bob has ${bobWinCount} point(s)\n`);
    },
    seeOutcome: (gameOutcome, aliceWinCount, bobWinCount) => {
        console.log(`${who} saw outcome ${GAME_OUTCOME[gameOutcome]}.\n`);
        console.log(`Alice ${aliceWinCount} : ${bobWinCount} Bob\n`);
    },
    informTimeout: () => {
        console.log(`${who} observed a timeout\n`);
    }
});

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        setWager: () => {
            const wager = stdlib.parseCurrency(10);
            return wager
        }
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: (wager) => {
            console.log(`Bob accepted wager of ${fmt(wager)}\n`);
        }
    }),
]);


const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);