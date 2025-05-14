# JavaScript 기초

- 타인에게, 특히 초등학생에게 설명할 정도로 쉽게 스스로 개념을 반드시 정리할 것.

## 1. 기초 상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형식을 지정하는 문법 구조.
- CSS3 : 데이터를 잘 보여주기 위해서 꾸며주는 용도의 문법.
- JS

```
1. css 제어 : 레이아웃 변경 지시.
2. html 제어 : 데이터의 결과를 CRUD 하도록 지시.
3. Server, DB 제어 : Node.js로 가능.
```

## 2. JS의 종류 (2가지)

### 2.1 웹 브라우저용 js (Web API)

- Web API : 웹 브라우저에 미리 기능이 만들어져 있는 JS 기능.
- 주로 직접 코딩하는 것이 아니라 미리 만들어진 기능을 사용.

### 2.2 데이터 관리용 js (ES6)

- 이전에 JS는 웹 브라우저마다 모두 달랐음.
- 이에 대한불편함을 해소하기 위해 JS의 문법을 통일함.
- 기준이 ECMAScript 라고 하며 ES6가 가장 기준이 됨.

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

- index.html 파일 생성.

## 4. `JS` 작성 위치 고민하기

- html, `<script></script>` 태그 지원.
- css 태그는 `<style></style>, <link>` 지원.

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

- 일반적으로 css와 html을 제어하는 것이 js의 목적임.
- `웹 브라우저가 css와 html을 모두 읽고 난 후의 자리가 html의 끝자리`

### 4.2. 1번 자리(헤더)는 `기능` 정의

- 개발자가 만든 많은 `기능`을 코딩하기 좋음
- 다른 개발자가 만든 많은 `기능`을 불러와서 사용하기 좋음.

## 5. js도 외부에 파일로 만들어서 관리

- js 폴더 생성.
- js 폴더에 `lib.js` 파일 생성.
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

- 웹 브라우저에 값 보관시 사용할 공간.

### 1.1. 필요로 한 항목을 파악하기

#### 1.1.1. 단계1 (필요로 한 기능에 대해 서술 - 피그마, UI 다이어그램)

- ex) `사용자 정보`를 입력 받아서 `DB에 보관`하고 싶음.
  - 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶음.

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

- 웹 브라우저 메모리 `빈 공간` 요청. (키워드 사용)

```js
var
let
const
```

#### 1.2.2. `var` 라고 작성할 시 `변수`로 인정

- `hoisting` 으로 오류 발생할 소지가 높음.
  - 미리 만들지 않고 사용해도 되는 문제, 문법과 상관없이 등록하겠다는 의미.
- 예전 js 버전에서만 사용함.

```
무조건 공간에다가 undefined라는 값을 넣어버림
호이스팅의 대상이 됨.
```

#### 1.2.3. `let` 라고 작성할 시 `변수`로 인정

- `hoisting` 의 문제를 사전에 차단.
- 미리 사용하면 해당 오류를 알림.
- 수시로 내용이 바뀜.

#### 1.2.4. `const` 라고 작성할 시 `상수(변하지 않는 값)`로 인정

- `hoisting` 의 문제를 사전에 차단.
- 미리 사용하면 해당 오류를 알림.
- 초기 값을 무조건 주어야 함.
- 절대 값을 바꿀 수 없음.

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

- 매우 중요, 이름을 잘못 지으면 다른 개발자에게 혼란을 줄 수 있음.
- 개발자들에게는 코딩 컨벤션이 있음.
- 변수의 철자는 `명사+명사 영어`로.
- 숫자 및 공백, 특수기호는 절대 안됨.
  - 허용되는 특수기호 : `_` , `$`

#### 1.3.1. Camel Case

- 이름을 소문자로 시작하고 새로운 명사는 대문자로 시작함.
- 많은 프로그래머들이 변수라고 생각함.

#### 1.3.2. Snake Case

- 이름을 모두 소문자로 작성하고 `_` 로 단어를 연결함.

#### 1.3.3. Kebab Case

- 이름을 모두 소문자로 작성하고 `-` 로 단어를 연결함.
- 파일 또는 css 파일에서는 사용함.
- ex) Next.js 의 파일명은 kebab 이 표준임.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 명사도 대문자로 시작함.
- 객체 변수나 클래스라고 생각함.

#### 1.3.5. 대문자

- 단어를 전부 대문자로 작성하는 것.
- 상수명으로 생각함.

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

- 일반 JS에서는 변수 타입을 적지 않음. (변수 타입을 적는 건 TS)
- 글자수 제한은 if문, for문 등 코딩해서 확인할 수 있게 해야 함.

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

### 1.5 var, let, const 제약사항 정확히 파악하기

- 웹 브라우저에 저장할 내용(변수)이있다면 아래를 고민하자.

#### 1.5.1 1순위 : `const`

- 변수를 만들 때 var, let, const 중에 무엇을 선택할지 고민을 요함.
- const는 변하지 않는 내용이 들어감. (상수)
- const로 했다가 값이 변해야 하는 경우에 let으로 변경. (변수)
- const의 특징
  - 만들기 전에 사용할 수 없음. (호이스팅 : 안 만든 것을 사용할 수 없게. 해결해야 함.)
  ```js
  console.log(userName); // Error
  const userName = "홍길동";
  ```
  - 동일한 이름으로 변수를 또 생성할 수 없음. (변수 생성 중복 방지)
  ```js
  const userAge = 10;
  const userAge = 40; // Error
  ```
  - 값을 변경할 수 없음.
  ```js
  const userCity = "대구";
  userCity = "서울"; // Error
  ```

#### 1.5.2. 2순위 : `let`

- 만들기 전에 사용할 수 없음. (호이스팅 문제 해결! : const와 동일)

```js
console.log(userName);
let userName = "홍길동"; // Error
```

- 동일한 이름으로 중복 생성 할 수 없음. (중복 에러 생성 : const와 동일)

```js
let userAge = 20;
let userAge = 30; // Error
```

- 값을 변경할 수 있음. (const와의 유일한 차이점)

```js
let userCity = "대구";
let userCity = "서울"; // OK
```

#### 1.5.3. `var`는 사용하지 않기

- 호이스팅 통과되어 버림. (추후 오류의 원인)
- 동일한 이름으로도 중복 생성 가능. (추후 오류의 원인)
- 값이 변경됨. (변수)
- 기존 코드에서 var를 사용했다면 유지하기. (어떤 의도로 사용했는지 추적이 불가능해서 고쳤을 때 어떤 오류를 일으킬지 모름)

