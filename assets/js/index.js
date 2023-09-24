let emailError = document.querySelector('#email-error');
let emailField = document.querySelector('#email-field');
let inputValue = "";
emailField.addEventListener("input", function(event) {
    inputValue = event.target.value;
});

function emailCheck(){
    if (!emailField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailError.innerHTML = "Valid email required";
    } else {
        emailError.innerHTML = "";
        document.querySelector('#sign-up').classList.add('hidden');
        document.querySelector('#success-popup').classList.remove('hidden');
        document.querySelector('span').innerHTML = inputValue;
    }
}

document.querySelector('#dismiss').addEventListener('click', function(){
    document.querySelector('#sign-up').classList.remove('hidden');
    document.querySelector('#success-popup').classList.add('hidden');
})
