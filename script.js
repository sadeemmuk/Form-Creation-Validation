addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        var isValid = true;
        let messages = [];

        if (username.length <= 3){
            isValid = false;
            messages = ["push"];
        }else {
            isValid = true;
        }

        if(email.includes('@')){
            isValid = true;
        }else {
            isValid = false;
            messages = ["please Enter valid email"];
        }

        if(password.length < 8){
            isValid = false;
            messages = ["Please Enter more than 8 charachters"];
        }else {
            isValid = true;
        }

        feedbackDiv.style.display = 'block';

        if(isValid == true){
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        }else if (isValid == false){
            feedbackDiv.innerHTML = messages + `<br>`;
            feedbackDiv.style.color = "#dc3545";
        }

    })
})




