interface LabeledValue {
	label: string;
	size: number;
}

function printLabel(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}

function printSize(labeledObj: LabeledValue) {
	console.log(labeledObj.size);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
printSize(myObj);

interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: 'white', area: 100 };
	if (config.color) {
		// Error: Property 'clor' does not exist on type 'SquareConfig'
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let blackSquare = createSquare({ color: 'black', width: 10 });
console.log(blackSquare);

let blueSquare = createSquare({ color: 'blue', width: 11 });
console.log(blueSquare);

/**
 * Readonly Properties
 * */
interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!
//Cannot assign to 'x' because it is a read-only property.