### 1.6. 참조형 데이터 종류(Reference Data Type)

Ex)

- interpark 사이트의 Banner 영역의 데이터를 js에서 관리하려고 한다.
- 배너는 `링크 주소, 이미지 주소, 고유한 ID`가 있다.
  - (=) 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = 1;

// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = 2;

// 세 번째 배너
// 이하 반복되어 15개의 상수가 생김.
// 네 번째 배너
// 다섯 번째 배너
```

#### 1.6.1. 객체

- 관련 있는 기본형 데이터들을 `묶어서 하나로` 만들기

```js
// 1단계
const 객체명 = {};
//   ↓↓↓
  // 2단계
  const 객체명 = {
    이름 : 값, // , 로 연결
    이름 : 값,
    이름 : 값
  }

  const 객체명 = {
    key Name : Key Value, // , 로 연결
    이름 : 값,
    이름 : 값
  }

  const 객체명 = {
    Property 속성명 : Value, // , 로 연결
    이름 : 값,
    이름 : 값
  }
```

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = 1;
//   ↓↓↓
const banner_1 = {
  url: "https://~",
  img: "https://~",
  id: "1",
};

// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = 2;
//   ↓↓↓
const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성(키명)을 통한 값 사용. (호출)

```js
객체명.키명;
banner_1.url;

["객체명"].키명;
["banner_1"].url;
```

#### 1.6.2. 배열

- 하나의 이름으로 여러개의 데이터를 묶어서 관리

```js
const bannerArray = [1, 2, 3, "안녕", false, null, undefined];
const bannerId = ["1", "2", "3"];

const banner = [
  {url:"https://~", img:"https://~", id= "1"},
  {url:"https://~", img:"https://~", id= "2"},
  {url:"https://~", img:"https://~", id= "3"},
]
```

- 배열의 요소에 값 사용. (호출)

```js
배열명[인덱스번호];
banner[0];
banner[1];
```

### 1.7. 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
// 섹션의 타이틀
const sectionTitle = "티켓 랭킹";
// 섹션의 설명글
const sectionDesc = "~~~";
console(sectionDesc);
// 섹션의 카테고리
const sectionCategoryArr = ["뮤지컬", "콘서트", "스포츠"];
console.log(sectionCategory[0]);
console.log(sectionCategory[1]);
console.log(sectionCategory[2]);
sectionCategory[3]; // JS는 오류가 아니라 undefined라고 띄움
// 티켓의 타이틀 정보
const ticketTitleArr = [
  "팬텀 10주년 기념 공연",
  "뮤지컬 <메디슨 카운티의 다리>",
  "뮤지컬 <라이카>",
];
console.log(sectionCategory);
console.log(ticketTitleArr[0]);
console.log(ticketTitleArr[1]);
console.log(ticketTitleArr[2]);
// 티켓의 이미지 경로 (위 배열과 함께 나타낼 데이터의 순서를 지켜야 함)
const ticketImgArr = ["htts://a.jpg", "htts://b.jpg", "htts://c.jpg"];
// 티켓의 링크 경로
const ticketUrlArr = ["htts://a.html", "htts://b.html", "htts://c.html"];
// 티켓의 순위
const ticketRankArr = [1, 2, 3];
// 티켓의 공연장소
const ticketPlaceArr = ["대구", "서울", "제주"];
// 티켓의 공연일시
const ticketDayArr = ["05/07", "05/09", "05/04"];

// ↓↓↓ 위의 사항을 효율적으로 관리하기 위한 작업

const ticket_1 = {
  title: "팬텀 10주년 기념 공연",
  img: "htts://a.jpg",
  url: "htts://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
console.log(ticket_1);
console.log(ticket_1.title);
console.log(ticket_1.img);
console.log(ticket_1.url);
console.log(ticket_1.rank);
console.log(ticket_1.place);
console.log(ticket_1.day);

const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "htts://b.jpg",
  url: "htts://b.html",
  rank: 2,
  place: "05/09",
  day: "서울",
};
};
console.log(ticket_1);
console.log(ticket_1["title"]);
console.log(ticket_1["img"]);
console.log(ticket_1["url"]);
console.log(ticket_1["rank"]);
console.log(ticket_1["place"]);
console.log(ticket_1["day"]);

const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "htts://c.jpg",
  url: "htts://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};
const ticketInfoArr = [{ ticket_1 }, { ticket_2 }, { ticket_3 }];

// ↓↓↓ 아래의 형태로 데이터가 들어오는 것을 JavaScript Object Notation, JSON이라고 함.

const ticketInfoJSONArr = [
  {
    title: "팬텀 10주년 기념 공연",
    img: "htts://a.jpg",
    url: "htts://a.html",
    rank: 1,
    place: "대구",
    day: "05/07",
  },
  {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "htts://b.jpg",
    url: "htts://b.html",
    rank: 2,
    place: "05/09",
    day: "서울",
  },
  {
    title: "뮤지컬 <라이카>",
    img: "htts://c.jpg",
    url: "htts://c.html",
    rank: 3,
    place: "제주",
    day: "05/04",
  },
];
console.log(ticketInfoJSONArr[0].title);
console.log(ticketInfoJSONArr[1].title);
console.log(ticketInfoJSONArr[2].title);
```

## 2. 연산자(operator)

- 연산을 해서 결과값을 만드는 `기호`.
- `연산자에 의한 새로운 결과값`이 나오는 것을 `연산식`이라고 함.

### 2.1. 사칙연산(`+ - * /`)

- `+ 연산자`

```js
const numA = 0;
const numB = 1;
const result = numA + numB; // result = 1;
```

```js
const strA = "안녕";
const strB = "hello";
const result = strA + strB; // result = "안녕hello";

const strC = "홍길동";
const numA = 20;

// "저기~ 홍길동님 반가워요!"
const result2 = "저기~ " + strC + "님 반가워요!";
// 저기~ 홍길동님은 나이가 20이군요! (숫자+문자열 시 숫자를 문자로 인정함.)
const result3 = "저기~ " + strA + "님은 나이가" + numAge + "이군요!";
//아래처럼 템플릿 문법을 추천. 흔히 백틱이라고 함.
const resultTemplate = `저기~ ${strC} 님은 나이가 ${numA}이군요!`;
```

- 에제

```html
<div class="section">
  <div class="box_wrap">
    <a href="https://~">뮤지컬 팬텀</a>
    <img src="https://~" alt="뮤지컬 팬텀 배너 이미지" />
  </div>
</div>
```

