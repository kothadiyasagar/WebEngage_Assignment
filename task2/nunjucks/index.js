const nunjucks = require("nunjucks"); 
const userData = require("./user.json");
const fs = require("fs");

nunjucks.configure({
  autoescape: true,
}); //configuring the nunjucks for use
nunjucks.configure("data", {
  autoescape: true,
});

let outPut = nunjucks.render("index.njk", userData);
fs.writeFileSync("./output/index.html", outPut);
console.log("success");

