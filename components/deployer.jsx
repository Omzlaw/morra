import React from 'react';
import * as backend from './build/index.main.mjs';
import { defaults } from '../utils/constants.js';
import SetWager from '../views/deployer-views/set-wager.jsx';
import { loadStdlib } from '@reach-sh/stdlib';
import WaitingForAttacher from '../views/deployer-views/waiting-for-attacher.jsx';
import Deploying from '../views/deployer-views/deploying.jsx';
import Deploy from '../views/deployer-views/deploy.jsx';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

const Deployer = ({ acc }) => {
    const [view, setView] = useState('SetWager');
    const [ctc, setCtc] = useState(null);
    const [ctcInfoStr, setCtcInfoStr] = useState(null);
    const [wager, setWager] = useState(defaults.defaultWager);

    const deploy = () => {
        setCtc(acc.contract(backend));
        setView('Deploying');
        setCtc(ctc);
        backend.Alice(ctc, this);
        setCtcInfoStr(JSON.stringify(await ctc.getInfo(), null, 2));
        setView('WaitingForAttacher');
    }


    switch (view) {
        case 'SetWager':
            return <SetWager setWager={setWager} setView={setView} standardUnit={standardUnit} />;
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