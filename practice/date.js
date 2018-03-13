var day = prompt("What day you were born?");


if (day < 1 || day > 31 || isNaN(+day)) {
    alert("type correct date");
} else {
    var month = prompt("What month you were born?");
    if (month < 1 || month > 12) {
        alert("type correct date");
    } else {
        var year = prompt("What year you were born?");
        if (year < 1900 || year > 2018) {
            alert("type correct date");
        } else {
            alert("thank you");
        }
    }
}