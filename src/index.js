const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
const route = require("./routes/route");
const cors = require('cors');

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use((err, req, res, next) => {
    if (err.message === "Unexpected end of JSON input") {
      return res.status(400).send({status: false,message: "ERROR Parsing Data, Please Provide a Valid JSON",
        });
    } else {
      next();
    }
  });

mongoose.connect(process.env.mongo_url,{
    useNewUrlParser : true
})
.then(()=> console.log("DB is connected"))
.catch(err=> console.log(err.response.data.message));

app.use('/',route);

app.listen(process.env.port||3000, function(){
    console.log(`Server online on port ${process.env.port||3000}`)
});