let notSure: any = 4;
console.log(notSure);
notSure = 'maybe a string instead.';
console.log(notSure);
notSure = false;
console.log(notSure);

let notSure2: any = 4;
// notSure2.ifItExists();
notSure2.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed(); // Error. Object 에는 toFixed() 가 없음.
let anyList: any[] = [1, true, 'free'];
console.log('Original List : ', anyList);
anyList[1] = 100;
console.log('When List is Any type, Can changed any value. ', anyList);
