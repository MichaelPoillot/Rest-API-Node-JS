import express from "express";
import connection from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to database!');
});


app.use(bodyParser.json());
app.use(router);


app.listen(5000, () => console.log("Server running at port 5000"));