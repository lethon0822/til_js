# JavaScript 기초

- 타인에게, 특히 초등학생에게 설명할 정도로 쉽게 스스로 개념을 반드시 정리할 것

## 1. 기초 상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형식을 지정하는 문법 구조
- CSS3 : 데이터를 잘 보여주기 위해서 꾸며주는 용도의 문법
- JS

```
1. css 제어 : 레이아웃 변경 지시
2. html 제어 : 데이터의 결과를 CRUD 하도록 지시
3. Server, DB 제어 : Node.js로 가능
```

## 2. JS의 종류 (2가지)

### 2.1 웹 브라우저용 js (Web API)

- Web API : 웹 브라우저에 미리 기능이 만들어져 있는 JS 기능
- 주로 직접 코딩하는 것이 아니라 미리 만들어진 기능을 사용

### 2.2 데이터 관리용 js (ES6)

- 이전에 JS는 웹 브라우저마다 모두 달랐음.
- 이에 대한불편함을 해소하기 위해 JS의 문법을 통일함
- 기준이 ECMAScript 라고 하며 ES6가 가장 기준이 됨

## 3. 실습

### 3.1. 웹 브라우저에서 JS 실행하기

- `F12` 실행 > `Console` 탭 선택 (확인, 테스트 용도)

```js
console.log("안녕");
// 내용 출력 확인
```

```js
console.clear();
// 콘솔 창 초기화
```

```js
alert("안녕");
// 경고 창으로 나타남
```

- 1 줄 이상 작성하는 경우는 `Shift + Enter` 키를 입력하여야 함.

```js
console.log("안녕하세요.");
console.log("좋은 금요일입니다");
```

### 3.2. HTML에서 JS 실행하기

- index.html 파일 생성

## 4. `JS` 작성 위치 고민하기

- html, `<script></script>` 태그 지원
- css 태그는 `<style></style>, <link>` 지원

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script>
      console.log("1. 헤더");
    </script>
  </head>
  <body>
    <script>
      console.log("2. body");
    </script>
  </body>
</html>

<script>
  console.log("3. html 끝");
</script>
```

### 4.1. 3번 자리(html 끝)가 좋음

- 일반적으로 css와 html을 제어하는 것이 js의 목적임
- `웹 브라우저가 css와 html을 모두 읽고 난 후의 자리가 html의 끝자리`

### 4.2. 1번 자리(헤더)는 `기능` 정의

- 개발자가 만든 많은 `기능`을 코딩하기 좋음
- 다른 개발자가 만든 많은 `기능`을 불러와서 사용하기 좋음

## 5. js도 외부에 파일로 만들어서 관리

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성
- `js/lib.js 내용`

```js
// 메시지 출력 기능
function say(_msg) {
  console.log(_msg);
}
console.log("1. 헤더");
```

```html
<script src="js/lib.js"></?script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹 브라우저에 값 보관시 사용할 공간

### 1.1. 필요로 한 항목을 파악하기

#### 1.1.1. 단계1 (필요로 한 기능에 대해 서술 - 피그마, UI 다이어그램)

- ex) `사용자 정보`를 입력 받아서 `DB에 보관`하고 싶음
  - 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶음

#### 1.1.2. 단계2 (어떤 정보를 보관할지 결정 - 요구사항명세서)

```
ex) 이름, 주민등록번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디, 비밀번호, 개인정보처리방침 동의 여부
```

#### 1.1.3. 단계3 (각각의 정보를 보관할 공간을 마련)

```
ex) 이름 : 글자 20자 제한
    주민등록번호 : 글자 13자 제한
    전화번호 : 글자 11자 제한
    우편번호 : 글자 5자 제한
    상세주소 : 글자 50자 제한
    이메일 : 글자 20자 제한
    아이디 : 글자 16자 제한
    비밀번호 : 글자 16자 제한
    동의 여부 : 참/거짓 숫자 1자 제한
    등등
```

### 1.2. 각 항목에 대해 웹 브라우저에서 임시로 보관하는 작업

#### 1.2.1. 단계1

- 웹 브라우저 메모리 `빈 공간` 요청 (키워드 사용)

```js
var
let
const
```

#### 1.2.2. `var` 라고 작성할 시 `변수`로 인정

