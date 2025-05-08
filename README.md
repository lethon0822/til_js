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
