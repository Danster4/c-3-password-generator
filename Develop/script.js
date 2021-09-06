// Assignment code here



// const includeLowerCaseLetters = document.getElementById("lowerCaseLetters");
// const includeNumbers = document.getElementById ("numbers");
// const includeSymbols = document.getElementById("symbols")

// var makePassword = function () {
//   var characterLength = prompt("How many characters would you like your password to be?")
//   var confirmCapitalLetters = confirm("Would you like Capital Letters (i.e. A, B, C) in your password? Select Okay for Yes");
//     if (confirmCapitalLetters) = getElementById
//   var confirmLowerCaseLetters = confirm("Would you like Lower Case Letters (i.e. a, b, c) in your password? Select Okay for Yes");
//   var confirmNumbersLetters = confirm("Would you like Numbers (i.e. 1, 2, 3)in your password? Select Okay for Yes");
//   var confirmSpecialCharacters = confirm("Would you like Special Characters (ex. !@#$%^&*) in your password? Select Okay for Yes");
// }





const generatePassword = function() {
  alert("Hello! Welcome to Password Generator!" +"\n" + "Please answer the following prompts and questions! Thank you!")
  
  const designateLength = prompt("How many characters would you like your password to be?"); {
    
  }
  
  const includeCapitalLetters = confirm("Would you like Capital Letters (i.e. A, B, C) in your password?" +"\n" + "Select Okay to include Capital Letters.");
    if (includeCapitalLetters == true) {
      randomFunction.capital
    }
    
  const includeLowerCaseLetters = confirm("Would you like Lower Case Letters (i.e. a, b, c) in your password?" + "\n" + "Select Okay to include Lower Case Letters.");
    if (includeLowerCaseLetters == true) {
      randomFunction.lower
    }

  const includeNumbers = confirm("Would you like Numbers (i.e. 1, 2, 3) in your password?" + "\n" + "Select Okay to include Numbers.");
    if (includeNumbers == true) {
      randomFunction.number
    }
  const includeSymbols = confirm("Would you like Symbols (i.e. !$%&'()*+,-./:;<=>?@[^/]_`{|}~) in your password?" + "\n" + "Select Okay to include Symbols.");
    if (includeSymbols == true) {
      randomFunction.symbol
    }

}




const randomFunction = {
  capital: getRandomCapital,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}


function getRandomCapital() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = " !$%&'()*+,-./:;<=>?@[^/]_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generatePassword();


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
