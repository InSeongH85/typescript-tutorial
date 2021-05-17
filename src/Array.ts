// Use basic
let list: number[] = [1, 2, 3];
// Use Generic
let listByGeneric: Array<number> = [1, 2, 3];

//Use Tuple
let tuple: [string, number];
tuple = ['hello', 19];
// Error
//tuple = [19, 'hello'];

console.log(tuple[0].substring(1));
