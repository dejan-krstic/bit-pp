// Write a program to check whether a character is alphabet or not
var char = "jhgu";
var result = " not"

// Checks if char is empty
if (char) {
    // Checks if char is a single element string
    if (char.length == 1) {
        if ((char >= "A") && (char <= "z")) {
            result = "";
        }

        console.log("The character", "\"" + char + "\"", "is" + result + " alphabet.");
    }
    else {
        console.log("Your input consists of more than one character!")
    }
}
else {
    console.log("Your input is empty!")
}