```js
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너 이미지";
let tag = '<div class="section">';
tag = tag + '  <div class="box_wrap">';
tag = tag + "   <a href=" + link + 'https://~">' + title + "</a>";
// 엔터키 들어가면 문자열이 끊겨서 저장이 안됨
//   ↓↓↓
const link = "https~";
const img = "https~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너 이미지";
const tag = `
<div class="section">
  <div class="box_wrap">
    <a href="${link}">${title}</a>
    <img src="${img}" alt="${alt}" />
  </div>
</div>
`;
// 엔터로 나눠진 문자열을 백틱으로 가져올 수 있고, ${} 를 알면 문자열 속에 변수의 내용을 가져올 수 있음
```

```js
const numA = 5;
const numB = 8;
const resultA = `${numA} + ${numB} = ${numA + numB}`;
const resultB = `${numA} - ${numB} = ${numA - numB}`;
const resultC = `${numA} * ${numB} = ${numA * numB}`;
const resultD = `${numA} / ${numB} = ${numA / numB}`;
```

```js
const a = 1; // number
const b = "1"; // string
const result = a + b;
// number(string으로 암묵적 데이터 타입 변환) + string
// ==> string (11)
```

- `- 연산자`

```js
const numA = 100;
const numB = 10;
const result = numA - numB; // 90
```

```js
const numA = "100"; // string
const numB = 10; // number
// string을 number로 암묵적 변환
const result = numA - numB; // 90
```

```js
const numA = "ABC";
const numB = 10;
// ABC는 숫자가 아니므로 암묵적 변환 실패
const result = numA - numB; // NaN (Not a Number)
```

- `* / 연산자`

```js
const numA = 4;
const numB = 2;
const resultMulti = numA * numB; // 8
const resultDevide = numA / numB; // 2
```

### 2.2. 나머지 연산 (`%`)

- ex) 총 게시글 52개
- 한 페이지당 5개의 글
- 몇 페이지가 필요한가?
- 마지막 페이지에 보여줘야 하는 게시글 수는?

```js
const total = 52;
const count = 5;
const totalPage = total / 5; // 소숫점 나옴
const totalPageNumber = Math.cedil(totalPage); // 올림
const LastCount = total % count; // 나머지 나옴
```

### 2.3. 복합 연산자 (연산 타이핑 수를 줄임.)

```js
const numA = 5;
const result = numA+3; // 8
// 코딩에 의한 가독성이 떨어짐.
// 그런데 PG들은 많이 사용하는 방식
result +=10;'
// result = result + 10; 줄여서 작성함.

result += 10; // 18

// result = result - 5;
result -= 5; // 13

// result = result * 4;
result *= 4; // 52

// result = result / 2;
result /= 2; // 26

// 증감 연산자
num++;
num--;
++num;
--num;
```

### 2.5. 논리 연산자

- `무조건 이해` 해야 함.
- `falsy` 한 값의 종류 (js 에서 false 라고 판단하는 값)

```js
"";
0;
undefined;
null;
NaN;
false;
```

- 최종 결과가 true 인지 false 인지 결과를 변수에 저장

#### 2.5.1. OR 연산자 (또는)

- 2개 중 1개만 true면 true
- 둘 다 false일 때만 false

```js
let result = true || false; // false
result = false || false; // false
result = "" || true; // true

let userPass;
result = userPass || "비밀번호 넣으세요."; // "비밀번호 넣으세요."
// falsy한 값을 넣으면 false로 인식
// 참일 것 같은 연산을 앞에 두면 연산 속도가 줄어듦
```

#### 2.5.2. AND 연산자 (그리고)

- 둘 다 true 일 때만 true
- 둘 중 하나라도 false 일때 false

```js
let result = true && true; // true
result = false && true; // false

// 거짓일 것 같은 연산을 앞에 면 연산 속도가 줄어듦
```

#### 2.5.3. Not 연산자 (반대)

```js
let result = !true;
result = !false;
```

#### 2.5.4. 실습 예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName); // "Guest"
```

```js
let title = null;
let result = title || "제목 없음";
console.log(result); // "제목 없음"
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다.";
console.log(result); // "장바구니가 비었습니다."
```

```js
let isLogin = true;
let result = isLogin && "환영합니다.";
console.log(result); // "환영합니다."
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시";
console.log(result); // false
```

```js
let config = {};
config.theme = config.theme || "light";
console.log(config); // { theme : "light" }
// 내용이 없을 때 초기값 셋팅
```

```js
let options = {
  lang: null,
  fontSize: 0,
};
let lang = options.lang || "ko";
let fontSize = options.fontSize || 20;
// 내용이 없을 때 초기값 셋팅
```

### 2.6. 비교 연산자

```js
// 같은가
// 데이터값의 종류는 비교하지 않음
let resultA = "1" == 1;
// 데이터값의 종류까지 비교함.
let resultB = "1" === 1;

let resultC = 1 > 2; // 크냐
let resultD = 1 < 2; // 작냐
let resultE = 1 >= 2; // 크거나 같냐
let resultF = 1 <= 2; // 작거나 같냐
let resultG = 1 != 2; // 다르냐
let resultH = 1 !== 2; // 다르냐 (데이터 타입까지)
```

### 2.7 병합 연산자

- 일반적으로 기본값 셋팅에서 활용.

- 아래에서 기대한 코드는 0 값이 나오길 기대하고 코드를 진행함.

```js
let userPoint = 0;
let displayPoint = userPoint || 500000; // falsy + or 연산자 = false
console.log(displayPoint);
```

- `??` 연산자는 `null, undefined` 일 때만 값을 비교함.
- 나머지는 `||` 연산자와 동일함.

```js
let userPoint = 0;
let displayPoint = userPoint ?? 500000; // null, undefined 만 false
console.log(displayPoint);
```

```js
let formInput = {
  name: "",
  email: null, // 개발자가 값이 없다고 지정하는 것
  phone: undefined, // 값이 없다고 JS가 기본적으로 지정
};

const name = formInput.name ?? "이름 없음"; // ""
const name = formInput.email ?? "이메일 없음"; // "이메일 없음"
const name = formInput.phone ?? "전화 없음"; // "전화 없음"
```

### 2.8. 옵셔널 체이닝

- 객체의 속성을 대상으로 함. ==> `{ 속성:값 }`
- 객체의 `속성 존재 여부`에 따라 코드 진행.

```js
const user = {
  profile: null,
};

