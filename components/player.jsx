import React from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { HAND } from '../utils/constants'

const Player = () => {

    const random = () => {
        return reach.hasRandom.random();
    }

    const getHand = () => {

    }
}

export default Player;