import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");
  //JSON
  response.json(["João", "Victor", "Fulano", "Cicrano"]);
});

app.listen(3333); // npx ts-node src/server.ts
// http://localhost:3333/users