const age = user.profile?.age ?? "정보가 없어 나이 정보를 몰라요"; // "정보가 없어 나이 정보를 몰라요"
// 원래라면 age가 없어서 null Error 발생 후 서비스 멈춤.
// `?`을 넣으면서 있으면 넣고 없으면 넣지 않게 설정됨.
```

```js
const user = {
  profile: { age: 10, name: "홍" },
};

const age = user.profile.age;
// age가 있어서 정상 작동
```

### 2.9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 함. ( = ? : )
- `결과 = 조건식 ? 참일 때 결과 : 거짓일 때 결과`
- 활용 빈도가 높음.

```js
const usserRole = "ADMIN"; // 사용자 등급
// const url = 조건문 ? 참 : 거짓;
const url = userRoll === "ADMIN" ? "admin.html" : "guest.html";
```

```js
const age = 10;
const result = age < 19 ? "동의서 필요" : "성인 인증";
```

```js
const goodCount = 10;
const result = goodCount > 0 ? "재고 있음" : "재고 없음";
```

```js
const user = {
  isLogin: true,
  name: "아이유",
};

const result = user.isLogin ? `${user.name}님 반가워요."` : "로그인 해 주세요";
// user.name이 없으면 서비스 멈춤
```

```js
let num = 5;
let result = num % 2 === 0 ? "짝수" : "홀수";
```

## 3. 조건문 (Condition)

### 3.1. if 문

- `참/거짓`을 판단하여 코드 분기 실행함.
- 형태 1.

```js
if(조건) {
  조건이 참이면 실행;
}
```

- 형태 2. (추천)

```js
if(조건) {
  조건이 참이면 실행;
}
else{
  조건이 거짓이면 실행;
}
```

- 형태 3.

```js
if(조건1) {
  조건1 이 참이면 실행;
}
else if(조건2){
   조건2 이 참이면 실행;
}
else if(조건3){
   조건3 이 참이면 실행;
}else{
  모든 조건에 거짓이면 실행;
}
```

- 예제) 로그인이 된 경우에 메세지 출력하기

```js
// 한줄일 때 중괄호 생략 가능
const isLogin = true;
if (isLogin === true) console.log("로그인하셨네요. 반갑습니다.");

// 명령줄이 두줄 이상인 경우 중괄호 필수
if (isLogin) {
  console.log("로그인하셨네요. 반갑습니다.");
  console.log("환영합니다.");
}
```

- 예제) 로그인 된 경우의 메세지와 로그인 안된 경우의 메세지 출력하기

```js
const isLogin = true;
if (isLogin) {
  console.log("어서오세요");
}
// else : 로그인이 된 경우를 제외한 전부 다
else {
  console.log("로그인하셔야 합니다.");
}
```

- 예제) 나이에 따라서 다른 메시지 출력하기 (조건이 2개이상인 경우)

```js
// 조건을 잘 구성하는 것이 중요함
const age = 100;
if (age >= 60) {
  console.log("어르신 이시네요.");
} else if (age >= 50) {
  console.log("50대 이시네요.");
} else if (age >= 40) {
  console.log("40대 이시네요.");
} else if (age >= 30) {
  console.log("30대 이시네요.");
} else if (age >= 20) {
  console.log("20 대 이시네요.");
} else {
  console.log("미성년 이시네요.");
}
```

- 예제) 사용자가 입력한 항목에 값이 `없을 경우` 메세지 보내지

```js
const name = "홍길동";
const pass = "1234";
const useInfoCheck = false; // 사용자 정보 활용 동의
const useEmailCheck = false; // 이메일 수신 동의

// 조건을 여러개 나열할 수 있음
if (!name || name === "") {
  alert("이름을 입력하세요");
}

if (!name) {
  alert("이름을 입력하세요");
  return; // 바로 반환
}

if (name === "") {
  alert("이름을 입력하세요");
}

// pass === "" 와 같음
if (!pass) {
  alert("비밀번호를 입력하세요.");
  return;
}

// useInfoCheck === false 와 같음
if (!useInfoCheck) {
  alert("개인정보 활용 동의를 체크하세요.");
  return;
}

// !useEmailCheck 와 같음
if (useEmailCheck === false) {
  alert("이메일 수신 동의를 체크해주세요.");
  return;
}

console.log("저희 서비스를 자유롭게 활용하세요.");
```

### 3.2. switch 문

- `여러 개의 값` 중 하나의 `값`이 같은지 판단 후 실행 (값을 비교)

```js
switch(값) {
  case 비교값1:
    실행코드
    break;
  case 비교값2:
    실행코드
    break;
  case 비교값3:
    실행코드
    break;
  default
}
```

- 예제) 엘리베이터 층

```js
const layer = 5; // 값
switch (layer) {
  case 1:
    console.log("1층 내리세요.");
    break;
  case 2:
    console.log("2층 내리세요.");
    break;
  case 3:
    console.log("3층 내리세요.");
    break;
  case 4:
    console.log("4층 내리세요.");
    break;
  case 5:
    console.log("5층 내리세요.");
    break;
  default:
    console.log("당신은 내릴 층이 없습니다.");
}
```

- if와 switch 종합 예제

```js
const userRole = "ADMIN";

// if 문
if (userRole === "MEMBER") {
  console.log("회원");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원");
}

// switch 문
switch (userRole) {
  case "MEMBER":
    console.log("회원");
    break;
  case "ADMIN":
    console.log("관리자");
    break;
  default:
    console.log("비회원");
}
```

## 4. 반복문 (Loop)

- 동일한 실행을 반복하는 문법.

### 4.1. for 구문

- 주어진 횟수만큼 반복 실행 (반복 횟수를 아는 경우)

```js
// 초기값 : 단 한번만 실행
// 조건식 : 결과가 true/false인지 확인
// 증감식 :조건식이 false가 될때까지 반복하기 위한 것
for(초기값; 조건식; 증감식){
  반복할 코드 작성
}
```

```js
const total = 10; // 반복 횟수를 보통 변수로 빼둠
for (let i = 0; 1 < total; i++) {
  console.log(`현재 ${i} 입니다.`);
}
```

- 예제) 총 합계 값 알아내기

```js
// 장바구니에 담긴 제품 가격 모음
const bucketArr = [1000, 500, 700, 400];
const total = bucketArr.length; // 반복 횟수

// 반복문 사용X
let totalPrice = bucketArr[0] + bucketArr[1] + bucketArr[2] + bucketArr[3];

