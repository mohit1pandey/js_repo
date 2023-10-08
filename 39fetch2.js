// POST (Create):

//The POST method is primarily used to submit data to a server to create a new resource.

//PUT (Update):

//The PUT method is used to update an existing resource on the server or create a new resource at a specific URL.

let option={
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

//   let option2={
//     method: 'POST',
//     body: JSON.stringify({
//       id: 2,
//       title: 'goo',
//       body: 'bar',
//       userId: 2,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }

// fetch('https://jsonplaceholder.typicode.com/posts/1',option)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   fetch()

fetch('https://jsonplaceholder.typicode.com/posts/1',option)
  .then((response) => response.json())
  .then((json) => console.log(json));
