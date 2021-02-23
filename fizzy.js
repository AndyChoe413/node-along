const getInput = require("./get-input.js");
const fizzy = require("./fizzy-solution.js");

const n = getInput()
const answer = fizzy(n)
console.log(answer)