// 반복문 사용O
totalPrice = 0;
for (let i = 0; i < total; i++) {
  // totalPrice = totalPrice + bucketArr[i];
  totalPrice += bucketArr[i];
}
```

- 예제) 제품의 이름과 가격 및 재고를 html 태그로 출력하기
- 예제) 백엔드에서 제품의 목록은 JSON으로 주어짐.

```js
// 백엔드에서 가져온 자료 JSON
const goodData = [
  { id: 542, name: "사과", price: 1000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 0 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];
// 반복 횟수가 필요함
const total = goodData.length;
for (let i = 0; i < total; i++) {
  // 제품 1개를 뽑아서 보관한다.
  const good = goodData[i];
  // html 만들기
  const tag = `<div id="${good.id}" class="good_box">
    <p>제품명 : ${good.name}</p>
    <p>가격 : ${good.price}</p>
    <p>재고 : ${good.stock || "재고가 없어요"}</p>
  </div>`;
}
```

- 예제) 구구단
- 가까운 for 문에서 `break`는 반복문 빠져나오고 종료하는 역할
- 가까운 for 문에서 `continue`는 반복문 실행 건너뛰고 반복문 재실행.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i === 6) {
    break; // for문 빠져나오기
  }

  console.log(i + " 단");
  for (let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

### 4.2. for in 구문

- for 문으로 모두 가능함.
- for를 `객체를 대상`으로 편리하게 사용하도록 지원.

- for in 구문 예제 (대상은 객체 속성 반복)

```js
const singer = {
  id: "123",
  name: "아이유",
  age: 30,
  city: "서울",
};

// 개발자가 직접 알아내는 경우
// console.log(singer.id);
// console.log(singer.name);
// console.log(singer.age);

//반복문 활용
for (let key in singer) {
  console.log(key);
  // console.log(singer.key); 는 안나옴 key라는 key 값이 없기 때문
  console.log(singer[key]);
}
const bts = {
  id: "123",
  name: "bts",
  age: [30, 20, 33],
  city: "서울",
};

for (let key in bts) {
  // console.log(singer.key); 는 안나옴 key라는 key 값이 없기 때문
  console.log(`${key}: ${bts[key]}`);
}

// 인터파크 예시
const good = {
  productNum: 5502,
  targetProductService: "interTourR",
  targetProductId: "7",
  targetProductSubId: null,
  targetProductName: "[실시간 항공권] 인천 ↔ 나트랑",
  targetProductSubName: null,
  targetProductDetail: "",
  targetProductImageUrl:
    "https://common-live-vod.interparkcdn.net/data/image/20250106/14/96/20250106073804.jpg",
  targetProductOriginPrice: 221400,
  targetProductDiscountPrice: 0,
  targetProductPrice: 211400,
  targetProductLinkUrl:
    "https://travel.interpark.com/air/search/a:ICN-a:CXR-20250616/a:CXR-a:ICN-20250619?cabin=ECONOMY&infant=0&child=0&adult=1&byAirline=RS",
  targetDisplayStartTime: null,
  targetDisplayEndTime: null,
  displayOrder: 7,
  scheduleNum: 2010,
  status: 1,
  serviceName: "투어-해외여행",
};

for (let key in good) {
  console.log(`${key} : ${good[key]}`);
}
```

### 4.3. for of 구문

- for 문으로 모두 가능함.
- for를 `배열, 문자열 등을 대상`으로 편리하게 사용하도록 지원. (객체 제외. 객체는 순서가 없음.)
- iterator, 즉 `순서가 있는` 데이터형에서 사용.

```js
// 배열
const citiesArr = ["대구", "서울", "부산"];
for (let city of citiesArr) {
  console.log(city);
}
// 문자열
const words = "안녕하세요.반가워요.";
for (let i of words) {
  console.log(i);
}
```

### 4.4. while 구문

- `조건이 참`인 동안 무한히 반복함.
- 반복하는 횟수를 모르는 경우 사용

```js
// 반드시 거짓이 나올 수 있는 만들어서 빠져나갈 수 있게 해줘야 함. (while 내-외부)
while (조건) {
  코드;
}
```

```js
let count = 0;

while (count < 5) {
  // 거짓을 만들기 위한 조건을 작성함.
  count = count + 1;
  console.log(count);
}
```

### 4.5. do while 구문

- while과 다른 점은 한번 실행(do)하고 조건을 검사함.

```js
do {
  코드;
} while (조건);
```

```js
let count = 0;
do {
  count = count + 1;
  console.log(count);
} while (count < 5);
```

## 5. 함수 (function)

- 독립된 역할별 기능을 `{}` 으로 묶고 `function 함수명()`을 주어서 관리
- 여러번 재활용(`호출, call`) 할 수 있음.
- 문서(설명서:JSDoc)가 잘 만들어져야 함.
- 기능 예외 처리를 잘 해야 함.

### 5.1. 함수가 왜 필요한가?

- 반복되는 1줄 이상의 코드가 있을 때
- 코드에 대한 가독성이 중요/필요할 때
- 한번에 코드를 수정하여 다양한 곳에 동시에 반영되길 원할 때
- 코드에 안정성을 더할 생각을 할 때
- 협업 시 기능을 만들어서 재활용해야 할때 함수를 만들 생각을 해보기.

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능
let user_1 = "홍길동";
let user_2 = "김길동";
let user_3 = "박길동";
let user_4 = "고길동";
let user_5 = "정길동";
console.log(user_1 + "님 반가워요.");
console.log(user_2 + "님 반가워요.");
console.log(user_3 + "님 반가워요.");
console.log(user_4 + "님 반가워요.");
console.log(user_5 + "님 반가워요.");
```

- 기능을 구분해서 관리하고 싶다면(회원 명단, 인사 기능)

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 함수
// function 이름() {}
function useMember() {
  let user_1 = "홍길동";
  let user_2 = "김길동";
  let user_3 = "박길동";
  let user_4 = "고길동";
  let user_5 = "정길동";
  console.log(user_1 + "님 반가워요.");
  console.log(user_2 + "님 반가워요.");
  console.log(user_3 + "님 반가워요.");
  console.log(user_4 + "님 반가워요.");
  console.log(user_5 + "님 반가워요.");
}

//함수 활용, 함수 호출, 함수 call
useMember();
```

### 5.2. 함수 만들기

```js
// 함수 이름은 동사로 지정
function 함수명() {
  기능1;
  기능2;
  기능3;
}

// 함수에는 재료가 들어올 수 있음
function 함수명(재료1, 재료2, 재료3) {
  재료1 처리 기능1;
  재료2 처리 기능2;
  재료3 처리 기능3;
}
```

### 5.3. 예제) 계산기 만들기

- 단계1.

```js
const result_1 = 5 + 4;
const result_2 = 8 + 3;
const result_3 = 7 + 2;
const result_4 = 6 + 1;
```

- 단계2.

```js
function result_1() {
  5 + 4;
}
function result_2() {
  8 + 3;
}
function result_3() {
  7 + 2;
}
function result_4() {
  6 + 1;
}
```

- 단계3. (재료만 다르고 하는 일은 + 기능임을 주목)

```js
function add (재료1, 재료2) {
  재료1 + 재료 2;
}
add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계4. minus 기능 만들기

```js
// 재료 = 매개변수
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}

minus(5, 4);
```

- 단계5. 기능에 예외(오류) 처리 적용하기
- 오류 : 원하지 않는 결과(논리적 오류), Error을 포함한 것.

```js
// 매개변수 = 파라미더(parameter)라고 함
function add(매개변수1, 매개변수2){
  //방어코드 (예외처리)
  if (매개변수 1 === undefined){
    return alert("매개변수 1을 입력하세요.");
  }

  if (매개변수 2 === undefined){
    return alert("매개변수 2을 입력하세요.");
  }

  매개변수1 + 매개변수2
}

function minus(매개변수1, 매개변수2) {
  매개변수1 + 매개 변수2
}

add(5, "100"); // 원하지 않는 결과이므로 오류
add(5, undefined); // 논리적 오류
add(5); // "매개변수 2을 입력하세요."
```

### 5.4. JSDoc으로 함수 사용에 대해서 안내하기

- JSDoc 기본 이해
- 번거롭더라도 팀 내에서 작성 여부를 결정해야 함

```js
// 아래 양식이 JSDoc
/**
 * 두개의 변수를 받아서 덧셈하는 기능
 *  @param {number} numA - 첫번째 숫자
 *  @param {number} numB - 두번째 숫자
 *  @returns {number} 두 숫자의 덧셈 결과
 */

function add(numA, numB) {
  if (numA === undefined) {
    return alert("첫번째 매개변수 입력해주세요.");
  }
  if (numB === undefined) {
    return alert("두번째 매개변수 입력해주세요.");
  }

  return numA + numB;
}
```

- 더불어서 ESLint도 설정해야 함.
  - ESLint : JSDoc과 맞지 않으면 오류를 띄워 JS 실행을 못하게 함.

### 5.5. 예제) JSDoc을 이용한 계산기 함수 만들어보기

````js
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
````

### 5.6. 함수 예제

```js
/**
 * 메세지를 콘솔에 출력하기
 * @param {string} message - 출력할 메세지
 */
function showMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("반가워");
```

```js
/**
 * 배열을 받아서 요소를 출력하는 함수
 * @param {number[]} arr - 숫자 배열
 */
function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

```js
/**
 * 객체의 속성값을 출력하는 함수
 * @param { {id:number, nicName:string, age:number} } user - 사용자 객체
 */
function showUser(user) {
  console.log(user.id);
  console.log(user.nicName);
  console.log(user.age);
}
```

### 5.7. 함수의 기본 값 설정하기

````js
/**
 * 나이를 10살 더하여 출력함.
 * @param {number} age - 현재 나이
 * ```js
 * const result = showAge(10); // 20
 * ```
 */
function showAge(age = 0) {
  return age + 10;
}
````

### 5.8. 매개변수의 총 개수 자동으로 알아내기

```js
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

// rest 파라미터 이용
// 전달된 매개변수에 `정확한 값만 배열로` 만듦
// 기본 매개변수 적용 후, `나머지를 배열로 추출`함
function showTotal2(a, b, ...rest) {
  console.log(rest); //
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}
showTotal2(4, 5, 6, 7, 8, 9, 1, 2, 0);
// 매개변수 개수에 차이가 나거나 아예 매개변수가 없어도 오류가 일어나지 않음
// arguments로 받아들일 수 있음

/**
 * 입력된 매개 변수 만큼 총합계산하기
 * Rest 파라메터 이용하기
 * @param {...number} numbers - 숫자 값
 */
function showTotal(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

## 6. 함수 선언법의 이해

- 1. 일반적으로 함수를 만드는 법

```js
function 함수명(매개변수) {
  return 결과값;
}
함수명(매개변수);
```

- 2. `변수의 값`으로 함수를 만드는 법

```js
// 함수의 이름이 없음 - 익명 함수
// 매개변수처럼 사용하기 위해 이렇게도 만듦
const 변수명 = function (매개변수) {
  return 결과값;
};
변수명(매개변수);
```

- 3. 왜 변수명 = function() 형태가 필요한가?

```js
function add() {
  return 1 + 2;
}
// add();

const addFun = function () {
  return 1 + 2;
};
// addFun();

const minusFun = function () {
  return 1 - 2;
};
// minusFun

function test(_func) {
  _func();
}

test(add); // 값이 아니라서 안됨.

test(addFun);
test(minusFun);
```

- 아래 코드는 특히 위치를 살펴보자. 만들고 사용하는 것이 좋음(주의).

```js
add(); // `호이스팅`이 되므로 가능
addFN(); // 호이스팅 에러 발생(주의)
function add(){} // 변수가 아님
function addFN = function(){}; // 변수와 같음, 순서를 위에
```

## 7. 함수 추가 정리

### 7.1. 함수를 만들 시점 (언제 함수를 만들까에 대한 안내)

#### 7.1.1. 코드가 너무 긴 경우(`하나의 결과를 만들기 위해서 작성시`)

- 코드 가독성이 너무 떨어져서 추후 분석이 곤란할때
- 하나의 결과를 만들기 위한 과정을 작성중 너무 많은 코드가 작성될때
- 여러 줄이 작성되어서 한개의 결과를 만든다면 함수로 묶어서 만들까? 고민하자.

#### 7.1.2. 동일한 기능이 여러 번 사용될때

- 2번이상 동일한 기능이라면 함수를 만들까? 고민
- 2번이상 동일한 기능인데 재료(매개변수)만 다르다? 함수만들까? 고민

#### 7.1.3. 코드를 누군가에게 주어야 할때

- 코드를 공유할 때 함수만들까? 고민

### 7.2. 함수 만드는 법

- `{}` 로 코드 블럭을 이용해서 묶어주기
- 이름을 짓는데, `동사`로 짓기 (기본 : Camel, 생성자함수: Pascal )
- 이름 뒤에 `()` 를 작성한다.
- 이름 뒤에 `(재료, 재료)` 를 작성한다.
- 이름 뒤에 `(매개변수, 매개변수)` 를 작성한다.
- 이름 뒤에 `(parameter, paramter)` 를 작성한다.
- function 키워드를 작성해주기.
- `JSDoc` 으로 사용설명서를 작성해 주면 좋음

### 7.3. 함수 사용법(`호출, Call` 등으로 명칭함)

- 함수명();
- 함수명을 호출했다.
- 함수명 Call 했다.

### 7.4. 함수 샘플

- 넓이를 계산하는 기능, 그런데 2번이상 사용, 누군가에게 공유

````js
/**
 * 너비를 계산해 주는 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * -- 함수사용 예 --
 * ```js
 *  const result = calcRect(5, 4);
 * ```
 */

function calcRect(_width = 0, _height = 0) {
  // 추후에 무수하게 예외처리 코드가 작성됨
  // 업데이트 진행
  return _width * _height;
}

// 함수 호출
const result = calcRect(5, 4);
console.log(result);
````

### 7.5. 함수에 추가 지식

- 매개변수에 기본값을 지정 가능.

```js
function 함수명(매개변수 = 기본값) {}
```

- 매개변수 개수에는 제한 없음.

```js
function 함수명(매개변수1, 매개변수2) {
  const params = arguments; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
```

- arguments 보다 아래의 `rest` 파라미터를 쓰는 것을 권
- rest 파라미터는 나머지라는 의미이기 때문에 매개변수의 마지막 위치에 있어야 함.

```js
function 함수명(매개변수1, 매개변수2, ...rest) {
  const params = rest; // 배열로 접근 가능 (...<== 이 중요)
}
함수명(1, 2, 3, 4, 5);
```

- 기본 함수 작성법 2가지

```js
// 기본 함수 정의
function 함수명() {}

// 함수 표현식 정의
// 콜백을 하기 위함, 매개변수로 쓰기 위함
const 함수명 = function () {};
```

- 콜백 함수는 `특정한 이벤트`가 발생시 함께 실행

## 8. 화살표 함수(Arrow Function)

- FE에서 함수 작성 시 많이 볼 수 있는 형태
- 활용 비율이 높음.

### 8.1. 화살표 함수가 필요한 이유

- 함수가 간략해지며 최적화됨. (메모리 절약, 성능 최적화)
- this의 범위가 고정됨.
- new를 사용할 수 없음.

### 8.2. 화살표 함수 작성법

```js
// 기본 함수
function say() {
  console.log("안녕");
}

//표현식 함수
const say = function () {
  console.log("안녕");
};

const sayArrow = () => {
  console.log("안녕");
};

// 화살표 함수 (한줄일 시 중괄호 생략 가능)
// 매개변수가 없는 경우
const sayArrow = () => console.log("안녕");
```

- 매개변수가 오로지 `1개` 있을 때

```js
// 기본 함수
function say(_word) {
  console.log(_word);
}

// 표현식 함수
const say = function (_word) {
  console.log(_word);
};

// 화살표함수
const sayArrow = (_word) => {
  console.log(_word);
};

// 실행 코드가 1 줄이면 {} 생략 가능
// 매개변수가 1개면 () 생략 가능
const sayArrow2 = (_word) => console.log(_word);
```

- 매개변수가 오로지 `2개 이상` 있을 때

```js
// 기본 함수
function say(_word, _name) {
  console.log(_word + _name);
}

// 표현식 함수
const say = function (_word, _name) {
  console.log(_word + _name);
};

// 화살표함수
const sayArrow = (_word, _name) => {
  console.log(_word + _name);
};

// 실행 코드가 1 줄이면 {} 생략 가능
// 매개변수가 1개면 () 생략 가능
// 2개 이상부터 () 생략 불가능
const sayArrow2 = (_word, _name) => console.log(_word + _name);
```

## 9. Scope의 이해

- 변수의 활용 가능한 범위
- 가장 중요한 것은 `{}`

### 9.1. Scope 의 종류 2가지

- 전역 범위 : Global Scope
- 지역 범위 : Local Scope

### 9.2. 전역 범위

- 프로그램 어디서든 마음대로 접근해서 활용

```js
// 전역 변수
const appName = "JavaScript World";
{
  console.log(appName);
}

function say() {
  console.log(appName);
}
say();
```

### 9.3. 지역 범위

- `{}` 안쪽을 지역범위라고 함.

```js
{
  // 지역 변수
  const appName = "JavaScript World";
  console.log(appName);
}

function say() {
  // appName이 지역 변수여서 찾을 수 없는 변수로 생각하므로 에러 발생.
  // 지역에 없으면 전역에서 찾음(체이닝)
  console.log(appName);
}
say();
```

- 아래는 정상적으로 실행됨(function)
- function 키워드는 전역 범위에 등록됨(전역 스코프를 위한 메모리 공간이 따로 존재)
- function 키워드는 전역 범위에 등록하는 것이 좋다.

```js
// 전역 자리

// 지역 자리
{
  function say(_name) {
    console.log(_name + "안녕");
  }
  say("홍길동");
}

// 함수가 지역 자리에 정의되어 있어도 실행됨
// 변수는 그렇지 않음.
say("박길동");
```

- function은 전역에 등록되므로 예측하기 곤란함
- 아래 코드는 협업에 곤란한 상황 : 덮어쓰기

```js
// 전역 자리

// 개발자 홍길동 : 지역 자리
{
  function say(_name) {
    console.log(_name + "Hello");
  }
  say("홍길동");
}

// 개발자 고길동 : 지역자리
{
  function say(_name) {
    console.log(_name + "Hello");
  }
  say("고길동");
}

say("tester"); // Hello로 덮어씌워진 함수로 출력
```

- 아래 방법(표현식)을 권장

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}

// 개발자 홍길동 : 지역 자리
{
  // 표현식 방식을 사용하면 같은 이름의 함수가 충돌할 일 없음.
  const say = function (_name) {
    console.log(_name + "Hello");
  };
  say("홍길동");
}

// 개발자 고길동 : 지역자리
{
  const say = function (_name) {
    console.log(_name + "Hello");
  };
  say("고길동");
}

say("tester"); // 에러
```

- 화살표 함수로 표현

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자 홍길동 : 지역 자리
{
  const say = (_name) => console.log(_name + "Hello");
  say("홍길동");
}

// 개발자 고길동 : 지역자리
{
  const say = (_name) => console.log(_name + "Hello");
  say("고길동");
}

say("tester"); // 기본 실행 함수
```

## 10. this 키워드

- this가 scope와 연결되면서 혼란을 야기함.

### 10.1. 전역 스코프의 this

- `Window`라는 결과가 출력됨

```js
console.log(this); // Window{...
```

### 10.2. function의 this는 Window

- function 키워드 안에 써도, 어느 위치에 적어도 this가 최상위 전역 스코프를 가리켜서 결과가 같음

```js
console.log(this);

function say() {
  console.log(this); // Window{...

  function hi() {
    console.log(this); // Window{...
  }
  hi();
}
say();
```

```js
console.log(this);

const say = function () {
  console.log(this); // Window{...
};
say();
```

```js
console.log(this);

const say = () => {
  console.log(this); // Window{...
};
say();
```

### 10.3. 기본 function 또는 표현식 함수는 this 사용 시 위험할 수 있음.

- this 는 동일한 스코프를 가리켜서 값이 변할 위험 존재

### 10.4. 객채에 속성으로 만든 함수에서의 this

- 객체 안(로컬 스코프)에서 정의된 함수 내 this 는 객체를 가리킴.
- function을 사용 => `this`가 상황에 따라 변함(객체화할 함수가 아닌 일반 함수에서는 사용하지 않는게 좋음)

```js
const Person = {
  name: 아이유,
  age: 20,
  sayHi: function () {
    console.log(this);
  },
};
```

### 10.5. 객체 생성자 함수(new)로 사용 시 this

- 생성된 객체가 this가 됨.

```js
// 대문자 즉 Pascal
function Coffee() {
  console.log(this);
}

Coffee();
new Coffee(); // new 사용 => 객체를 생성하여 Coffee {} 를 가리킴(로컬 스코프)
```

### 10.6. 이해한 것 정리

- function에 작성한 this는 `어디서 함수를 사용했는가`에 따라 다름

```js
function say(){
  this ? // <== window
}
say(); // <== global 영역. window에서 사용했으므로
```

```js
const Person = { // 객체 안에서
  say: function(){
    this ? // Person 영역.
  }
}

Person.say(); // Person이 say를 사용했으므로
```

- 예제)

