// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";

// 2. Variable, rw(read/write) 변수
// let (added in ES6)
let globalName = "global name"; //전역변수는 최소한으로 사용할 것
{
  let name = "taekyung";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top 어디에 선언했느냐에 상관없이 )
// has no block scope , 블록을 무시함
{
  age = 4;
  var age;
}
console.log(age); //정상적으로 4가 출력됨, 유연성은 있으나 예측불가능하기 때문에 사용안함

// 3. Constant, r(read only), 선언과 동시에 할당한 뒤로는 변경이 불가능함
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security , 보안상 좋음
//  - thread safety , 동시의 값을 변경할 때 위험성을 막아줌
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer 정수
const size = 17.1; // decimal number 소수점 숫자
console.log(`value: ${count}, type: ${typeof count}`); // number
console.log(`value: ${size}, type: ${typeof size}`); // number

// number - speicla numeric values: infinity, -infinity, NaN ,,,, 숫자가 아닌데 숫자다
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 사용 잘 안함
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //아래처럼 써야하는 걸 편하게 작성 가능
console.log("value: " + helloBob + " type: " + typeof helloBob); //

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 값을 할당한 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 값이 할당 되지 않은 것
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //고유한 식별자 만들 때 사용됨
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object(객체), real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language, 런타임에서 변경가능
let text = "hello";
console.log(text[0]); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // 문자열 + 숫자 = 문자열
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // 문자열 / 문자열 = 숫자 , 문자열 / 숫자 = 숫자
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 자바스크립트는 런타임에서 타입이 정해지기 때문에 에러발생이 가능함
// 그래서 타입스크립트가 나온 것
