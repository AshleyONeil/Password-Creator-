// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How long do you want the password to be? Password must be 8 to 128 charcters")
console.log(length)
if (length === ""){
  alert ("must enter a password length")
return "please try again"
}
if (length <8 || length >128){
  alert("length must be between 8 to 128")
  return "please try again"
}
var characters = ""
if (confirm ("would you like lower case letters")) {
  characters = characters.concat ("abcdefghijklmnopqrstuvwxyz")
}
if (confirm ("would you like upper case letters")) {
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if (confirm ("would you like numbers")) {
  characters += "0123456789"
}
if (confirm ("would you like special characters")) {
  characters += "!@#$%&*?"
}
if (characters.length === 0){
  alert ("must select atleast one character type")
}
var characterArr = characters.split ("")
console.log (characterArr)
var password = ""
for(var i = 0; i < length; i++){
  var index = Math.floor(Math.random ()* characterArr.length)
  var digit = characterArr[index]
  password += digit 
}
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
