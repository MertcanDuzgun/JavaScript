//querySelector and querySelectorAll
const paragraph = document.querySelector('p'); // Selects first 'p' tag
const paragraph1 = document.querySelector('.error'); // Selects first 'error' class
const paragraph2 = document.querySelector('div.error'); // Selects 'div' which has an 'error' class
const paragraphs = document.querySelectorAll('p'); // Selects all 'p' tags
const errorParagraphs = document.querySelectorAll('.error'); // Selects all 'error' classes

console.log(paragraph);
console.log(paragraph1);
console.log(paragraph2);
console.log(paragraphs);
console.log(errorParagraphs);

// Selecting elements by id, class name and tag names
const title = document.getElementById('title');
const errors = document.getElementsByClassName('error');
const pTaggedParagraphs = document.getElementsByTagName('p'); 

console.log(title);
console.log(errors);
console.log(pTaggedParagraphs);

// Getting inner text of elements  
// Note: '.innerText' is only for visible elements on page. Use '.textContent' for getting hidden text as well.
const titleInner= title.innerText;
const paragraphInner = "learning " + paragraph.innerText;

paragraphs.forEach(para => { 
    console.log(para.innerText);  // printing each element of paragraphs on console
    //para.innerText += " addition"; // adding text on each element of parapgrahs
});
console.log(titleInner);
console.log(paragraphInner);

// Getting inner HTML
const carsSelected = document.querySelector(".cars"); // selects cars class
const cars = ['Lamborghini', 'Porsche', 'Ferrari', 'Bugatti'] // creating cars class for adding its elements later on

carsSelected.innerHTML = '<h2> Cars: </h2>'; // Changing inner html of carsSelected

cars.forEach(car => {
    carsSelected.innerHTML += `<p>${car}</p>`; // adds each element of cars to carsSelected
    console.log(car);
})

// Changing attribute 
const link = document.querySelector('a');

link.setAttribute('href', 'https://www.bing.com')
link.innerText = "Link for bing ";

// Changing style 
console.log(title.style.color); // previous color

title.setAttribute('style', 'color: purple'); // changing color
title.style.fontSize = '55px'; // changing attribute in a different way

console.log(title.style.color); // changed color

// Adding classes on an element
paragraph.classList.add("first");  // adding 'first' and 'second' classes on paragraph
paragraph.classList.add("second");

console.log(paragraph.classList);  // checking classList of paragraph, paragraph is on 2nd line of code

paragraph.classList.remove("second"); // removing 'second' class of paragraph

console.log(paragraph.classList); // checking classList of paragraph

// Example for interact.js :
paragraphs.forEach(p => {  
    if(p.textContent.includes('find')){
        p.classList.add("found"); // adding class "found" to each element of paragraphs that has 'find' in it , paragraphs is on 5th line of code
        console.log("Found it.");
        console.log(p.classList);
    }
})