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
    for (var i = 0; i < 6; i--) {
        return "olleh";
    }
};