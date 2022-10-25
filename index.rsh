'reach 0.1'


// Define Enums
const [isRoundOutcome, R_A_WINS, DRAW, R_B_WINS] = makeEnum(3);
const [isGameOutcome, A_WINS, PLAYING, B_WINS] = makeEnum(3);
const [isFingerCount, ZERO_F, ONE_F, TWO_F, THREE_F, FOUR_F, FIVE_F] = makeEnum(6);
const [isGuess, ZERO_G, ONE_G, TWO_G, THREE_G, FOUR_G, FIVE_G, SIX_G, SEVEN_G, EIGHT_G, NINE_G, TEN_G] = makeEnum(11);


// Logic to get current game status, first player to reach 3 points wins
const gameWinner = (aliceWinCount, bobWinCount) => {
    if (aliceWinCount == 3) {
        return A_WINS;
    } else if (bobWinCount == 3) {
        return B_WINS;
    } else {
        return PLAYING;
    }
}

// Logic to get the winner for a particular round and addition of points for round win
const roundWinner = (aliceFingers, aliceGuess, bobFingers, bobGuess, aliceWinCount, bobWinCount) => {
    const totalFingers = aliceFingers + bobFingers;

    if (aliceGuess == bobGuess) {
        const gameStatus = gameWinner(aliceWinCount, bobWinCount);
        return [gameStatus, DRAW, aliceWinCount, bobWinCount];
    } else {
        if (totalFingers == aliceGuess) {
            const aliceNewCount = aliceWinCount + 1;
            const gameStatus = gameWinner(aliceWinCount, bobWinCount);
            return [gameStatus, R_A_WINS, aliceNewCount, bobWinCount];
        } else if (totalFingers == bobGuess) {
            const bobNewCount = bobWinCount + 1;
            const gameStatus = gameWinner(aliceWinCount, bobWinCount);
            return [gameStatus, R_B_WINS, aliceWinCount, bobNewCount];
        } else {
            const gameStatus = gameWinner(aliceWinCount, bobWinCount);
            return [gameStatus, DRAW, aliceWinCount, bobWinCount];
        }
    }
}


// Test Assertion


// Round Assertion

// Alice wins round and gets one point. Alice plays 4 and Bob plays 5
// Alice guesses 9 and Bob guesses 6
assert(roundWinner(FOUR_F, NINE_G, FIVE_F, SIX_G, 0, 0) == [PLAYING, R_A_WINS, 1, 0]);

// Bob wins round and gets one point. Alice plays 3 and Bob plays 2
// Alice guessess 8 and Bob guesses 5
assert(roundWinner(THREE_F, EIGHT_G, TWO_F, FIVE_G, 0, 0) == [PLAYING, R_B_WINS, 0, 1]);

// Draw with same guesses
// Alice plays 3 and Bob plays 1
// Alice guesses 4 and Bob guesses 4
assert(roundWinner(THREE_F, FOUR_G, ONE_F, FOUR_G, 0, 0) == [PLAYING, DRAW, 0, 0]);

// Draw with both players guessing wrongly
// Alice plays 2 and Bob plays 4
// Alice guesses 5 and Bob guesses 9
assert(roundWinner(TWO_F, FIVE_G, FOUR_F, NINE_G, 0, 0) == [PLAYING, DRAW, 0, 0]);

// Game Winner Assertion

// Alice has 3 points and Bob has 2 points. Alice wins game
assert(gameWinner(3, 2) == A_WINS)

// Alice has 1 points and Bob has 3 points. Bob wins game
assert(gameWinner(1, 3) == B_WINS)

// Alice has 2 points and Bob has 2 points. Gane status is 'PLAYING'
assert(gameWinner(2, 2) == PLAYING)

// assets for all combinations
forall(UInt, aliceFingers =>
    forall(UInt, bobFingers =>
        forall(UInt, aliceGuess =>
            forall(UInt, bobGuess =>
                assert(isRoundOutcome(roundWinner(aliceFingers, aliceGuess, bobFingers, bobGuess, 0, 0)[1]))))));

//  asserts for a draw - each guesses the same
forall(UInt, (aliceFingers) =>
    forall(UInt, (bobFingers) =>
        forall(UInt, (guess) =>
            assert(roundWinner(aliceFingers, guess, bobFingers, guess, 0, 0) == [PLAYING, DRAW, 0, 0]))));

// Player Interface
const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([UInt], UInt),
    seeOutcome: Fun([UInt, UInt, UInt], Null),
    seePoints: Fun([UInt, UInt], Null),
    informTimeout: Fun([], Null)
}

// Deadline constant
const deadline = 10;



export const main = Reach.App(() => {

    const Alice = Participant('Alice', {
        ...Player,
        setWager: Fun([], UInt),
    });
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        })
    }

    Alice.only(() => {
        const wager = declassify(interact.setWager());
    });
    Alice.publish(wager)
        .pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    })

    Bob.pay(wager);


    // While loop structure

    // define variables
    var [gameOutcome, roundOutcome, aliceWinCount, bobWinCount] = [PLAYING, DRAW, 0, 0];
    //define invariants
    invariant(balance() == 2 * wager && isRoundOutcome(roundOutcome) && isGameOutcome(gameOutcome));

    while (gameOutcome == PLAYING) {
        commit();

        each([Alice, Bob], () => {
            interact.seePoints(aliceWinCount, bobWinCount);
        })

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const _guessAlice = interact.getGuess(_handAlice);

            const [_handCommitAlice, _handSaltAlice] = makeCommitment(interact, _handAlice);
            const handCommitAlice = declassify(_handCommitAlice);

            const [_guessCommitAlice, _guessSaltAlice] = makeCommitment(interact, _guessAlice);
            const guessCommitAlice = declassify(_guessCommitAlice);
        });

        Alice.publish(handCommitAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();
        unknowable(Bob, Alice(_handAlice, _handSaltAlice));

        Alice.publish(guessCommitAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();
        unknowable(Bob, Alice(_guessAlice, _guessSaltAlice));

        Bob.only(() => {
            const handBob = declassify(interact.getHand());
            const guessBob = declassify(interact.getGuess(handBob));
        })
        Bob.publish(handBob, guessBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const handSaltAlice = declassify(_handSaltAlice);
            const handAlice = declassify(_handAlice);

            const guessSaltAlice = declassify(_guessSaltAlice);
            const guessAlice = declassify(_guessAlice);
        })
        Alice.publish(handSaltAlice, handAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(handCommitAlice, handSaltAlice, handAlice);
        commit();

        Alice.publish(guessSaltAlice, guessAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(guessCommitAlice, guessSaltAlice, guessAlice);

        [gameOutcome, roundOutcome, aliceWinCount, bobWinCount] = roundWinner(handAlice, guessAlice, handBob, guessBob, aliceWinCount, bobWinCount);

        continue;
    };

    assert(gameOutcome == A_WINS || gameOutcome == B_WINS);
    transfer(2 * wager).to(gameOutcome == A_WINS ? Alice : Bob)

    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(gameOutcome, aliceWinCount, bobWinCount);
    })

})