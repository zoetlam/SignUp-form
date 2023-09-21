let emailError = document.querySelector('#email-error');
let emailField = document.querySelector('#email-field');

function emailCheck(){
    if (!emailField.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailError.innerHTML = "Valid email required"
        return false;
    } else {
        emailError.innerHTML = "";
        
        document.querySelector('#sign-up').classList.add('hidden');
        document.querySelector('#success-popup').classList.remove('hidden');
        return true;
    }
}