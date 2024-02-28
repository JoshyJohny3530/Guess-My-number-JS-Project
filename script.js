'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMsg = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            displayMsg('No Number Entered');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess === secretNumber) {
            displayMsg('Correct guess');
            score++;
            document.querySelector('.score').textContent = score;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        }

        else if (guess != secretNumber) {
            if (score > 1) {
                displayMsg(guess > secretNumber ? ' High' : 'Low');
                score--
                document.querySelector('.score').textContent = score;
            }
            else {
                displayMsg('loose the game');
                document.querySelector('.score').textContent = 0;
            }
        }
    }

        // else if (guess < secretNumber) {
        //     if (score > 1) {
        //         displayMsg('too low');
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         displayMsg('loose the game');
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         displayMsg('too high');
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         displayMsg('loose the game');
        //     }
        // }
    )


document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMsg('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    }
)