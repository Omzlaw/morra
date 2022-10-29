import React, { useState, useEffect } from 'react';
import { renderDOM } from './views/render';
import './index.css';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;


import { defaults } from './utils/constants';

import FundAccount from './views/app-views/fund-account';
import DeployerAttacher from './views/app-views/deployer-attacher';
import ConnectAccount from './views/app-views/connect-account';
import Deployer from './components/deployer';
import Attacher from './components/attacher';


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
            // const acc = await reach.getDefaultAccount();
            const acc = await reach.newTestAccount(reach.parseCurrency(defaults.defaultFundAmt));
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
            return <Deployer acc={account} />;
        case 'Attacher':
            return <Attacher acc={account} />;
        default:
            return (
                <div></div>
            );
    }

}

renderDOM(<App />);