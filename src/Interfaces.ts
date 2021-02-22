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
