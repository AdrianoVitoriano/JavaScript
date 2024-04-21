import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});
app.get("/user", (req, res) => {
  res.json({ nome: "Adriano", idade: 19 });
});
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
