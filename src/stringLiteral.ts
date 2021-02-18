type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
	animate(dx: number, dy: number, easing: Easing) {
		// if (easing === 'ease-in') {
		//     console.log(easing);
		// } else if (easing === 'ease-out') {
		// } else if (easing === 'ease-in-out') {
		// } else {

		// }
		console.log(easing);
	}
}

let button = new UIElement();
button.animate(0, 0, 'ease-out');

//button.animate(0, 0, 'uneasy');
