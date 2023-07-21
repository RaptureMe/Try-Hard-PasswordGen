// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomPassword = "";


function generatePassword() {
  // I need a series of prompts for password criteria
  // -- I need a prompt to ask the user how many characters is the password, 8-128 characters --
  // I need a prompt to ask if user wants to include/or not lowercase, uppercase, numeric, and/or special characters
  var passLength = prompt ("How many characters do you want your password to be between 8-128 characters");

  if (passLength < 8 || passLength > 128) {
    window.alert("Whoops, not 8-128 characters")
    generatePassword()
  }

  var lowerCase = confirm ("Do you want lowercase in your password?");
  var upperCase = confirm ("Do you want uppercase in your password?");
  var Numbers = confirm ("Do you want numbers in your password?");
  var SpecialChar = confirm ("Do you want special characters in your password?");

  if (lowerCase == true) {
    randomPassword += "abcdefghijklmnopqrstuvwxyz"
  }

  if (upperCase == true) {
    randomPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (Numbers == true) {
    randomPassword += "1234567890"
  }

  if (SpecialChar == true) {
    randomPassword += "~!@#$%^&*()_+-=`{}|[]:';'/?"
  }

  console.log(randomPassword)

  function Randomizer(length, charset) {
    var result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }

  var result = Randomizer (passLength,randomPassword)
  
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
-THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
- THEN I select which criteria to include in the password

WHEN prompted for the length of the password
-THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
-THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
-THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
-THEN a password is generated that matches the selected criteria

WHEN the password is generated
-THEN the password is either displayed in an alert or written to the page */