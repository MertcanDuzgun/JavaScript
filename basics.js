//Ways of defining variables. Can also use var. null = defined variable that has no value 
let num = 50;
const num1 = 200;

//Strings
let name = 'Mertcan';
let surname = 'Filik';
let fullname = name + ' ' + surname;
let index = fullname.indexOf('t'); 
let fullnameLength = fullname.length - 1;
console.log(fullname);
console.log(fullname.length);
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
console.log(index);

//String Methods
let email = 'mertcan.filik@bil.omu.edu.tr';
let emailLastIndex = email.lastIndexOf('e'); // Finds the last 'e's index
let emailSlice = email.slice(1,7); // results in a slice that is defined in the parenthesis, eg. from 1st to 7th of email
let emailSubstring = email.substr(2,14); // results in a substring, eg. starts from 2nd character and includes 14 characters starting from 2nd
let emailReplace = email.replace('@','#'); // replaces first @ with #
let sentence = `My name is ${fullname} and my email is ${email}`; // temporary string, can put variables in ${} and their values will be added to the variable
console.log(sentence);

// Arrays
let names = ['JRR Tolkien', 'Stephen King', 'George Orwell']; // Defining array
names[1]= 'Edgar Allen Poe'; // Overriding value of names[1] that was defined before
let namesJoined = names.join('-*'); // joins elements of array with what is stated in parenthesis
console.log(names[1], namesJoined);
let arraysJoined = names.concat(['Agatha Christie', 'William Shakespeare']); // joins arrays together

// Type Conversion
let  result = '78';
result = Number(result);
console.log(typeof result);
result = String(result);
console.log(typeof result);

// for Loops
for(let i =0; i<names.length; i++){
    console.log(names[i]);
}

// while Loops
let j= 0;
while(j<names.length){
    console.log(names[j]);
    j++;
}

// if Statements    note: Only one statement will run. 
// Logical operators OR: || , AND: &&, NOT : ! 

if(names.length>0){
    console.log("True");
}else if(names.length>1){ 
    console.log("Very True")
}else{
    console.log("False");
}

// break and continue
const testResults = ["AA", "BB", "BA", "CC", "FF","CB"];

for(let i=0; i<testResults.length;i++){

    if(testResults[i] =="CC"){ 
        continue; // skips rest of the code
    }

    console.log(`Your Results: ${testResults[i]}`);

    if (testResults[i]=="FF"){
        console.log("You have failed to pass this semester");
        break; // breaks the loop
    }
}

// switch case , runs the stated case if the case is not stated then runs default
switch(testResults[3]){
    case "AA":
        console.log("You have passed with a grade of AA.");
        break;
    case "BB":
        console.log("You have passed with a grade of BB.");
        break;
    case "CC":
        console.log("You have passed with a grade of CC.");
        break;
    case "DD":
        console.log("You have failed with a grade of DD.");
        break;
    case "FF":
        console.log("You have failed with a grade of FF.");
        break;
    default:
        console.log("Your result is not registered.");
}

// Functions
function welcome(){
    alert("Welcome to Learning Java Script"); // Pop Up
}

function specificWelcome(customer = "Mertcan"){ // Parameter is predefined so when it is called without using paramters predefined value will be used.
    console.log(`Welcome to Learning Java Script ${customer}`)
}

welcome();
specificWelcome("Mert");
specificWelcome();

// Math Operators : **: power of, %: remainder, NaN: Not a Number
function square(numberToSquare){
    console.log(numberToSquare**2);
    return(numberToSquare**2);  
}

const calculateSquare = (calcSquare) => calcSquare**2;   // returns values after the arrow. Can remove parenthesis if using only one parameter.

const calculateTotal = (items, discount) =>{
    let total = 0;
    for(let i=0; items[i]; i++){
        total += items[i] - items[i]* discount; 
    }
    return total;
};

const num2 = square(12);
const num3 = calculateSquare(15);
console.log(num3);
console.log(calculateTotal([20,50,130,240],0,35));

// Foreach and Callback Function
let numbers =[35, 64, 5, 55, 7, 34];

numbers.forEach(function(number){
    console.log(number);
});

numbers.forEach(square);

// Interacting with html
const ul = document.querySelector('.testResults')

let html = ``;

testResults.forEach(function(printRed){  // testResults defined in 64th line
    html += `<li style="color :red">${printRed}</li>`
});

ul.innerHTML = html;

// Notes: 
//1-Different types can still be euqal if loose comparison(==) is used eg.: 
//let age = 43; -> age == 43 -> true and age == '43' -> true

//2-Different types can't be equal with strict comparison(===) eg:
//let age =57; -> age === 57 -> true and age === '57' -> false