```js
const Person = {
  name: 아이유,
  say: function () {
    console.log(this.name);
    // 객체 안에 있는 name
  },
};

Person.say();
```

### 10.7. 화살표 함수의 this

- 화살표 함수는 `상위 스코프`를 가리킴

```js
// 여기는 window
const say = () => {
  console.log(this); // 현재의 상위 범위를 가리킴.
  // window 출력됨
};
say();
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name 찾는다

    setTimeout(function () {
      console.log(this); // window 가 호출
      console.log(this.name); // window.name 찾는다
    }, 3000);
  },
  sayArrow: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name 찾는다.
    setTimeout(() => {
      console.log(this); // 화살표는 나보다 위에 영역
      console.log(this.name); // 위에 영역.name
    }, 3000);
  },
};
Person.sayArrow();
```

## 11. 생성자 함수

- `객체를 생성`하는 것이 목적
- new 키워드를 붙여서 함수 호출

```js
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}

Person.say = function () {
  console.log(this.name + " 안녕하세요.");
};

const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

- `prototype`을 이용하면 공통 기능을 자동으로 부여함
- 원활하게 메모리 관리 가능

```js
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}

Person.prototype.say = function () {
  console.log(this.name + " 안녕하세요.");
};

const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

## 12. 클래스

- `객체를 생성`하는 것이 목적

