import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDatabase from './db.js';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/config.env" });
}

// Connect to MongoDB
connectDatabase();

// import route
import user from './routes/userRoutes.js';
import mobile from './routes/mobileRoutes.js';

app.use("/api/v1",user);
app.use("/api/v1",mobile);
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});