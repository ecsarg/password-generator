var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#$%^&*()_-+="

function generatePassword() {
  var length = prompt("Please choose a password between 8 and 128 characters.");
    while (isNaN(length) || length < 8 || length > 128 || length === null) {
      return generatePassword();
    }
    if (length >= 8 || length <= 128) {
      
      var lowerCase = prompt("Would you like to include lowercase letters? Type 'YES' or 'NO'.");
        if (lowerCase === 'YES' || lowerCase === 'yes' || lowerCase === 'NO' || lowerCase === 'no') {
        lowerCase = true;
        }
        else if (lowerCase = "" || lowerCase === null) {
        lowerCase = false;
        }
  
      var upperCase = prompt("Would you like to include uppercase letters? Type 'YES' or 'NO'.");
        if (upperCase === 'YES' || upperCase === 'yes' || upperCase === 'NO' || upperCase === 'no') {
          upperCase = true;
        }
        else if (upperCase = "" || upperCase === null) {
          upperCase = false;
          }

      var numbers = prompt("Would you like to include numbers? Type 'YES' or 'NO'.");
        if (numbers === 'YES' || numbers === 'yes' || numbers === 'NO' || numbers === 'no') {
          numbers = true;
        }
        else if (numbers = "" || numbers === null) {
          numbers = false;
          }

      var characters = prompt("Would you like to include numbers? Type 'YES' or 'NO'.");
        if (characters === 'YES' || characters === 'yes' || characters === 'NO' || characters === 'no') {
          numbers = true;
        }
        else if (characters = "" || characters === null) {
          characters = false;
          }
      }
    if (lowerCase === false && upperCase === false && numbers === false && characters === false) {
        alert("You must select at least one character type.");
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
