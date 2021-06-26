// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let a = "10,000"
let b = "12abc95"
let c = "115.12"

parseInt(a) + 500;
//console.log (a + 500) will show as 10000500 because you are uniting a string with a number.
parseInt(b); 
//Will only show the 12 because it will stop when the number stops and will not recognize the letters nor the numbers after them. 
parseInt(c);
//Will only show 115 because it will not recognize the dot nor any numbers after
parseFloat(a);
//Will recognize the dot and the numbers after.
parseFloat(a.replace(/,/g, '')) + 523;
//replace function will remove/replace punctuation
// /,/ = target.
//g = global, will target all the specified symbols in this case the comma.  
// ' ' = replacement, in this case an empty space.

// Write a JavaScript program to convert a string to the number.
const x = "16";
const y = "16";
const z = "17";

console.log(typeof x.toString(), x);
console.log(typeof x)

// Write a JavaScript program that takes in different data types and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  let checkData = (txtSearch) => {
    const checker = document.getElementById('btnSearch')
    alert(typeof checker)
    console.log(checker)
  }

// Write a JavaScript program that adds 2 numbers together.
const addTowNumbers = (num1, num2) => {
    const sum = num1 + num2;

    return sum + " sweat!!!!!!!!!";
}

//addTowNumbers(2, 5);
let answer = addTowNumbers(2, 5);

console.log(answer);


// Write a JavaScript program that runs only when 2 things are true.

let checkTruth = () => {
  let chuyIsSmart = true
  let JesusIsBrown = true
  if (chuyIsSmart && JesusIsBrown)
  return "hell yea!";
}

let truth = checkTruth();
console.log(truth);

// Write a JavaScript program that runs when 1 of 2 things are true.

let checkLies = () => {
  let chuyIsSmart = true;
  let JesusIsWhite = false;
  if (chuyIsSmart || JesusIsWhite)
  return "Lies!!!";
}

let Lies = checkLies();
console.log(Lies);

// Write a JavaScript program that runs when both things are not true.  

let checkSurprise = () => {
  let chuyIsSmart = false;
  let JesusIsBrown = false;
  if (chuyIsSmart || JesusIsBrown)
  return "I knew it all along"
  else {return "OH WOWWW!!!!"}
} 

let surprised = checkSurprise();
console.log(surprised);

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24


