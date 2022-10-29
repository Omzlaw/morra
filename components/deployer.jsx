import React, { useState } from 'react';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;


import { defaults } from '../utils/constants.js';
import SetWager from '../views/deployer-views/set-wager.jsx';
import WaitingForAttacher from '../views/deployer-views/waiting-for-attacher.jsx';
import Deploying from '../views/deployer-views/deploying.jsx';
import Deploy from '../views/deployer-views/deploy.jsx';

const Deployer = ({ acc, interactObjects }) => {
    const [view, setView] = useState('SetWager');
    const [ctcInfoStr, setCtcInfoStr] = useState(null);
    const [wager, setWagerValue] = useState(defaults.defaultWager);

    const setWager = () => {
        return wager;
    }

    const deploy = async () => {
        const ctc = acc.contract(backend);
        setView('Deploying');
        backend.Alice(ctc, {setWager, ...interactObjects});
        const ctcInfoStrData = JSON.stringify(await ctc.getInfo(), null, 2);
        setCtcInfoStr(ctcInfoStrData);
        setView('WaitingForAttacher');
    }

    switch (view) {
        case 'SetWager':
            return <SetWager setWager={setWagerValue} setView={setView} standardUnit={standardUnit} />;
        case 'WaitingForAttacher':
            return <WaitingForAttacher ctcInfoStr={ctcInfoStr} />;
        case 'Deploying':
            return <Deploying />;
        case 'Deploy':
            return <Deploy standardUnit={standardUnit} wager={wager} deploy={deploy} />;
        default:
            return (
                <div></div>
            );
    }
}

export default Deployer;