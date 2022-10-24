'reach 0.1'


const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);
const [isFingerCount, ZERO_F, ONE_F, TWO_F, THREE_F, FOUR_F, FIVE_F] = makeEnum(6);
const [isGuess, ZERO_G, ONE_G, TWO_G, THREE_G, FOUR_G, FIVE_G, SIX_G, SEVEN_G, EIGHT_G, NINE_G, TEN_G] = makeEnum(11);

const Player = {
    getHand: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
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
        acceptWager: Fun([UInt], Null)
    });
    init()

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout()
        })
    }

    Alice.only(() => {
        const wager = declassify(interact.setWager());
    });
    Alice.publish(wager)
        .pay(wager)
    commit()

    Bob.only(() => {
        interact.acceptWager(wager);
    })

    Bob.pay(wager)
    commit()

})