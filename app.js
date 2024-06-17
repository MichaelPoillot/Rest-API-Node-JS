import express from "express";
import connection from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Cek Connection
connection.connect((error) => {
    if (error) {
      console.error('Error i looo blok a on XAMPP mu mati paling');
      return;
    }
    console.log('Connected to database!');
  });

app.listen(5000, () => console.log("Server running at port 5000"));


