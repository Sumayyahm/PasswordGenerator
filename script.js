  // Assignment Code
 var generateBtn = document.querySelector("#generate");
  
  //Declaring arrays of different characters
  var lcase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var ucase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var nums = ['1', '2','3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '='];
 

 //Function to Generate random characters from a given array
  function generateRandomChar(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomChar = array[randomIndex].charAt();
    return randomChar;
  }

  //Condition1: Function to generate password for a mix of all 4 types of chars
  function conditionOne(i) { 
    var x = i/4;
    var y = i%4;
    var m;
    var tempPass = " ";
    //getting random lowercase letters
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(lcase);}
    //generating random upperrcase letters
    for(m = 1; m <= x; m++) {tempPass += generateRandomChar(ucase);}
    //generating random numbers
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(nums);}
    //generating random special characters
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(specialChars);}
    //getting random lowercase letters
    for (m = 0; m < y; m++) {tempPass += generateRandomChar(lcase);}
    return tempPass;}

  //Condition2 :Function to generate password for any 3 character types
  function conditionTwo(i,arr1,arr2,arr3) {
    var x = i/3;
    var y = i%3;
    var m;
    var tempPass = " ";
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(arr1);}
    for(m = 1; m <= x; m++) {tempPass += generateRandomChar(arr2);}
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(arr3);}
    for (m = 0; m < y; m++) {tempPass += generateRandomChar(arr1);}
    return tempPass;}

    //Condition3 :Function to generate password for any 2 character types
  function conditionThree(i,arr1,arr2) {
    var x = i/2;
    var y = i%2;
    var m;
    var tempPass = " ";
    for (m = 1; m <= x; m++) {tempPass += generateRandomChar(arr1);}
    for(m = 1; m <= x; m++){tempPass += generateRandomChar(arr2);}
    for (m = 0; m < y; m++) {tempPass += generateRandomChar(arr1);}
    return tempPass;}
    
    //Condition4 : Function to generate password for just one character type 
  function conditionFour(i,arr) {
    var tempPass = " ";
    for(var m = 0; m < i; m++){ tempPass += generateRandomChar(arr);}
    return tempPass;}

   //Function to Generate Final Password
   function generatePassword() {
    //Input from user for number of password characters
    var numofChars = prompt("How many characters should the password have? Please choose a number between 8 and 128");
     if ((numofChars >= 8)&&(numofChars <= 128))
      {
        var a = confirm("Do you want Lower Case letters in your password?");
        var b = confirm("Do you want Upper case letters in your password?");
        var c = confirm("Do you want Numbers in your password?");
        var d = confirm("Do you want special characters in your password?");
    
       if ((a === true)&&(b === true)&&(c === true)&&(d === true))    // Condition 1
       {return conditionOne(numofChars) ;} 
       else 
        if ((a === true)&&(b === true)&&(c == true)&&(d !== true))     // Condition 2 using 3 char types
          { return conditionTwo(numofChars, lcase, ucase, nums);}
        else 
          if ((a === true)&&(b === true)&&(c !== true)&&(d === true))      // Condition 2  using 3 char types
          { return conditionTwo(numofChars, lcase, ucase, specialChars);}
          else
           if ((a === true)&&(b !== true)&&(c === true)&&(d === true))       // Condition 2  using 3 char types
            { return conditionTwo(numofChars, lcase, nums, specialChars);}
           else
            if ((a !== true)&&(b === true)&&(c === true)&&(d === true))        // Condition 2  using 3 char types
            { return conditionTwo(numofChars, ucase, nums, specialChars);}
            else
             if ((a !== true)&&(b !== true)&&(c === true)&&(d === true))       //Condition 3  using 2 char types
              { return conditionThree(numofChars, nums, specialChars); }
             else
              if ((a === true)&&(b === true)&&(c !== true)&&(d !== true))      //Condition 3 using 2 char types
              { return conditionThree(numofChars, lcase, ucase); }
              else
               if ((a !== true)&&(b === true)&&(c !== true)&&(d === true))       //Condition 3 using 2 char types
               { return conditionThree(numofChars, ucase, specialChars); }
               else
                if ((a === true)&&(b !== true)&&(c === true)&&(d !== true))     //Condition 3 using 2 char types
                 { return conditionThree(numofChars, lcase, nums); }
                else
                 if ((a === true)&&(b !== true)&&(c !== true)&&(d === true))        //Condition 3 using 2 char types
                  { return conditionThree(numofChars, lcase, specialChars); }
                  else
                   if ((a !== true)&&(b === true)&&(c === true)&&(d !== true))       //Condition 3 using 2 char types
                    { return conditionThree(numofChars, ucase,nums); }
                    else
                     if ((a !== true)&&(b !== true)&&(c === true)&&(d !== true))       //Condition 4 using 1 char type
                      { return conditionFour(numofChars, nums); }
                      else
                      if ((a === true)&&(b !== true)&&(c !== true)&&(d !== true))       //Condition 4 using 1 char type
                       { return conditionFour(numofChars, lcase); }
                       else
                       if ((a !== true)&&(b === true)&&(c !== true)&&(d !== true))       //Condition 4 using 1 char type
                        { return conditionFour(numofChars, ucase); }
                        else
                        if ((a !== true)&&(b !== true)&&(c !== true)&&(d === true))       //Condition 4 using 1 char type
                         { return conditionFour(numofChars, specialChars); }
                        else 
                        //If none of the char types are selected
                        { alert("Please choose atleast one character type!")}
      }
    else
    //If numofChars in Password is <8 or >128
    alert("Invalid Input!")
  }
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
