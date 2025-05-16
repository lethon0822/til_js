return new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
    } else if (xhr.status === 404) {
    } else if (xhr.status === 505) {
    }
  };
});
