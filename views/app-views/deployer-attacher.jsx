import React from 'react';

const DeployerAttacher = ({ selectDeployer, selectAttacher }) => {
    return (
        <div>
            Please select a role:
            <br />
            <p>
                <button
                    onClick={() => selectDeployer()}
                >Deployer</button>
                <br /> Set the wager, deploy the contract.
            </p>
            <p>
                <button
                    onClick={() => selectAttacher()}
                >Attacher</button>
                <br /> Attach to the Deployer's contract.
            </p>
        </div>
    );
}

export default DeployerAttacher;