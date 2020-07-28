# PasswordGenerator
In this homework, I have made changes in the JS file as follows
1. Declared 4 arrays of different characters each (Lower case, Uppercase, Numbers and special chars)
2. Defined a Function called generateRandomChar, that requires an array as a input and goes on to generate a random character from that array(using Math.random(), Math.floor() and charAt() functions)
3. Defined the generatePassword function,
   a.  that takes a input from the user for the number of characters required in the password(using prompt function)
   b.  checks if the number of characters are >= 8 and <= 128 (using if-else)
   c. If the above condition is false, gives an Invalid Input alert
   d. If the above condition is true, goes on to check if the user wants lower case, upper case, numbers and special characters in the password 
   e. If the user choose all 4 types of characters, goes to function conditionOne that generates a password using all the 4 types of characters(all 4 arrays)
   f. If user chooses any 3 types of characters, goes to function conditionTwo that generates a password using the 3 character types selected.
   g. If user chooses any 2 types of characters, goes to function conditionThree that generates a password using the 2 character types selected.  
   h. If the user chooses just 1 type of character in the password, goes to function conditionFour that generates a password using the selected char type.
   NOTE- Steps 'e' through 'h' are executed using a series of if-else statements 
   i. If the user doesn't select any of the char types, gives a alert to select atleast one char type.
   
   URL of the deployed website:  https://sumayyahm.github.io/PasswordGenerator/
   
   ![image](https://user-images.githubusercontent.com/66535567/88705581-57ed4380-d0d5-11ea-8804-5babf1f8cc25.png)
   ScreenShot 
   
   
   
   
   
   
