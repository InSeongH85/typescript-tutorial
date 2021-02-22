//https://www.typescriptlang.org/docs/handbook/basic-types.html
// boolean
let isDone: boolean = false;
//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = 'blue';
color = 'red';

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let setence: string = `Hello, my name is ${fullName}. 

I'll be ${age + 1} years old next month`;
// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number] = ['hello', 10];

// Enum
enum Color {
	Red,
	Green,
	Blue,
}

let c: Color = Color.Green;
let colorName: string = Color[2];

// Unknown
let notSure: unknown = 4;
console.log(notSure);
notSure = 'maybe a string instead';
console.log(notSure);
// OK, definitely a boolean
notSure = false;
console.log(notSure);
/*
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
*/

//Any
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
//const str: string = getValue('myString');
//console.log(str);

let looselyTyped: any = {};
// let d = looselyTyped.a.b.c.d;
//  ^ = let d: any

//void
function warnUser(): void {
	console.warn('This is my warning message');
}

let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;

/**
 * Types ::  Null and Undefined
 * In TypeScript, both undefined and null actually have their types named undefined and null respectively.
 * Much like void, they’re not extremely useful on their own:
 *
 * By default null and undefined are subtypes of all other types.
 * That means you can assign null and undefined to something like number.
 * However, when using the --strictNullChecks flag,
 * null and undefined are only assignable to unknown, any and their respective types
 * (the one exception being that undefined is also assignable to void).
 * This helps avoid many common errors.
 * In cases where you want to pass in either a string or null or undefined,
 * you can use the union type string | null | undefined.
 */

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**
 * Types:: Never
 *
 * The never type represents the type of values that never occur. For instance, never is the return type
 * for a function expression or an arrow function expression that always throws an exception or one that never returns.
 * Variables also acquire the type never when narrowed by any type guards that can never be true.
 * The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
 * Some examples of functions returning never:
 */
// Function returning never must not have a reachable end point
function error(message: string): never {
	throw new Error(message);
}

// Inferred return type is never
function fail() {
	return error('Something failed');
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
	while (true) {}
}

declare function create(o: object | null): void;

// OK
// create({ prop: 0 });
// create(null);
// create(undefined); // Remember, undefined is not a subtype of null
//Argument of type 'undefined' is not assignable to parameter of type 'object | null'.

//Argument of type '42' is not assignable to parameter of type 'object | null'.
// create(42);

//Argument of type '"string"' is not assignable to parameter of type 'object | null'.
// create('string');

//Argument of type 'false' is not assignable to parameter of type 'object | null'.
// create(false);

let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

console.log(someValue);
console.log('strLength', strLength);
console.log('strLength2', strLength2);
