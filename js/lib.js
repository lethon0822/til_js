/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}

/**
 * 숫자 나누기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 나눗셈 결과
 * -------- 호출 예 --------
 * ```javascript
 * let result = divide(5, 4);
 * ```
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0이 아니어야 합니다.");
  }

  // 데이터 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }

  return a / b;
}
// divide만 예외처리됨

const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = divide(5, 4);

console.log(resultAdd);
console.log(resultMinus);
console.log(resultMulti);
console.log(resultDivide);

// 외부로 공개할 함수 생성
// 연산 기호를 입력받는 경우
/**
 * 계산기 기능 함수
 * +, -, *, / 기능 존재
 * @param {string} symbol - +, -, *, / 기호중 1개 입력
 * @param {number} a - 숫자 입력
 * @param {number} b - 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용예) =================
 * ```js
 * const result = calcurator("+", 5, 4)
 * ```
 */
function calcurator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요");
  }

  let result = 0;

  switch (symbol) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = minus(a, b);
      break;
    case "*":
      result = multi(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      result = 0;
      return alert("올바른 기호를 입력해주세요.");
  }
}

/**
 * 메세지를 콘솔에 출력하기
 * @param {string} message - 출력할 메세지
 */
function showMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("반가워");

/**
 * 배열을 받아서 요소를 출력하는 함수
 * @param {number[]} arr - 숫자 배열
 */
function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/**
 * 객체의 속성값을 출력하는 함수
 * @param { {id:number, nicName:string, age:number} } user - 사용자 객체
 */
function showUser(user) {
  console.log(user.id);
  console.log(user.nicName);
  console.log(user.age);
}

/**
 * 나이를 10살 더하여 출력함.
 * @param {number} age - 현재 나이
 * ```js
 * const result = showAge(10); // 20
 * ```
 */
function showAge(age) {
  return age + 10;
}

/**
 * 입력된 매개변수 만큼 총합 계산하기
 * @param {number} numbers - 숫자 값
 */
function showTotal() {
  console.log(arguments); //
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
// 매개변수 개수에 차이가 나거나 아예 매개변수가 없어도 오류가 일어나지 않음
// arguments로 받아들일 수 있음

function showTotal2(a, b, ...rest) {
  console.log(rest); //
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}
showTotal2(4, 5, 6, 7, 8, 9, 1, 2, 0);
