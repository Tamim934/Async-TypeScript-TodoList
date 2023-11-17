# npm i 
# json-server --watch db.json


# TypeScript
![TypeScript Logo](https://3.bp.blogspot.com/-CkHXZQedW5U/XJ-u83mDMzI/AAAAAAAALR0/_wq-4yDcktkFwfXms3XoZp51VwxoeDEUwCLcBGAs/s1600/typescript-banner1-1.jpg)
## Introduction

TypeScript is a syntactic superset of JavaScript which adds static typing[^1^][1]. It is an open-source pure object-oriented programming language[^2^][3] and is designed for large-scale JavaScript application development[^2^][3]. TypeScript is built on top of JavaScript and introduces syntax enhancements[^3^][4].

## What is TypeScript?
### JavaScript and More

TypeScript adds additional syntax to JavaScript to support 
a tighter integration with your editor. Catch errors early in 
your editor.

### A Result You Can Trust

TypeScript code converts to JavaScript, 
which runs anywhere JavaScript runs: 
In a browser, on Node.js or Deno and in your
apps

### Safety at Scale

TypeScript understands JavaScript
and uses type inference to give you great 
tooling without additional code.


## Why use TypeScript?

JavaScript is a loosely typed language, which can make it difficult to understand what types of data are being passed around[^1^][1]. TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match[^1^][1]. For example, TypeScript will report an error when passing a string into a function that expects a number[^1^][1].

## How to use TypeScript?

A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript[^1^][1]. Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code[^1^][1].


## Features
![TypeScript Logo](https://th.bing.com/th/id/R.f76be02d00fcbe6d4ca9abfa3087ab4a?rik=CjNBLuzNjp0tPA&pid=ImgRaw&r=0)

### Static Typing

One of the main features of TypeScript is static typing. JavaScript is dynamically typed, which means you don't know what type a variable is until runtime. On the other hand, TypeScript is statically typed, so you know what type a variable is as you're writing the code.

![TypeScript and JavaScript comparison]

### Classes and Interfaces

TypeScript introduces the concept of classes and interfaces. A class is a blueprint for creating objects. An interface is a way to define a contract on a function with respect to the arguments and their type.

### Modules

TypeScript supports module-based code organization. Modules are executed within their own scope, not in the global scope.

## Setting Up a TypeScript Project

To set up a TypeScript project, you need to have Node.js and npm installed on your machine. Then, you can install TypeScript globally on your machine by running `npm install -g typescript`.

You can compile TypeScript files using the TypeScript compiler. For example, if you have a TypeScript file named `main.ts`, you can compile it to JavaScript using the command `tsc main.ts`.

![TypeScript code snippet]

## Using Images in TypeScript

When working with images in TypeScript, you might encounter some issues due to the static typing system. For example, if you're trying to import an image file in a TypeScript file, you might get an error because TypeScript doesn't recognize the image file format.


## Types in TypeScript 

![typescript types](https://cdn.educba.com/academy/wp-content/uploads/2019/12/Types-of-TypeScript.png)

## Declaring Variable Types in TypeScript

When writing code in JavaScript, which is a purely dynamic language, you can’t specify the data types of variables. You create the variables and assign them a value, but do not specify a type, as shown in the following:

```
const language = {
  name: "JavaScript"
};

```
In this code block, language is an object that holds a string value for the property name. The value type for language and its properties is not explicitly set, and this could cause confusion later if future developers do not know what kind of value language references.

TypeScript has as a main benefit a strict type system. A statically typed language is one where the type of the variables is known at compilation time. In this section, you will try out the syntax used to specify variable types with TypeScript.

Types are extra information that you write directly in your code. The TypeScript compiler uses this extra information to enforce the correct use of the different values depending on their type.

Imagine working with a dynamic language, such as JavaScript, and using a string variable as if it were a number. When you do not have strict unit testing, the possible bug is only going to appear during runtime. If using the type system available with TypeScript, the compiler would not compile the code, giving an error instead, like this:

```
Output
The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. (2363)
```

declarationKeyword would be something like let, var, or const. This would be followed by the variable name, a colon (:), and the type of that variable.

Any code you write in TypeScript is, in some way, already using the type system, even if you are not specifying any types. Take this code as an example:

```
let language = 'TypeScript';
```

In TypeScript, this has the same meaning as the following:
```
let language: string = 'TypeScript';
```
In the first example, you did not set the type of the language variable to string, but TypeScript inferred the type because you assigned a string value when it was declared. In the second example, you are explicitly setting the type of the language variable to string.

If you used const instead of let, it would be the following:
```
const language = 'TypeScript';
```
In this case, TypeScript would use the string literal TypeScript as the type of your variable, as if you typed it this way:
```
const language: 'TypeScript' = 'TypeScript';
```
TypeScript does this because, when using const, you are not going to assign a new value to the variable after the declaration, as doing this would raise an error.
If you explicitly set the type of a variable then use a different type as its value, the TypeScript Compiler (tsc) or your editor will show the error 2322. Try running the following:
```
const myNumber: number = 'look! this is not a number :)';
```
This will yield the following error:



```
Output
Type 'string' is not assignable to type 'number'. (2322)
```
Now that you’ve tried out setting the type of a variable in TypeScript, the next section will show all the basic types supported by TypeScript.

## Basic Types Used in TypeScript

TypeScript has multiple basic types that are used as building blocks when building more complex types. In the following sections, you are going to examine most of these types. Notice that most variables you are creating throughout this section could have their type omitted because TypeScript would be able to infer them, but you are being explicit about the types for learning purposes.

### String
The type string is used for textual data types, like string literals or template strings.

Try out the following code:

```
const language: string = 'TypeScript';
const message: string = `I'm programming in ${language}!`;

```
In this code block, both language and message are assigned the string type. The template literal is still a string, even though it is determined dynamically.

Since strings are common in JavaScript programming, this is probably one of the types you are going to use most.

### boolean
The type boolean is used to represent true or false.

Try out the code in the following block:

```
const hasErrors: boolean = true;
const isValid: boolean = false;
```

Since hasErrors and isValid were declared as booleans, they can only be assigned the values true and false. Note that truthy and falsy values are not converted into their boolean equivalents and will throw an error if used with these variables.

### number
The type number is used to represent integers and floats, as in the following:
```
const pi: number = 3.14159;
const year: number = 2021;
```
This is another
common type that is used often in JavaScript development, so this declaration will be common in TypeScript.

### bigint

The type bigint is a type that can be used when targeting ES2020. It’s used to represent BigInt, which is a new datatype to store integers bigger than 2^53.

Try the following code:
```
const bigNumber: bigint = 9007199254740993n;

```

If you are working with numbers bigger than 2^53 or with some Math libraries, bigint will be a common type declaration.

### symbol

The symbol type is used to represent the Symbol primitive value. This will create a unique, unnamed value.

Run the following code using the Symbol() constructor function:
```
const mySymbol: symbol = Symbol('unique-symbol-value');
```

The uniqueness of these values can be used to avoid reference collisions. For more on symbols in JavaScript, read the symbol article on Mozilla Developer Network (MDN).

### Arrays
In TypeScript, arrays are typed based on the elements they are expected to have. There are two ways to type an array:

Appending [] to the expected type of the array elements. For example, if you want to type an array that holds multiple number values, you could do it like this:

```
const primeNumbers: number[] = [2, 3, 5, 7, 11];
```
If you assigned a string value to this array, TypeScript would give you an error.

Using the Array<T> Generic, where T is the expected type of the elements in that array. Using the previous example, it would become this:

```
const primeNumbers: Array<number> = [2, 3, 5, 7, 11];
```

Both ways are identical, so pick one and try using only that format to represent arrays. This will keep the codebase consistent, which is often more important than choosing one style over the other.

One important aspect of using variables that hold arrays in TypeScript is that most of the time you will have to type them. Try the following code:

```
const myArray = [];
```
TypeScript is not able to infer the correct type expected by this array. Instead, it uses any[], which means an array of anything. This is not type-safe, and could cause confusion later in your code.

To make your code more robust, it is recommended to be explicit about the types of the array. For example, this would make sure the array has number elements:
```
const myArray: number[] = [];
```
This way, if you try to push an invalid value to the array, TypeScript will yield an error. Try out the following code:
```
const myArray: number[] = [];

myArray.push('some-text');
```
The TypeScript Compiler will show error 2345:

```
Output
Argument of type 'string' is not assignable to parameter of type 'number'. (2345)
```

### Tuples 
Tuples are arrays with a specific number of elements. One common use-case for this is storing 2D coordinates in the format [x, y]. If you are working with React and using Hooks, the result from most Hooks is also a tuple, like const [isValid, setIsValid] = React.useState(false).

To type a tuple, as opposed to when typing an array, you wrap the type of the elements inside a [], separating them with commas. Imagine you are creating a literal array with the types of the elements:
```
const position: [number, number] = [1, 2];
```

If you try to pass less, or more, than the number of elements that the tuple expects, the TypeScript Compiler is going to show the error 2322.

Take the following code, for example:
```
const position: [number, number] = [1, 2, 3];
```
This would yield the following:

```
Output
Type '[number, number, number]' is not assignable to type '[number, number]'.
Source has 3 element(s) but target allows only 2. (2322)
```

### any

In certain situations it may be too hard to specify the types of a value, such as if that value is coming from a third-party library or from code that was initially written without TypeScript. This can be especially common when migrating a JavaScript codebase to TypeScript in small steps. In these scenarios, it is possible to use a special type called any, which means any type. Using any means opting-out of type checking, and is the same as making the TypeScript Compiler ignore that value.

Take the following code block:

```
let thisCanBeAnything: any = 12345;

thisCanBeAnything = "I can be anything - Look, I'm a string now";

thisCanBeAnything = ["Now I'm an array - This is almost like pure JavaScript!"];
```

None of these declarations will give an error in TypeScript, since the type was declared as any.

### unknown

The unknown type is like a type-safe counterpart of the any type. You can use unknown when you want to type something that you can not determine the value of, but still want to make sure that any code using that value is correctly checking the type before using it. This is useful for library authors with functions in their library that may accept a broad range of values from their users and do not want to type the value explicitly.

For example, if you have a variable called code
```
let code: unknown;
```
Then later in the program you can assign different values to that field, like 35 (number), or completely unrelated values, like arrays or even objects.

Later in the same code, you could set code to a number:
```
code = 35;
```
But then later you could assign it to an array:
```
code = [12345];
```
You could even re-assign it to an object:
```
code = {};
```
If later in the code you want to compare that value against some other number, like:
```
const isCodeGreaterThan100 = code > 100;
```
The TypeScript compiler is going to display the error 2571:
```
Output
Object is of type 'unknown'. (2571)
```
This happens because code needs to be a number type for this comparison, not an unknown type. When doing any operation with a value of type unknown, TypeScript needs to make sure that the type is the one it expects. One example of doing this is using the typeof operator that already exists in JavaScript. Examine the following code block:

```
if (typeof code === 'number') {
  const isCodeGreaterThan100 = code > 60;
  // ...
} else {
  throw new Error('Invalid value received as code');
}
```
In this example, you are checking if code is a number using the typeof operator. When you do that, TypeScript is going to coerce the type of your variable to number inside that if block, because at runtime the code inside the if block is only going to be executed if code is currently set to a number. Otherwise, you will throw a JavaScript error saying that the value passed is invalid.

To understand the differences between the unknown and any types, you can think of unknown as “I do not know the type of that value” and any as “I do not care what type this value holds”.
### void
You can use the void type to define the variable in question as holding no type at all. If you assign the result of a function that returns no value to a variable, that variable is going to have the type void.

Take the following code:
```
function doSomething() {};

const resultOfVoidFunction: void = doSomething();
```
You will rarely have to use the void type directly in TypeScript.

null and undefined
null and undefined values in TypeScript have their own unique types that are called by the same name:

```
const someNullField: null = null;
const someUndefinedField: undefined = undefined;
```
These are especially useful when creating your own custom types, which will be covered later in this series.

### never
The never type is the type of a value that will never exist. For example, imagine you create a numeric variable:
```
const year: number = 2021;
```
If you create an if block to run some code if year is not a number, it could be like the following:
```
if (typeof year !== "number") {
  year;
}
```
The type of the variable year inside that if block is going to be never. This is because, since year is typed as number, the condition for this if block will never be met. You can think of the never type as an impossible type because that variable can’t have a value at this point.
### object
The object type represents any type that is not a primitive type. This means that it is not one of the following types:

#### number
#### string
#### boolean
#### bigint
#### symbol
#### null
#### undefined

The object type is commonly used to describe object literals because any object literal can be assigned to it:
```
const programmingLanguage: object = {
  name: "TypeScript"
};
```


