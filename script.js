var upperCaseArray = [
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
var lowerCaseArray = [
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

var numericCharsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialCharsArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // get passowrd length
  var passwordLength = 0;
  do {
    passwordLength = prompt(
      "How many characters long would you like your password? (8-128)"
    );
    if (!(passwordLength >= 8 && passwordLength <= 128)) {
      alert("Password must be between 8 to 128 characters long");
    }
  } while (!(passwordLength >= 8 && passwordLength <= 128));

  // check for passowrd criteria
  var upperCase = prompt(
    "Do you want to include uppercase letters? Yes or No"
  ).toLowerCase();
  var lowerCase = prompt(
    "Do you want to include lowercase letters? Yes or No"
  ).toLowerCase();
  var numericChars = prompt(
    "Do you want to include numeric characters? Yes or No"
  ).toLowerCase();
  var specialChars = prompt(
    "Do you want to include special characters? Yes or No"
  ).toLowerCase();

  // validate passowrd criteria
  if (
    upperCase === "no" &&
    lowerCase === "no" &&
    numericChars === "no" &&
    specialChars === "no"
  ) {
    alert("You must include at least one criteria");
  }

  // generate
  var password = [];
  var i = 0;
  while (i < passwordLength) {
    if (upperCase === "yes" && i < passwordLength) {
      var random = Math.floor(Math.random() * upperCaseArray.length);
      password[i] = upperCaseArray[random];
      i++;
    }

    if (lowerCase === "yes" && i < passwordLength) {
      var random = Math.floor(Math.random() * lowerCaseArray.length);
      password[i] = lowerCaseArray[random];
      i++;
    }

    if (numericChars === "yes" && i < passwordLength) {
      var random = Math.floor(Math.random() * numericCharsArray.length);
      password[i] = numericCharsArray[random];
      i++;
    }

    if (specialChars === "yes" && i < passwordLength) {
      var random = Math.floor(Math.random() * specialCharsArray.length);
      password[i] = specialCharsArray[random];
      i++;
    }
  }

  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
