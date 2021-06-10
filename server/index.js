import express from "express";
const app = express();
const PORT = 80;

// SERVING HTML
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

console.log("here");
