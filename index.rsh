'reach 0.1'


const [isRoundOutcome, R_A_WINS, DRAW, R_B_WINS] = makeEnum(3);
const [isGameOutcome, A_WINS, B_WINS] = makeEnum(2);
const [isFingerCount, ZERO_F, ONE_F, TWO_F, THREE_F, FOUR_F, FIVE_F] = makeEnum(6);
const [isGuess, ZERO_G, ONE_G, TWO_G, THREE_G, FOUR_G, FIVE_G, SIX_G, SEVEN_G, EIGHT_G, NINE_G, TEN_G] = makeEnum(11);


const roundWinner = (aliceFingers, aliceGuess, bobFingers, bobGuess, aliceWinCount, bobWinCount) => {
    const totalFingers = aliceFingers + bobFingers;
    if (aliceGuess == bobGuess) {
        return [DRAW, aliceWinCount, bobWinCount];
    } else {
        if (totalFingers == aliceGuess) {
            const aliceNewCount = aliceWinCount + 1;
            return [R_A_WINS, aliceNewCount, bobWinCount];
        } else if (totalFingers == bobGuess) {
            const bobNewCount = bobWinCount + 1;
            return [R_B_WINS, aliceWinCount, bobNewCount];
        } else {
            return [DRAW, aliceWinCount, bobWinCount];
        }
    }
}

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([UInt], UInt),
    seeOutcome: Fun([UInt], Null),
    seePoints: Fun([UInt, UInt], Null),
    informTimeout: Fun([], Null)
}

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


    var [roundOutcome, aliceWinCount, bobWinCount] = [DRAW, 0, 0];
    invariant(balance() == 2 * wager && isRoundOutcome(roundOutcome));

    while (aliceWinCount < 3 || bobWinCount < 3) {
        commit();

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

        [roundOutcome, aliceWinCount, bobWinCount] = roundWinner(handAlice, guessAlice, handBob, guessBob, aliceWinCount, bobWinCount);

        continue;
    };

    commit();

})