// 기본적으로 0, 1, 2 ... 이렇게 나감
// 그러나 1, 2, 3 .. 이렇게 나가도록 설정도 가능
// 또한 모두 수동으로도 설정가능
enum Color {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let color: Color = Color.Green;
console.log(color);
