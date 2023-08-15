const fs = require("fs");
const url = require("url");
const http = require("http");
const overview = fs.readFileSync("./templates/template-overview.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const tempCard = fs.readFileSync("./templates/temp-card.html", "utf-8");
const data = fs.readFileSync("./data/data.json");
const dataObj = JSON.parse(data);
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output
};
const server = http.createServer((req, res) => {
  const { query, pathname} = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join("");
    const output = overview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    let data = dataObj[query.id];
    let output = replaceTemplate(product, data);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(dataObj);
  } else {
    res.writeHead(404);
    res.end("<h5>Page not found</h5>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on 8000");
});
