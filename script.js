//special characters for the password
var specialChar = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// numeric characters for the password
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// lowercase characters for password
var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//var criteria = [0,0,0,0,0];
// Global array to for variables
var lengthOfPassword = 0;
var lowerCase = 0;
var upperCase = 0;
var numeric = 0;
var specialCharacters = 0;
var eachCharacter = ""; // string to store neccessary values
var allCharacters = ""; // string to store values up to lengthOfPassword

// Get all the nessecary criteria from the user
function getCriteria() {
  lengthOfPassword = parseInt(
    prompt(
      "The length of the password you want it should be between 8 and 128 characters"
    )
  );

  // check if user inputs correct value and if they dont ask for the correct value
  while (
    lengthOfPassword < 8 ||
    lengthOfPassword > 128 ||
    isNaN(lengthOfPassword) === true
  ) {
    if (lengthOfPassword < 8) {
      lengthOfPassword = prompt(
        "The password is less than 8 character enter a new value"
      );
    } else if (lengthOfPassword > 128) {
      lengthOfPassword = prompt(
        "The password is greather than 128 character enter a new value"
      );
    } else if (isNaN(lengthOfPassword) === true) {
      lengthOfPassword = prompt(
        "The password is not a number enter a new value"
      );
    }
  }

  // if they want lower case characters
  lowerCase = confirm("Do you want lower case letters");

  // if they want upper case characters
  upperCase = confirm("Do you want upper case letters");

  // if they want numeric  characters
  numeric = confirm("Do you want numeric letters");

  // if they want special characters
  specialCharacters = confirm("Do you want special letters");

  //console.log(lengthOfPassword);
  //console.log(lowerCase);
  //console.log(upperCase);
  //console.log(numeric);
  //console.log(specialCharacters);
}

// get each character at random
function getvalues(charValue) {
  //check for lowercase
  if (lowerCase) {
    charValue +=
      lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
  }

  //check for uppercase
  if (upperCase) {
    charValue +=
      upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
  }

  //check for numeric
  if (numeric) {
    charValue += numericChar[Math.floor(Math.random() * numericChar.length)];
  }

  //check for special characters
  if (specialCharacters) {
    charValue += specialChar[Math.floor(Math.random() * specialChar.length)];
  }

  return charValue;
}

// get the password to be used for the client
function generatePassword() {
  // get the criteria from the user
  getCriteria();

  //get at least on character of each type
  eachCharacter = getvalues(eachCharacter);

  //get all the characters needed for the password , all the characters are equal to lengthOfPassword from user
  while (allCharacters.length < lengthOfPassword) {
    allCharacters = getvalues(allCharacters);
  }

  // insert necessary characters into all the characters string at random
  for (var i = 0; i < eachCharacter.length; i++) {
    var val = Math.floor(Math.random() * allCharacters.length);

    allCharacters[val] = eachCharacter[i];
  }

  return allCharacters;
}

//console.log(allCharacters);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
