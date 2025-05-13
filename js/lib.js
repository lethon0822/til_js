console.log(this);
let brand = "NAVER";
function say() {
  console.log(this); // Window{...
  this.brand = "KKO";

  function hi() {
    console.log(this); // Window{...
  }
  hi();
}
say();
