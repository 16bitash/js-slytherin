function convertToJSON(response) {
  return response.json();
}

function logData(data) {
  console.log(data);
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(convertToJSON)
  .then(logData);

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: {
    title: "foo",
    body: "bar",
    userId: 1,
  },
})
  .then(convertToJSON)
  .then(logData);
