const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// fs.writeFileSync("1-json.json", JSON.stringify(book));

const bookJsonBuffer = fs.readFileSync("1-json.json").toString();
console.log(bookJsonBuffer);

var parsedBook = JSON.parse(bookJsonBuffer);
console.log(parsedBook);

parsedBook.name = "Kamal";
parsedBook.age = 22;

fs.writeFileSync("1-json.json", JSON.stringify(parsedBook));
