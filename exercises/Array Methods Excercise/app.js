/*
Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it.
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log(vegetables[3]);
// console.log(fruit[0]);
// console.log(fruit.indexOf('orange'));

function addNumber(fruitName){
    number = fruit.indexOf(fruitName);
    fruit.push(number);
}
addNumber("orange");
// console.log(fruit);

//console.log(vegetables.length);

function addnumber(){
    number = vegetables.indexOf(vegetablesName);
    vegetables.push(number);
}
vegetables.push(vegetables.length);
console.log(vegetables);