const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
firstslice=str.slice(0,3);
secondslice=str.slice(3,10);
newStr= secondslice + firstslice ;
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Did you know that  ${str} in pseudo pig latin is ${newStr}?`) 

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let UserQuestion= ("How many numbers do you want to relocate?")
let UserAnswer= ("");


UserAnswer= input.question("How many numbers do you want to relocate?");

firstslice=str.slice(0,UserAnswer);
secondslice=str.slice(UserAnswer,10);
newStr= secondslice + firstslice ;


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(UserAnswer>=9){UserAnswer=3 
    firstslice=str.slice(0,UserAnswer);
    secondslice=str.slice(UserAnswer,10);
    newStr= secondslice + firstslice ;
    console.log(`Did you know that  ${str} in pseudo pig latin is ${newStr}? Your answer was too many characters so we made it 3`)}
else console.log(`Did you know that  ${str} in pseudo pig latin is ${newStr}?`);
