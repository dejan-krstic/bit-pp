var grade = "b";

switch (grade) {
    case "A":
    case "a":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade!");
        break;
}