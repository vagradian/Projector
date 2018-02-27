var user = {
    login: "mary",
    password: "pass123"
};

var login = prompt("Login");

if (login === user.login) {
    for (i = 0; i < 5; i++) {
        var attemptsCounter = 5 - i;
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