var multiplicationTable = function (number) {
    var topBorder = "╔═";
    var bottomBorder = "╚═";
    var table = "║  X  ║";
    for (t = 1; t <= number; t++) {
        if (t < 10) table += "   " + t;
        else table += "  " + t;
    }
    table += " ║\n"
    var lenght = (number+1) * 4;
    for (m = 0; m < lenght; m ++)
        if (m == 4) {
            topBorder += '╦';
            bottomBorder += "╩";
        } else {
            topBorder += "═";
            bottomBorder += "═";
        }

    topBorder += "══╗\n";
    bottomBorder += "══╝";

    for (m = 0; m < lenght; m ++) {
        if (m == 0) { table += "╠══"; continue; }
        if (m == 4) table += '╬';
        else table += "═";
    }

    table += "══╣\n";

    for (i = 1; i <= number; i++) {
        if (i < 10) table += '║  ' + i + '  ║';
        else table += '║ ' + i + '  ║';
        for (j = 1; j <= number; j++) {
            if (i * j <= 9) table += '   ' + i * j;
            if (i * j >= 10 && i * j <= 99) table += '  ' + i * j;
            if (i * j > 99) table += ' ' + i * j;

        }
        table += " ║\n";

    }
    return topBorder + table + bottomBorder;
}

console.log(multiplicationTable(31));