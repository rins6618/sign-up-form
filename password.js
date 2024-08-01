const passElement = document.querySelector('#pass');
const confirmElement = document.querySelector('#cf_pass');

confirmElement.addEventListener("keyup", e => {
    let currentPass = passElement.value;
    let confirmedPass = confirmElement.value;


    if (confirmedPass !== currentPass) {
        passElement.setCustomValidity("Passwords do not match");
        confirmElement.setCustomValidity("Passwords do not match");
    } else {
        passElement.setCustomValidity("");
        confirmElement.setCustomValidity("");
    }
    console.log(currentPass, confirmedPass);
})