# morra
This repository implements the Morra hand game [link](https://en.wikipedia.org/wiki/Morra_(game)) using the reach web3 language


<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Morra Game</h3>

<div align="center">


</div>

---

<p align="center"> Morra game
    <br> 
</p>

This web3 implementation of the popular "Morra game" was built with the Reach lang [link](https://docs.reach.sh) with a react frontend.

The game consists of two participants - The Deployer and Attacher
The Deployer sets the wager for the game and deploys the contract while the Attacher attaches to the contract and accepts the wager.

The two players pick a finger to play from 0 - 5 and chooses a guess for the total fingers picked by both players from 0 -10.
If only one of the players gets the correct guess, s/he gets a point for round.
The first player  to reach a total of 3 points wins the game and gets a double of the wager value transferred to his/her account



## Installation and Configurations

For Windows users, you will need to install wsl and a linux distribution for the wsl (I recommend Ubuntu). You can check out this [link](https://docs.microsoft.com/en-us/windows/wsl/install) for installing a linux distribution with wsl.

You can also check out [link](https://docs.reach.sh/guide/windows/#guide-windows) for a step by step guide for installing reach on windows
 
- You will need to install `make` and also install `Docker `

- To verify if every thing is installed properly run the following commands on your terminal
```bash
make --version
```
```bash
docker --version
```
```bash
docker-compose --version
```
If all this runs succesfully without any errors you are good to go to the next step

- Lets create a directory for this project. I would recommend using 
```bash
mkdir -p ~/reach/morra-game && cd ~/reach/morra-game
```
- Next lets install reach using the command below
```bash
curl https://docs.reach.sh/reach -o reach ; chmod +x reach
```
Run ```./reach version``` on your terminal to verify if reach was installed properly

- For the next step make sure your docker is open, then navigate to the directory we just created i.e `reach/morra-game` then open it on your vs code, once in your vs code open the folder ans create a file namely `index.rsh` once done open an integrated terminal and run the following command to install the images
```bash
./reach update
```
