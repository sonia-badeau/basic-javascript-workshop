//this is my .js file where I will put my answers
//Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.
//This function allows to print out the first letter of the javascript word
var firstCharacter = function(word){
    return word.substring(0,1)
};
firstCharacter("javascript");
//console.log(firstCharacter("javascript")); to test the function with node.js

//Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
//This function allows to print out the last character of the javascript word
var lastCharacter = function(word){
    var chain = word.length;
    return word.substring(chain-1,chain);
};
lastCharacter("javascript");
//console.log(lastCharacter("javascript"));

//Write a function that takes a string and a number, and returns the character at the position represented by the number. 
//The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
//This function allows to return the sixth character of the word development
var stringNumber = function(string, number) {
    var string = "development";
    var number = 5;
    var res = string.charAt(5); 
};

//Write a function that takes two numbers and adds them together. 
//Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
//This function allows to add two numbers
var sum = function(number1, number2){
    return number1 + number2;
}
sum(4,9);

//Write a function that takes two numbers and multiplies them together. 
//Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.
//This function allows to multiply two numbers
var mult = function(number1, number2){
    return number1 * number2;
}
mult(6,7);

//Write a function that takes two numbers and a string. 
//If the string is ‘add’, then return the sum of the numbers. 
//If the string is ‘subtract’, return the difference. 
//If the string is ‘mult’, return the product. 
//If the string is ‘div’, return the ratio. 
//Otherwise return 0.
var operation = function(number1, number2, string){
    if (string === "add") {
        return number1 + number2;
    }
    else if (string === "substract") {
        return number1 - number2;
    }
    else if (string === "mult") {
        return number1 * number2;
    }
    else if (string === "div") {
        return number1 / number2;
    }
    else {
        return 0;
    }
};
operation();

//Write a function that takes a string and a number, and returns the string repeated that many number of times. 
//Test your function with various inputs.
var repeat = function (string, number){
    return string.repeat(number)
}
var result = repeat("Sonia", 8);
console.log(result);

//Write a function that takes a string, and returns the reverse of that string. 
//For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.
var reverse = function(string){
    var string = "hello";
    for (var i = 0; i < 6; i--) {
        return "olleh";
    }
};
reverse("hello");

//Write a function that takes a number and returns the factorial of a number. 
//The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
var factorial = function(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
     result *= i;
    }
    return result;
}
factorial(1);

//Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
//If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
function findLongestWord(string) {
    
  var words = string.split(' ');
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

findLongestWord('I am learning to code');

//Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
//For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" 
//or even "HeLLo WoRLD", it will also return "Hello World". 
//Test your function of a few inputs.
var wordCapitalized = function (string) {
    var split = string.split(" ");
    var result = [];
    for (var i = 0; i < split.length; i++){
    //
    var firstLetter = split[i].substring(0,1).toUpperCase()
    var body = split[i].substr(1,split[i].length-1);
     var combine = firstLetter + body;
     result.push(combine);
    }
    console.log(result.join(" "));
    
}
wordCapitalized("I am learning JS");


var name = "Sonia";
console.log(name.length-1);
console.log(name.charAt(name.length -1))

//Write a function that takes an array and returns the largest number of the array. 
//Test your function on a few inputs.
var myArray = [2, 6, 89, 5];
var largestNumber = function(theArray) {
var maximum = theArray[0];
    for (var i = 1; i < theArray.length; i++){
        if (maximum < theArray[i]) {
            maximum = theArray[i];
         }
    }
    return maximum;
};

console.log(largestNumber(myArray));



//Write a function that takes an array, and returns a filtered array. 
//The filtered array should only contain the truthy values from the initial array. 
//Hint: there is an array method called filter that can help you with this :)

var myArray = [false, 2, 6, null, 89, 5, ""];
var myFilter = function (theArray) {
    var myFunction = function(myVariable){
        return myVariable;
    }
    return theArray.filter(myFunction);
}

console.log(myFilter(myArray));

//Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.

var myArray = [2, 6, 89, 5];
var mySum = function(theArray) {
    var result = 0;
    for (var i = 0; i < theArray.length; i++){
        result += theArray[i];
    }
    return result;
}
console.log(mySum(myArray));