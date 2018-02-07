var day = 29;
var month = "February";
var year = 2018;
var leap;
var date;

if (month == "February") {

    // Proveravamo da li je godina prestupna
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                leap = true;
            }
            else leap = false;
        }
        else leap = true;
    }
    else leap = false;
    if (leap) {
        date = (day >= 1 && day <=29);
    }
    else date = (day >= 1 && day <=28);
}
else {
    switch (month) {
        case "January" :
        case "March" :
        case "May" :
        case "July" :
        case "August" :
        case "October" :
        case "December" :
            if (day >= 1 && day <= 31) {
                date = true;
            }
            else date = false;
            break;
        case "April" :
        case "June" :
        case "September" :
        case "November" :
            if (day >= 1 && day <= 30) {
                date = true;
            }
            else date = false;
            break;
        default :
            date = false;
    }    
}
date ? console.log("Date is valid") : console.log("Date is not valid!");

