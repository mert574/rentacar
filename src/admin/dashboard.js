import $ from "jquery";
import qs from "qs";

$(() => {
    const { username } = qs.parse(window.location.search.substring(1));
    if (!username || !username.length) {
        window.location = "/admin/login.html";
    }
    $("span#name").text(username);
});

function validateLogin(username, password) {
    if (!username.length || !password.length) {
        return false;
    }
    return username === password;
}
