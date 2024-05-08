const email = document.getElementById("email-verify-input");
const emailResult = document.getElementById("email-verify-result");

email.addEventListener('change', (e) => verifyEmail(e.target.value))

const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const verifyEmail = (value) => {
    emailResult.innerHTML =  emailRegex.test(value) ? 'Pass' : 'Wrong'
}

