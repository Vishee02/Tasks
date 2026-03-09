let Y=(5+10)*2;
console.log(Y);

// Exspression is a combination of values and operators that produces a value.

// Statement is a complete line of code that performs an action.
// It can be a declaration, assignment, or a function call.


let skills = ["JS","HTML"];
console.log(typeof skills);


// Null vs Undefined

// Null is an assignment value that represents no value or no object. It is explicitly set by the programmer to indicate that a variable has no value.

// Undefined is a primitive value that indicates that a variable has not been assigned a value. It is the default value of uninitialized variables and function parameters that have not been provided with an argument.

let a=12;
a+=5;
console.log(a);
let b = 10, c = 20, d = 40, e = 15;
b -=3 ;
console.log(b);
c*=2;
console.log(c);
d/=4;
console.log(d);
e%=3;
console.log(e);

//----------COMPARISON OPERATORS---------

// == and ===

// == is the equality operator that compares two values for equality after performing type coercion if necessary. It checks if the values are equal, regardless of their types.

// === is the strict equality operator that compares two values for equality without performing type coercion. It checks if the values are equal and of the same type.

let x = 5;
let y = "5";
console.log(x == y); // true, because of type coercion
console.log(x === y); // false, because they are of different types

// != and !==

// != is the inequality operator that compares two values for inequality after performing type coercion if necessary. It checks if the values are not equal, regardless of their types.

// !== is the strict inequality operator that compares two values for inequality without performing type coercion. It checks if the values are not equal or of different types.

let m = 10;
let n = "10";
console.log(m != n); // false, because of type coercion
console.log(m !== n); // true, because they are of different types

// >, <, >=, <=

//----------LOGICAL OPERATORS---------

// && (AND) operator returns true if both operands are true, otherwise it returns false.
        // true && true = true
        // true && false = false
        // false && true = false
        // false && false = false

// || (OR) operator returns true if at least one of the operands is true, otherwise it returns false.
        // true || true = true
        // true || false = true
        // false || true = true
        // false || false = false

// ! (NOT) operator returns true if the operand is false, and false if the operand is true.

let p = 5;
let q = 10;
console.log(p > 3 && q < 15);
console.log(p > 3 || q < 5);
console.log(!(p > 3));

//----------TERNARY OPERATOR---------

// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is: condition ? expressionIfTrue : expressionIfFalse.
        // CONDITION ? EXPRESSION_IF_TRUE(doThis) : EXPRESSION_IF_FALSE(doThat)
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

//----------TYPE CHECKING OPERATORS---------

// typeof-- The typeof operator returns a string indicating the type of the operand. It can be used to check the type of a variable or an expression.
let str = "Hello";
console.log(typeof str); // "string"

// instanceof-- The instanceof operator checks if an object is an instance of a specific class or constructor function. It returns true if the object is an instance of the specified class, and false otherwise.
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true, because arrays are also objects

//----------STRING OPERTAORS---------

// + operator can be used to concatenate strings.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

//----------NULLISH COASLESCING OPERATORS---------

// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is used to provide a default value for null or undefined variables.

let username = null;
let defaultUsername = "Guest";
let displayName = username ?? defaultUsername;
console.log(displayName); // "Guest"

//----------OPTIONAL CHAINING OPERATOR---------

// The optional chaining operator (?.) is a syntax that allows you to access properties of an object without having to check if the object is null or undefined. It returns undefined if the object is null or undefined, instead of throwing an error.

let user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};
console.log(user.address?.city); // "New York"
console.log(user.contact?.email); // undefined, instead of throwing an error

//----------VARIABLE HOSTING IN JS---------

// Variable hoisting is a behavior in JavaScript where variable declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable before it is declared, and it will not throw an error. However, only the declaration is hoisted, not the initialization.
// hosting la matalb hai ki variable ko banane se pahle bhi use kiya ja sakta hai
// hosting me aapka variable toot jaata hai do hisso mein
// intialization wahi rahta hai jahan variable tha
//ab aapka variable errorb nahi deta kyuki wohumesha use hone se pahle exist kar raha tha

console.log(myVar); // undefined, because of hoisting
var myVar = 10;
console.log(myVar); // 10