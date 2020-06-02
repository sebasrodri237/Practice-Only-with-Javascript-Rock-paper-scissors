const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameStart = document.getElementById('gameStart');
const winner = document.getElementById('result');
const resultUser = document.getElementById('resultGame-User');
const resultPc = document.getElementById('resultGame-Pc'); 
const imgOptionUser = document.getElementById('imgOptionUser');
const imgOptionPc = document.getElementById('imgOptionPc');

class game{

    constructor(){

        this.userChoice = this.userChoice.bind(this);
        gameStart.innerHTML = `Rock, Paper, Scissors.<br>The Game.<br> Choose One !!!`;
        gameStart.style.cursor = `initial`;
        gameStart.style.color = `#000000`;
        this.initialize();
        this.generatePcChoice();
        this.addEventClick();
    }
    initialize(){

        this.options = {

            rock: rock,
            paper: paper,
            scissors: scissors
        }
        this.imgOptions = {

            rock: "images/fist_hand_3268.png",
            paper: "images/handcursor_mano_3527.png",
            scissors: "images/twofingers_hand_3266.png"
        }
    }
    generatePcChoice(){

        this.pcChoise = Math.floor(Math.random()*3);
    }
    addEventClick(){

        this.options.rock.addEventListener('click', this.userChoice);
        this.options.paper.addEventListener('click', this.userChoice);
        this.options.scissors.addEventListener('click', this.userChoice);
    }
    transformPcCHoiseToString(number){

        switch (number) {
            case 0:
                return 'rock'
            case 1:
                return 'paper'
            case 2:
                return 'scissors'         
        }
    }
    optionComparator(user,pc){

        if(user === 'rock'){
            if(pc === 'paper'){

                winner.innerHTML = `The winner is: <br><br>The PC`;
            }else{

                winner.innerHTML = `The winner is: <br><br>YOU`;
            }
        }
        if(user === 'paper'){
            if(pc === 'scissors'){

                winner.innerHTML = `The winner is: <br><br>The PC`;
            }else{

                winner.innerHTML = `The winner is: <br><br>YOU`;
            }
        }
        if(user === 'scissors'){
            if(pc === 'rock'){

                winner.innerHTML = `The winner is: <br><br>The PC`;
            }else{

                winner.innerHTML = `The winner is: <br><br>YOU`;
            }
        }
    }
    showResultsUser(user){

        if(user === 'rock'){

            resultUser.innerHTML = `rock`;
            imgOptionUser.src = this.imgOptions[user];
        }if(user === 'paper'){

            resultUser.innerHTML = `paper`;
            imgOptionUser.src = this.imgOptions[user];
        }if(user === 'scissors'){

            resultUser.innerHTML = `scissors`;
            imgOptionUser.src = this.imgOptions[user];            
        } 
    }
    showResultsPc(pc){

        if(pc === 'rock'){

            resultPc.innerHTML = `rock`;
            imgOptionPc.src = this.imgOptions[pc];
        }if(pc === 'paper'){

            resultPc.innerHTML = `paper`;
            imgOptionPc.src = this.imgOptions[pc];
        }if(pc === 'scissors'){

            resultPc.innerHTML = `scissors`;
            imgOptionPc.src = this.imgOptions[pc];            
        }
    }
    userChoice(ev){

        const choiceName = ev.target.dataset.option;
        const pcOption = this.transformPcCHoiseToString(this.pcChoise);

        if(choiceName === pcOption){

            winner.innerHTML = `It's a Tie`;
        }else{

            this.optionComparator(choiceName,pcOption);
        }
        this.showResultsUser(choiceName);
        this.showResultsPc(pcOption);
        this.generatePcChoice();
    }
}

function startGame(){

    this.game = new game()
    // console.log(`${rock.dataset.option}`)
}