### 12.1. 생성자 메소드 (constructor)

````js
class Person {
  // 클래스에서 메스도 함수 만드는 법
  메소드명() {}

  // 객체를 생성하는 함수 : 변경 불가한 부분
  // 디폴트 객체 생성자 함수(직접 안 만들면 스스로 만듦)
  constructor(_name) {
    console.log("new를 사용하면 자동 실행");
    console.log(_name);
    this.name = _name; // Person을 가리킴
  }
}

new Person("둘리"); // constructor()로 자동 실행
```js
````

### 12.2. 나의 메소드 만들기

- `메소드명() {할일}`

### 12.3. 나의 속성 만들기

- Property : 프로퍼티

```
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  // say 라는 메소드
  say() {
    console.log(this.name);
  }
}

const a = new Person("둘리", 500000);
a.say();
console.log(a);
```

### 12.4. 상속

````js
[정화섭] [오전 11:51]
### 12.3. 나의 속성 만들기

- Property : 프로퍼티
- constructor 메소드에서만들기

```js
 constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
````

- 단계 1

```js
// 동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 강아지
class Dog {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
```

- 단계 2.

```js
// 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1);
a.speak();

console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    this.name = "강아지";
  }
  speak() {
    console.log("멍멍이라고 소리를 내요");
  }
}

const b = new Dog();
b.speak();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹짹이라고 소리를 내요");
  }
}
const c = new Bird();
c.speak();
console.log(c);
```

