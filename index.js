import React, { useState, useEffect } from 'react';
import { renderDOM } from './views/render';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;


import './vendors/bootstrap-5.2.2-dist/css/bootstrap.min.css';
import './index.css';


import { ALGO_WalletConnect as algoConnect } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

import { defaults } from './utils/constants';

import FundAccount from './views/app-views/fund-account';
import DeployerAttacher from './views/app-views/deployer-attacher';
import ConnectAccount from './views/app-views/connect-account';
import Deployer from './components/deployer';
import Attacher from './components/attacher';
import WithPlayer from './components/player';
import Wrapper from './views/app-views/wrapper';


const App = () => {
    const [view, setView] = useState('SelectWallet');
    const [balance, setBalance] = useState(null);
    const [account, setAccount] = useState(null);

    const selectMyAlgoWallet = async () => {
        reach.setWalletFallback(reach.walletFallback({
            providerEnv: 'TestNet', MyAlgoConnect
        }));
        setView('StartGame');
    }

    const selectPeraAlgoWallet = async () => {
        reach.setWalletFallback(reach.walletFallback({
            providerEnv: 'TestNet', algoConnect
        }));
        setView('StartGame');
    }

    const startGame = async () => {
        const acc = await reach.getDefaultAccount();
        // const acc = await reach.newTestAccount(reach.parseCurrency(defaults.defaultFundAmt));
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        setAccount(acc);
        setBalance(bal);

        if (await reach.canFundFromFaucet()) {
            setView('FundAccount');
        } else {
            setView('DeployerOrAttacher')
        }
    }

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

    // useEffect(() => {
    //     (async () => {
    //     })();
    // }, []);

    switch (view) {
        case 'StartGame':
        case 'SelectWallet':
            return <Wrapper selectMyAlgoWallet={selectMyAlgoWallet} selectPeraAlgoWallet={selectPeraAlgoWallet} view={view} startGame={startGame} />
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