- `hoisting` 으로 오류 발생할 소지가 높음
  - 미리 만들지 않고 사용해도 되는 문제, 문법과 상관없이 등록하겠다는 의미
- 예전 js 버전에서만 사용함

```
무조건 공간에다가 undefined라는 값을 넣어버림
호이스팅의 대상이 됨
```

#### 1.2.3. `let` 라고 작성할 시 `변수`로 인정

- `hoisting` 의 문제를 사전에 차단
- 미리 사용하면 해당 오류를 알림
- 수시로 내용이 바뀜

#### 1.2.4. `const` 라고 작성할 시 `상수(변하지 않는 값)`로 인정

- `hoisting` 의 문제를 사전에 차단
- 미리 사용하면 해당 오류를 알림
- 초기 값을 무조건 주어야 함
- 절대 값을 바꿀 수 없음

#### 1.2.5. 실제로 var, let, const 중에 선택

- 값이 사용자마다 변함 > `let` 선택.

```js
ex) let 이름 : 글자 20자 제한
    let 주민등록번호 : 글자 13자 제한
    let 전화번호 : 글자 11자 제한
    let 우편번호 : 글자 5자 제한
    let 상세주소 : 글자 50자 제한
    let 이메일 : 글자 20자 제한
    let 아이디 : 글자 16자 제한
    let 비밀번호 : 글자 16자 제한
    let 동의 여부 : 참/거짓 숫자 1자 제한
    등등
```

### 1.3. 메모리 공간에 이름 짓는 법(변수 명명법)

- 매우 중요, 이름을 잘못 지으면 다른 개발자에게 혼란을 줄 수 있음
- 개발자들에게는 코딩 컨벤션이 있음
- 변수의 철자는 `명사+명사 영어`로
- 숫자 및 공백, 특수기호는 절대 안됨.
  - 허용되는 특수기호 : `_` , `$`

#### 1.3.1. Camel Case

- 이름을 소문자로 시작하고 새로운 명사는 대문자로 시작함
- 많은 프로그래머들이 변수라고 생각함

#### 1.3.2. Snake Case

- 이름을 모두 소문자로 작성하고 `_` 로 단어를 연결함

#### 1.3.3. Kebab Case

- 이름을 모두 소문자로 작성하고 `-` 로 단어를 연결함
- 파일 또는 css 파일에서는 사용함
- ex) Next.js 의 파일명은 kebab 이 표준임

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 명사도 대문자로 시작함
- 객체 변수나 클래스라고 생각함

#### 1.3.5. 대문자

- 단어를 전부 대문자로 작성하는 것
- 상수명으로 생각함

#### 1.3.6 적용하기(카멜 케이스)

```js
ex) let userName : 글자 20자 제한
    let userNum : 글자 13자 제한
    let userPhone : 글자 11자 제한
    let userPost : 글자 5자 제한
    let userAddress : 글자 50자 제한
    let userEmail : 글자 20자 제한
    let userId : 글자 16자 제한
    let userPassword : 글자 16자 제한
    let userAgree : 참/거짓 숫자 1자 제한
```

### 1.4. 기본 데이터 종류 (원시데이터 : Primitive Data Type)

- number : 숫자
- string : 글자(한글자, 여러글자)
- boolean : true/false (나중에 falshy 한 것 알아야 함)
- undefined : 값이 없음 (변수 초기값으로 자동 셋팅)
- null : 값이 없다고 지정함 (값을 비웠다고 셋팅)
- symbol : 절대로 겹치지 않는 변수

#### 1.4.1. 적용하기

- 일반 JS에서는 변수 타입을 적지 않음 (변수 타입을 적는 건 TS)
- 글자수 제한은 if문, for문 등 코딩해서 확인할 수 있게 해야 함

```js
ex) let userName = ""; //20자 제한
    let userNum = "";   //13자 제한
    let userPhone = "";   //11자 제한
    let userPost = "";   //5자 제한
    let userAddress = "";   //50자 제한
    let userEmail = "";   //20자 제한
    let userId = "";   //16자 제한
    let userPassword = "";   //16자 제한
    let userAgree = false;  //숫자 1자 제한
```

#### 1.4.2. var, let, const 제약사항 정확히 파악하기

### 1.5. 참조형 데이터 종류(Reference Data Type)
