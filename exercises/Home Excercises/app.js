
// Assigning Veriables
let a = 3;
let b = 7;
let c = a + b;
console.log('answer:' + c);

// Best practice,is Assigning a identifier Veriable Names, 
//when aissigning a veriable has to be very descriptive,
// has to begin with a letter, $ dollarsign, or underscore_ etc,
// camel-casing first letter capital letter so on example
// the operator(let, var ,etc) and operand (name, number, etc)

let myName = 1;
let $ = 2;
let _ = 3;

//data type: the veriable doesn't hold data, the vaule 
//stores data inside of the veriables thats holding the data type

let x = 7;                    //number
console.log(typeof x);
let y = false;                //boolean true or false
console.log(typeof y);
let z = 'hello, world'        //string single quotes
console.log(typeof z);
let a;
console.log(a);
console.log(typeof a);       // undefined 

//Coercion & Conversion // using datatype together

let a = 7;
let b = "6";                //adding number with string
let c = a + b;                     
console.log('answer:' + c);         // answer: 76

// parseInt to go in the inside of the string to turn a string into a number: radix

let a = 7;
let b = "6";
b = parseInt(b, 10);          // implementing parseInt will turn a string into a number         
let c = a + b;                     
console.log('answer:' + c);            // answer: 13

// Expression & Operators
//three expression in here...
// 1. let a veriable declaration
// 2. perform an eval b + c
// 3. result asigned to a
let a = b + c; 

/* 
 () parentheses function invacation operator
 . member accessor operator
 +Addition
 -Subtraction
 * Multiplication
** Exponentiation (returning the number to the power of number) 
 / Division
 % Modulus (Division Remainder)
 ++ Increment add 1
 -- Decrement sub 1
/* 
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
/*
&&	logical and // is two true statement
||	logical or // a true and a false statement
!	logical not