class Student {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  sayName() {
    console.log(this.name);
  }

  // class의 화살표는 객체로 인정
  sayAge = () => {
    console.log(this.age);
  };
  sayHi() {
    console.log(this.name + "!");
  }
}
const student_1 = new Student("홍길동", 20);
