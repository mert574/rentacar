import $ from "jquery";

$(() => {
    $("form#login").submit(checkBeforeSubmit);
});

function checkBeforeSubmit(event) {
    const username = $("input#username").val();
    const password = $("input#password").val();
    const isValid = validateLogin(username, password);
    if (!isValid) {
        $(".alert#message")
            .toggleClass("d-none")
            .text("Invalid username or password.");

        setTimeout(() => {
            $(".alert#message").toggleClass("d-none")
        }, 3000);
    }
    return isValid
}

function validateLogin(username, password) {
    if (!username.length || !password.length) {
        return false;
    }
    return username === password;
}
