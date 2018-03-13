function triangle(number) {
    var result = "";


    for (i = 0; i < number; i++) {
        result += "#";
        console.log(result);
    }
}

triangle(5);


function chess(height, width) {

    for (i = 0; i < height; i++) {
        var symb = "#";
        var space = " ";
        var result = "";

        if (i % 2) {
            for (j = 0; j < width - 1; j++) {
                result += space + symb;
            }

            console.log(result);
        }

        else {
            for (j = 0; j < width; j++) {
                result += symb + space;
            }

            console.log(result);
        }

    }
}

chess(5, 4);


function triangleTwo(number) {

    for (i = 0; i < number; i++) {
        var symb = "#";
        var space = " ";
        var result = "";

        for (j = number - i; j > 1; j--) {
           result += space;
        }

        for (m = i; m >= 0; m--) {
            result += symb;
        }
        console.log(result);
    }
}

triangleTwo(4);


function triangleThree(number) {
    for (i = number; i > 0; i--) {
        var symb = "#";
        var space = " ";
        var result = "";

        for (j = i; j > 0; j--) {
            result += symb;
        }

        for (m = i; m > 0; m--) {
            result += space;
        }
        console.log(result);
    }
}

triangleThree(4);


function triangleFour(number) {
    for (i = number; i > 0; i--) {
        var symb = "#";
        var space = " ";
        var result = "";

        for (j = number - i; j > 0; j--) {
            result += space;
        }

        for (m = i; m > 0; m--) {
            result += symb;
        }
        console.log(result);
    }
}

triangleFour(4);

