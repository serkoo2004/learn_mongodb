const express = require('express');
const app = express();
const router = express.Router();

const fs = require("fs");

let routes = fs.readdirSync("./");

for (let route of routes) {
  if(route.includes(".js") && route != "index.js") {
    router.use("/"+route.replace(".js", ""), require('./'+route));
  }
}

module.exports = router;
