let customer = {
    name: "Mertcan",
    email: "mertcan.filik@bil.omu.edu.tr",
    age: 22,
    languages: ["Turkish", "English", "Japanese", "Korean"],

    welcome: function(){ // prints "Welcome to Objects in Java Script!" on console 
        console.log("Welcome to Objects in Java Script!");                          
    },
    goodbye(){ // prints "Hope to see you soon!" on console
        console.log("Hope to see you soon!");
    },
    languagePrint(){ // prints languages on console
        console.log(`Customer: ${this.name} knows these languages:`)
        this.languages.forEach(lang =>{
            console.log(lang);
        })
    }
}

// Array of objects
const car = [
    {numOfWheels:4, type:"Sport" },
    {numOfWheels:6, type:"Truck" }
];

// random() function using Math object
let rand = Math.random();  //random() function generates numbers between 0 and 1;
rand = Math.round(rand*1000); // Rounds the number 

/* Ways of changing values of variables in an object

customer["name"]=["Mert"];

temp = "age";
customer[temp]="23"; */

console.log(customer);
console.log(customer.email);
console.log(car[0]);
console.log(car[1]);
console.log(rand);

customer.welcome();
customer.goodbye();
customer.languagePrint();