// 반환 값이 없을 시 void 를 사용한다.
function warnUser(): void {
	console.log('This is my warning message');
}

// void 타입을 선언하는 것은 유용하지 않다.
// --strictNullChecks 를 사용하지 않을 때만 null 또는 undefined 만 할당이 가능하기 때문
// unusable = 'string';  - Type 'string' is not assignable to type 'void'
// unusable = 1;  - Type 'number' is not assignable to type 'void'
let unusable: void = undefined;
unusable = null;
