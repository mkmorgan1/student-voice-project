import express from "express";
const app = express();
const PORT = 80;

/* SERVING HTML PAGE */
app.use(express.static("public"));

app.get("/upload", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
