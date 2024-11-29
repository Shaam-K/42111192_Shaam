let ran_num = Math.floor((Math.random() * 100) + 1)
let game_run = 0
let count = 0
const total_attempts = 10;
const get_hint = document.getElementById('hint')
const get_chances = document.getElementById('chances')
const check_button = document.getElementById('check');

const guess_obj = document.forms['num_form']['num'];
const form = document.getElementById('num_form');

form.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        check();
    }
})

function check() {
    if (game_run == 0 && count < total_attempts) {
        let guess_num = guess_obj.value;
        if (guess_num == "" ) {
            alert('Enter Number');
        } 
        else if (guess_num > 100 || guess_num < 0) {
            alert('Number must be between 0 and 100');
        }
        else {
            count += 1;
            get_chances.innerHTML = `You have ${total_attempts - count} chances`
    
            if (guess_num < ran_num) {
                get_hint.innerHTML = "Guess Higher"
            } else if (guess_num > ran_num) {
                get_hint.innerHTML = "Guess Lower"
            } else {
                get_hint.innerHTML = "You Guessed Right"
                check_button.innerHTML = 'Reset'
                game_run = 1
            }
        }
    } else {
        check_button.innerHTML = 'Reset';
        reset();
    }
}

function reset() {
    ran_num = Math.floor((Math.random() * 100) + 1)
    count = 0;
    game_run = 0;   
    check_button.innerHTML = "check"    
    get_chances.innerHTML = `You have 10 chances`
    get_hint.innerHTML = "Guess it"
    guess_obj.value = ""
}