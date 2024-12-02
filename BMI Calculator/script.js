// note - this only works for ages >= 20

const form = document.getElementById('bmi_form');
const show_bmi = document.getElementById('bmi_value');
const show_bmi_range = document.getElementById('bmi_range');
let user_height = document.getElementById('height').value;
const user_weight = document.getElementById('weight').value;
if (!show_bmi.value) {
    show_bmi.innerHTML = "0.00"
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
    // calc
})

form.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {

        if (user_height < 39 || user_weight < 9) {
            alert('Error: height must be greater than 40 and weight greater than 10');
            return;
        }
        
        e.preventDefault();
        handleSubmit();
    }
})

function handleSubmit() {

    if (user_height < 39 || user_weight < 9) {
        alert('Error: height must be greater than 40 and weight greater than 10');
        return;
    }

    user_height = user_height / 100;

    let bmi = user_weight / (user_height * user_height);
    bmi = Math.round(bmi * 100) / 100;
    show_bmi.innerHTML = bmi;

    if (bmi < 18.5) {
        show_bmi_range.innerHTML = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        show_bmi_range.innerHTML = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        show_bmi_range.innerHTML = "Overweight";
    } else {    
        show_bmi_range.innerHTML = "Obese";
    }
}