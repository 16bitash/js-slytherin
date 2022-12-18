// function convertToJSON(response) {
//   return response.json();
// }

// function logData(data) {
//   console.log(data);
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "GET",
// })
//   .then(convertToJSON)
//   .then(logData);

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  console.log(data);
};

getPosts();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   },
// })
//   .then(convertToJSON)
//   .then(logData);

const createPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
  });

  const data = await response.json();

  console.log(data);
};

createPost();
