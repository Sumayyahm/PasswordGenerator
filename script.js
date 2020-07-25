// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function to Generate Password
function generatePassword() {

  //Input from user for number of password characters
  var numofChars = prompt("How many characters should the password have? Please choose a number between 8 and 128");
  if ((numofChars >= 8)&&(numofChars <= 128))
  {
    var a = confirm("Do you want numbers in your password?");
    var b = confirm("Do you want Upper case letters in your password?");
    var c = confirm("Do you want Lower case letters in your password?");
    var d = confirm("Do you want special characters in your password?");

    if ((a === true)&&(b === true)&&(c === true)&&(d === true)) {

    var lcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var ucase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var nums = [1,2,3,4,5,6,7,8,9,0];
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '*'];
     (for i=0; i<= numofChars; i++)

    }
    else { if ((a === true)&&(b !== true)&&(c !== true)&&(d !== true))
      {
        return Math.floor(Math.random * numofChars);
      }
      else {
        if ((a === true)&&(b === true)&&(c !== true)&&(d !== true))
        {

        }
    
      }
    }
    




  }
  else {
    alert("Thats an invalid input!") 
  }


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
