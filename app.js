const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("start server : localhost:3000");
});

app.get("/app/users/:type", async (req, res) => {
  let { type } = req.params;
  let data = [{
    "name": "박지성",
    "city": "jeju"
  },
  {
    "name": "손흥민",
    "city": "seoul"
  },
  ];
  const sjon_data = JSON.stringify(data)
  res.send(sjon_data);

});