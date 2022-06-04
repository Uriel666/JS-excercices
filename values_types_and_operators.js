/*
##############################################
VALUES , TYPES AND OPERATORS
##############################################
*/


// NUMBERS

// Javascript uses fixed number of bits, 64 of them, to store a single number values
console.log(13);
// Fractional numbers are written by a dot
console.log(9.81);

// For every big or small numbers, you may also use scientific notiation
console.log(2.998e8);


// ARITHMETIC

/*
 When operators appear together without parentheses, the order in which they are applied 
 is determined by the precedence of the operators
*/

console.log(2*8+4);

/*
When multiple operators with the same precende appear next to each other 
they are applied left to right
*/
console.log(2+4-3);

/*
The % symbol is used to represent the remainder operations X%Y 
is the reminder of dividing X by Y
*/
console.log(5%2);

// SPECIAL NUMBERS

/*
    The first two are Infinity and - Infinity.
    NaN stands for Not a Number 
*/
console.log(0/0);

// STRINGS

/*
    They are used to represent text. They are written by enclosing their content in quotes
*/
console.log("Down on the sea");
console.log('Float on the ocean');

/*
    Whenever  a backslash (\) is found inside quoted text, it indicates that the character 
    after it has a special meaning. This is called escaping the character.
*/
console.log("This is the first line \n And this is the second");

/*
    Strings cannot be divided, multiplied  or substracted, but the + 
    operator can be used on them. It does not add, but it concatenates
*/
console.log("con"+"cat"+"e"+"nate");

/*
    Strings written with single or double quotes behave very much the same - the only
    difference is in which thype of quote you need to escape inside of them. Backtick-quoted
    strings, usually called template literals
*/
console.log(`half of 100 is ${100/2}`);

/*
    When you write something inside ${} in a template literal, its result will be computed, converted
    to a string, and included at that position
*/

// UNARY OPERATORS

console.log(typeof 4.5);
console.log(typeof "x")

// BOOLEAN VALUES

//Comparison
console.log(3<2);
console.log(2<3);

/*
    When comparing strings. Javascript goes over the characters from left to right, comparing the Unicodes
    ones by one
*/
console.log("Aardvark"<"Zoroaster");

// Logical Operators

/*
    There are also some operations that can be applied to Boolean vales themselves. Javascript supports three
    logical operators:

    && and
    || or
    ! negation
    ? conditional
*/
console.log(true && false);
console.log(true || false);
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

// EMPTY VALUES

/**
 * There are two special values, writthen null and undefined that are used to denote the absence of a meaningful value
 */

// AUTOMATIC TYPE CONVERSTION

/**
 * When  an operator is applied to the wrong type of value. Javascript will quietly convert that value to the type it needs
 */

console.log(8*null);
console.log("5"-1);
console.log("five" * 1);

/**
 * When you want to test whether a value has a real value instead of null of undefined, you can compare it to null 
 * with the (==) or (!=)
 */

console.log(null == 0);

/**
 * When you do not want any automatic type conversions to happen, there are two additional operator (===) and (!==)
 * I recommend using the three-character comparison operators defensuvely to prevent unexpected type convertions
 */