import React, { useState, useEffect } from 'react';
import { renderDOM } from './views/render';
import './index.css';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}))


import { defaults } from './utils/constants';

import FundAccount from './views/app-views/fund-account';
import DeployerAttacher from './views/app-views/deployer-attacher';
import ConnectAccount from './views/app-views/connect-account';
import Deployer from './components/deployer';
import Attacher from './components/attacher';
import WithPlayer from './components/player';


const App = () => {
    const [view, setView] = useState('ConnectAccount');
    const [balance, setBalance] = useState(null);
    const [account, setAccount] = useState(null);


    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount));
        setView('DeployerOrAttacher');
    }

    const skipFundAccount = () => {
        setView('DeployerOrAttacher');
    }

    const selectAttacher = () => {
        setView('Attacher');
    }

    const selectDeployer = () => {
        setView('Deployer');
    }

    useEffect(() => {
        (async () => {
            const acc = await reach.getDefaultAccount();
            const balAtomic = await reach.balanceOf(acc);
            const bal = reach.formatCurrency(balAtomic, 4);
            setAccount(acc);
            setBalance(bal);

            if (await reach.canFundFromFaucet()) {
                setView('FundAccount');
            } else {
                setView('DeployerOrAttacher')
            }
        })();
    }, []);

    switch (view) {
        case 'ConnectAccount':
            return <ConnectAccount />;
        case 'FundAccount':
            return <FundAccount bal={balance} standardUnit={standardUnit} defaultFundAmt={defaults.defaultFundAmt} fundAccount={fundAccount} skipFundAccount={skipFundAccount} />;
        case 'DeployerOrAttacher':
            return <DeployerAttacher selectDeployer={selectDeployer} selectAttacher={selectAttacher} />;
        case 'Deployer':
            const DeployerWithPlayer = WithPlayer(Deployer, account);
            return <DeployerWithPlayer />;
        case 'Attacher':
            const AttacherWithPlayer = WithPlayer(Attacher, account);
            return <AttacherWithPlayer />;
        default:
            return (
                <div></div>
            );
    }

}

renderDOM(<App />);