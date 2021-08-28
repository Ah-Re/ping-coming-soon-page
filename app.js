const notifyButton = document.getElementsByClassName("notify-button")[0];
const emailInput = document.getElementsByClassName("email-input")[0];
const emailErrorMessage = document.getElementsByClassName("email-error-message")[0];

notifyButton.addEventListener("click", function(e) {
    e.preventDefault();
    let userEmail = emailInput.value;

    if(!validateEmail(userEmail)) {
        emailErrorMessage.style.display = "block";
        emailInput.classList.add("email-input-error-state");
        emailInput.style.marginBottom = "10px";
        notifyButton.style.margin = "2rem auto auto auto";
    } else {
        emailErrorMessage.style.display = "none";
        emailInput.classList.remove("email-input-error-state");
        emailInput.style.marginBottom = "15px";
    };
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}