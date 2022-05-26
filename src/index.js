const { response } = require("express");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Course1", "Course2", "Course3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(["Course1", "Course2", "Course3", "Course4"]);
});

app.put("/courses/:id", (request, response) => {
  const {id} = request.params;
  console.log(id);
  return response.json(["Course6", "Course2", "Course3", "Course4"]);
});

app.patch("/courses/:id", (resquest, response) => {
  return response.json(["Course6", "Course7", "Course3", "Course4"]);
});

app.delete("/courses/:id", (resquest, response) => {
  return response.json(["Course6", "Course7", "Course4"]);
});

app.listen(2222);