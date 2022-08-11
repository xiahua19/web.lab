> JavaScript is a programming language that manipulates(操纵) the content of a web page.
# Types
JavaScript has 5 primitive data types:
- Boolean(true, false)
- Number(12, 1.618, -46.7, etc.)
- String("hello", "12", etc.)
- Null
- Undenfined

# Operators
- `+`, `-`, `*`, `/`...
- `===`: triple equals sign
- `!==`: not equals sign

# Syntax
```javascript
const greatestCommonDivisor = (a,b) =>{
    while(b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const x = 50;
const y = 15;
const gcd = greatestCommonDivisor(x,y); // 5
```

# Defining variables
JavaScript convention is to name variables using camelCase.
```javascript
let myBoolean = true;
let myNumber = 12;
let myString = "Hello World";

const answerToLife = 6.148;
```

`null` v.s. `undefined`: undefined means "declared but not yet assigned a value", while null means "no value".
```javascript
let firstName; // currently, firstName is undefined.
firstName = "Albert"; // firstName has now been assigned to a value.
firstName = null; // we can explicitly 
```

# Output
`console.log()` writes to the JavaScript console.

`alert()` generates a pop-up notification with the given content.

# Arrays
For when you want to store a sequence of(ideally similar) items:
```javascript
let pets = ["cat", "dog", "guinea pig", "bird"]; // initialize
console.log(pets[3]); // access
pets[2] = "hamster"; // replace
pets.pop(); // remove from end
pets.push("rabbit"); // add to end
```

# Conditionals
We often want to perform different actions in response to different conditions. For whis, we use the conditional operators `if`, `else` and `else if`.
```javascript
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 16) {
    console.log("Good afternoon!");
} else if (hour < 20) {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}
```

# While Loops
What if we want to repeat an action as long as some condition is satisfied?
```javascript
let z = 1;

while (z < 1000) {
    z = z * 2;
    console.log(z);
}
```
# For...of...
```javascript
const pets = ["cat", "dog", "guinea pig", "bird"];

for(const animal of pets){
    const phrase = "I love my " + animal;
    console.log(phrase);
}
```

# Functions
A function is a compartmentalized block of code which can be given input and asked to perform a set of instructions on that input.
```javascript
const celsiusToFaherheit = tempC =>{
    const tempF = tempC * 1.8 + 32;
    return tempF;
};

console.log(celsiusToFaherheit(10));
```
## Callback Function
In JavaScript, functions can be passed around like any other variable. This means we can give a "callback" function as an argument to another function!
```javascript
const addTwo = x => {
    return x + 2;
};

const modifyArray = (array, callback) => {
    for (let i = 0; i < array.length; ++i) {
        array[i] = callback(array[i]);
    }
};

let myArray = [5, 10, 15, 20];
modifyArray(myArray, addTwo);
```
## Anonymous functions
If your function is simple enough, you can use the following shorthand.
```javascript
const modifyArray = (array, callback) => {
    for (let i = 0; i < array.length; ++i) {
        array[i] = callback(array[i]);
    }
};

let myArray = [5, 10, 15, 20];
modifyArray(myArray, x => x + 2);
```
## Other built-in array functions
If it seems common enough, there's probably a built-in function for it. For arrays, we've seen `push` and `pop`, which mutate the target array in-place. We also have `map` and `filter`, which produce a new array based on some instructions(which is going to be a callback function).
### `map(...)`
Creates a new array by applying the callback function to every element of the starting array.
```javascript
let myArray = [1, 2, 3, 4, 5];
let modifiedArray = myArray.map(x => x * 3);
```
## `filter(...)`
Creates a new array by selecting the elements in the starting array which pass the given "test" (i.e. filtering out the 'bad' elements and keeping the 'good' ones).
```javascript
let values = [3, -6, 2, 0, -9, 4];
let positiveValues = values.filter(x => x > 0);
```
# Objects
A JavaScript object is a collection of `name:value` pairs. We can just treat objects like any other variable, such as map and filiter. But for equality, it doesn't.

```javascript
const myCar = {
    make  : "Ford",
    model : "Mustang",
    year  : 2005,
    color : "red"
}
```
There are two ways to access object properties. If you know the property name, then you can call `myCar.model` or `myCar["color"]` to access it.

Object destructuring(解构) is a shorthand to obtain multiple properties at once.
```javascript
const { make, model } = myCar;
```

Object variables are references, they point to where the data is actually stored. So, `===` checks if the references are equal. Two objects created separately are stored separately, so their references are different! Same goes to arrays, two arrays created sepatately have different references.

One way to copy arrays and objects is to use the spread operator(...) like so:
```javascript
let arr = [1, 2, 3];
let copyArr = [...arr];

let obj = { name: "Bill Gates" };
let copyObj = { ...obj };
```

# Classes
If you want to multiple entities that are guaranteeed to have shared behavior, use classes! Every class has a constructor which tells it how to create a specific instance of that entity.

Classes may also contain methods(functions) which can access and manipulate instance properties.
```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const smallRect = new Rectangle(3, 4);
const bigRect = new Rectangle(15, 11);
console.log(smallRect.width);
console.log(bigRect.height);
```
