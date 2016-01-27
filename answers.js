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

