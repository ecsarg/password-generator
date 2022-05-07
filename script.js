// generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// variables for arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B' ,'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '!', '#', '$', '^', '&', '*', '(', ')', '-', '_', '`', '~'];

var pwLength = pwLength;
var confirmLowerCase = lowerCase;
var confirmUpperCase = upperCase;
var confirmNumbers = numbers;
var confirmSpecial = special;

// generatePassword function begins
function generatePassword () {
  var possibleChoices = [];
  var password = "";

// prompts begin
  var pwLength = prompt("Please choose a password between 8 and 128 characters.");
  if (pwLength < 8 || pwLength > 128 || pwLength === null || isNaN(pwLength)) {
    var pwLength = prompt(
      "Please choose a password between 8 and 128 characters."
    );
    return generatePassword();
  }
  
  // confirm variables with code to process arrays to possibleChoices var
  else {
    if (confirm("Click OK if you would like to include lowercase letters.")) {
      Array.prototype.push.apply(possibleChoices, lowerCase);
    }
    if (confirm("Click OK if you would like to include uppercase letters.")) {
      Array.prototype.push.apply(possibleChoices, upperCase);
    }
    if (confirm("Click OK if you would like to include numbers.")) {
      Array.prototype.push.apply(possibleChoices, numbers);
    }
    if (confirm("Click OK if you would like to include special characters.")) {
      Array.prototype.push.apply(possibleChoices, special);
    }
    if (possibleChoices.length === 0) {
      alert("You must select at least one character type for your password.");
      return generatePassword();
    }

    // use randomizer to create password
    else {
      for (var i = 0; i < pwLength; i++) {
        var randomPassword = Math.floor(Math.random() * possibleChoices.length);
        password += possibleChoices[randomPassword];
      }
    }
  }
 
  // paste created password into HTML
  var passwordText = document.querySelector("#password");
  passwordText.value = password
};

function writePassword() {
  var password = generatePassword();
};