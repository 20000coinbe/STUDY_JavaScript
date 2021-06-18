// 콘솔 로그에 대해서
// 개발단계에서만 사용하며, 사용자에게 불필요한 정보가 유츌되지않도록 한다

const dog = {
  type: "dog",
  name: "디디",
  owner: {
    name: "neo",
    age: 23,
  },
  age: 3,
};

// console.log("logging", dog);

// log level
console.log("log"); // 개발단계에서 사용
console.info("info"); // 정보
console.warn("warn"); // 경고
console.error("error"); // 에러

/* 
log과 info는 사용자에게는 보여서는 안된다
*/

// assert : 조건이 거짓일때만 출력한다
console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

// print object(가독성 있게 출력하기)
console.table(dog);
console.dir(dog, { colors: false, depth: 1 }); // 다양한 옵션을 넣어서 사용가능

// 런타임 시간 측정
console.time("for loop"); // 이름을 호출해줘야 한다
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// 특정함수가 몇 번 사용되는지 counting
function a() {
  console.count("a function");
}
a(); // a function: 1
a(); // a function: 2
console.countReset("a function");
a(); // a function: 1

// trace : 어디서 호출되었는지 추적(비동기, 이벤트함수들의 위치 찾기에 유용)
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace();
}
f1();

/*    
  at f3 (D:\std_js\log.js:58:11) // f2에서 호출되었다
  at f2 (D:\std_js\log.js:55:3)
*/
