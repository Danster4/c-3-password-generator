// Assignment code here
var designateLength;
var includeCapitalLetters;
var includeLowerCaseLetters;
var includeNumbers;
var includeSymbols;
var choices;

// Array for characters
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "", "]", "^", "`", "{", "|", "}", "~" ];

// function to generate password when button clicked
var generatePassword = function() {
  alert("Hello! Welcome to Password Generator!" +"\n" + "Please answer the following prompts and questions! Thank you!")
  
    designateLength = parseInt(prompt("How many characters would you like your password to be?")); {
    if (!designateLength) {
      alert("Please enter a password length value.");
    }
    else { 
      // Confirm different variables (characters) to include in password
      includeCapitalLetters = confirm("Would you like Capital Letters (i.e. A, B, C) in your password?" +"\n" + "Select Okay to include Capital Letters.");
      includeLowerCaseLetters = confirm("Would you like Lower Case Letters (i.e. a, b, c) in your password?" + "\n" + "Select Okay to include Lower Case Letters.");
      includeNumbers = confirm("Would you like Numbers (i.e. 1, 2, 3) in your password?" + "\n" + "Select Okay to include Numbers.");
      includeSymbols = confirm("Would you like Symbols (i.e. !$%&'()*+,-./:;<=>?@[^/]_`{|}~) in your password?" + "\n" + "Select Okay to include Symbols.");
    };
    
    // If all 4 variables (confirms) are chosen
    if (includeCapitalLetters && includeLowerCaseLetters && includeNumbers && includeSymbols) {
      var choices = capitalLetters.concat(lowerCaseLetters, numbers, symbols)
    }

    // Else if for 4 negative options (none chosen)
    else if (!includeCapitalLetters && !includeLowerCaseLetters && !includeNumbers && !includeSymbols) {
      choices = alert("Please choose at least one criteria!")
    }

    // Else if options for 3 choices
    else if (includeCapitalLetters && includeLowerCaseLetters && includeNumbers) {
      var choices = capitalLetters.concat(lowerCaseLetters, numbers)
    }
    else if (includeCapitalLetters && includeLowerCaseLetters && includeSymbols) {
      var choices = capitalLetters.concat(lowerCaseLetters, symbols)
    }
    else if (includeCapitalLetters && includeSymbols && includeNumbers) {
      var choices = capitalLetters.concat(symbols, numbers)
    }
    else if (includeSymbols && includeLowerCaseLetters && includeNumbers) {
      var choices = symbols.concat(lowerCaseLetters, numbers)
    }

    // Else if options for 2 choices
    else if (includeCapitalLetters && includeLowerCaseLetters) {
      var choices = capitalLetters.concat(lowerCaseLetters)
    }
    else if (includeCapitalLetters && includeNumbers) {
      var choices = capitalLetters.concat(numbers)
    }
    else if (includeCapitalLetters && includeSymbols) {
      var choices = capitalLetters.concat(symbols)
    }
    else if (includeLowerCaseLetters && includeNumbers) {
      var choices = lowerCaseLetters.concat(numbers)
    }
    else if (includeLowerCaseLetters && includeSymbols) {
      var choices = lowerCaseLetters.concat(symbols)
    }
    else if (includeNumbers && includeSymbols) {
      var choices = numbers.concat(symbols)
    }

    //Else if options for 1 choice
    else if (includeCapitalLetters) {
      var choices = capitalLetters
    }
    else if (includeLowerCaseLetters) {
      var choices = lowerCaseLetters
    }
    else if (includeNumbers) {
      var choices = numbers
    }
    else if (includeSymbols) {
      var choices = symbols
    }

    // Empty array to throw output on final choices into
    var passwordArray = [];

    // For loop to randomly generate from the choices variable until the length designated is reached. Output it to passwordArray
    for (var i = 0; i < designateLength; i++) {
      var finalChoices = choices[Math.floor(Math.random() * choices.length)];
      passwordArray.push(finalChoices)
    }

    // Transform the array of passwordArray into a string called passwordString, as my final output for the function generatePassword()
    var passwordString = passwordArray.join("");
    console.log(passwordString)
    return passwordString;
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
