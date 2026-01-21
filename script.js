let value = 5;
let description = "";
if (value % 2 === 0){
  description = "even";
}else{
  description = "odd";
}

let sign = "";
if (value > 0){
  sign = "positive";
}else if (value < 0){
  sign = "negative";
}else{
  sign = "zero";
}
let finalDescription = `The number is ${description} and ${sign}.`;
console.log(finalDescription);


//Stage 2: String Analyser

let word = "cheetah";
let lengthOfWord = word.length;
let wordDescription = "";
if (lengthOfWord > 10){
  wordDescription = "long";
}else if(lengthOfWord > 5){
  wordDescription = "medium";
}else{
  wordDescription = "short";
}
let wordStatement = `The ${word} is ${lengthOfWord} characters long and is considered a ${wordDescription} word.`;
console.log(wordStatement);


//Stage 3: Math Logic
let num = 50;
let squareNum = num * num;
let rootNum = Math.sqrt(num);
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`The square of ${num} is ${squareNum}.`);
console.log(`The square root of ${num} is ${rootNum}.`);
console.log(`A random number between 1 and 100 is ${randomNum}.`);


//Stage 4: Boolean Logic
let age = 50;
let income = 60000;
if (age >= 18 && income >= 50000){
  console.log("Eligible for loan");
}else{
  console.log("Not eligible for loan");
}
