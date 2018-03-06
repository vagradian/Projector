var user = {
    login: "mary",
    password: "pass123"
};

var login = prompt("Login");
var maxAttempts = 5;

if (login === user.login) {
    for (i = 0; i < maxAttempts; i++) {
        var attemptsCounter = maxAttempts - i;
        var password = prompt("Password \nyou have " + attemptsCounter + " attempts");
        if (password === user.password) {
            alert("You have successfully logged in!");
            break;
        } else {
            alert("Password is wrong!");
        }
    }
} else {
    alert("Wrong login!");
    prompt("Login");
}