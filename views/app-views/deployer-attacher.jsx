import React from 'react';

const DeployerAttacher = ({ selectDeployer, selectAttacher }) => {
    return (
        <div className="body text-center">
            <div>
                <h3 className="mb-5">Please select a role:</h3>

                <div>

                    <div className="mb-3">
                        <button
                            className="btn btn-success mb-3"
                            onClick={() => selectDeployer()}
                        >Deployer</button>
                        <h5 className="mb-5">Set the wager, deploy the contract.</h5>
                    </div>

                    <div className="mb-3">

                        <button
                            className="btn btn-warning mb-3"
                            onClick={() => selectAttacher()}
                        >Attacher</button>
                        <h5>Attach to the Deployer's contract.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeployerAttacher;