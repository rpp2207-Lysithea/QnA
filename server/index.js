require('dotenv').config();
const app = require("./app.js");
app.listen(process.env.port, () =>{
  console.log(`app listening on port ${process.env.port}`)
});