- const a = {} // 객체 리터럴
- new fun() // 객체 생성 메소드
- new class // 객체 생성 클래스

### 12.5. 접근 제한자

- Property와 메소드를 활용하는 경우 제한 걸기

#### 12.5.1. 종류

- 만약 java일 경우

```java
public  // 마음대로 접근 가능 (공개적)
private // 클래스 내부에서만 접근 가능 (비공개적)
protected
```

- 만약 javaScript일 경우

```js
public  // 마음대로 접근 가능 (공개적)
# // 클래스 내부에서만 접근 가능 (비공개적, private)
```

```js
class Animal {
  eye; // public을 따로 적어주면 안되는듯
  #nose; // 붙여서 사용
  // let이나 const를 사용하지 않으면 속성이 됨
  // 생략하면 public, #은 기재해야만 private처럼 됨

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.nose); // private error
```

## 12.6. static

- 클래스에 고정된 속성, 메소드
- 클래스 내에서 prototype의 역할을 함

```js
class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}

// new를 사용하면 error
// static 변수나 메소드일 경우 .으로 접근해도 충분함
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
// 생성된 객체로 접근 불가
a.add(3, 4);
a.minus(3, 4);
```

## 13. callback(콜백) 함수

- `call` 은 함수를 실행(호출)한다는 의미
- 일반 함수에 매개변수로 전달된 함수를 말함.

### 13.1. callback(콜백) 함수 활용처

- 주로 사용자 행동에 따른 `이벤트 발생` 시 실행함.
- 서버 연동하여 자료를 호출하는 `이벤트 발생` 시 실행함.

```js
const say = funtion() {};
const cry = () => {};

function run(a) {
  a();
}

run(say);
run(cry);
// 아래 추천
run(function(){})
```

```js
const bt = document.querySelector(".bt");
bt.addEventListener("click", function () {});
```
