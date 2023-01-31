const file = require('fs')


file.readFile("test.json", "utf-8", (e, data) => {
  let datas = JSON.parse(data);
  console.log(datas)
})