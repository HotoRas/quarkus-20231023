/* JavaScript */

console.log('===== 1. 스코프 차이 =====')

if (1) { var a = 'var 변수'; let b = 'let 변수'; const c = 'const 변수' }
console.log('var a: ', a)
// console.log('let b: ', b)
// console.log('const c: ', c)

console.log('===== 2. 재선언 & 재할당 =====')
var x = 10
var x = 20 // ok
console.log('var 재선언 -> ', x)

let y = 30
//let y=40 // err
y = 40
console.log('let 재선언 X, 재할당 O -> ', y)

const z = 50
//let z=70
//z=80
console.log('const 재선언 X, 재할당 X -> ', z)

// console.log("===== 3. 호이스팅 =====");
// console.log(testVar); // undefined
// var testVar = 100;
// console.log(testLet); // ReferenceError
// let testLet = 200;
// console.log(testConst); // ReferenceError
// const testConst = 300;

