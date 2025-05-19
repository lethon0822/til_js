async function getAllData() {
  try {
    // BE 데이터 연동 시도 (주소 입력)
    let res = await fetch(`${apiUrl}/posts`);
    let data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/comments");
    data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/photos");
    data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = res.data.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = res.data.json();
    console.log(data);
  } catch (error) {
    console.log("Error : " + error);
  }
}

getAllData();
