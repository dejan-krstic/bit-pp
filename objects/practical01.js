var breakfast = {
    name : "English breakfast",
    ingredients : ["beans", "eggs", "sausage", "bacon", "english muffin"],
    energy : 700,
    instructions : "Fry eggs, bacon and sausage and serve with cooked beans and muffin",
    printInstructions : function () {
         return console.log;
    },
    JSCompliant : function (a) {
        if (breakfast.energy >= 500) return a(true + ' = ' + breakfast.instructions);
        else return false;
    },
}

console.log(breakfast.JSCompliant(breakfast.printInstructions));