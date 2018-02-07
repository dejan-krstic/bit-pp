// Write a program to check whether an alphabet is vowel or a consonant
var char = "b";
var result = "consonant"

// Checks if char is empty
if (char) {
    // Checks if char is a single element string
    if (char.length == 1) {
        // Checks if char is alphabet
        if (char >= "A" && char <= "z") {
            if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
                result = "vowel";
            }
            console.log("The character is a", result + ".");
        }
        else {
            console.log("Please input an alphabet character!")
        }

    }
    else {
        console.log("Please input only one character!")
    }
}
else {
    console.log("Your input is empty!")
}