import React, { useState } from 'react';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

import AcceptTerms from "../views/attacher-views/accept-terms";
import Attach from "../views/attacher-views/attach";
import Attaching from "../views/attacher-views/attaching";
import Waiting from '../views/attacher-views/waiting';


const Attacher = ({ acc, interactObjects }) => {
    const [view, setView] = useState('Attach');
    const [wager, setWager] = useState(null);
    const [resolveAcceptedP, setResolveAcceptedP] = useState(null);

    const acceptWager = async (wagerAtomic) => {
        const wager = reach.formatCurrency(wagerAtomic, 4);

        return await new Promise(resolve => {
            setResolveAcceptedP(() => resolve);
            setWager(wager);
            setView('AcceptTerms');
        });
    }

    const attach = (ctcInfoStr) => {
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        setView('Attaching');
        backend.Bob(ctc, { acceptWager, ...interactObjects });
    }

    const acceptTerms = () => {
        resolveAcceptedP();
        setView('Waiting');
    }

    const declineTerms = () => {
        location.href = '/';
    }

    switch (view) {
        case 'Attach':
            return <Attach attach={attach} />;
        case 'Attaching':
            return <Attaching />;
        case 'AcceptTerms':
            return <AcceptTerms wager={wager} standardUnit={standardUnit} acceptTerms={acceptTerms} declineTerms={declineTerms} />;
        case 'Waiting':
            return <Waiting />;
        default:
            return (
                <div></div>
            );
    }
}

export default Attacher;