import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);


const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());


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
            console.log(`Bob accepted wager of ${wager}`);
        }
    }),
]);
