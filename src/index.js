const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/home.html"));
});

router.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/contato.html"));
});

app.use(router)

app.listen(process.env.PORT || 3333,()=>{
    console.log("Tudo ok");
})