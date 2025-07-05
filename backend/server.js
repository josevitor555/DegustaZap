// import dotenv
import dotenv from "dotenv";
dotenv.config();


// import express
import express from "express";

// import connectMongo
import connectMongo from "./connectToMongoDB/connect.js";

// create express app
const app = express();

// Import cors
import cors from "cors";
app.use(cors());
app.use(express.json());

// Import auth routes
import authRoutes from "./routes/routes.js";
app.use("/api/auth", authRoutes);

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello from server!");
});

// Examples with /api/auth/
// /api/auth/register
// /api/auth/login
// /api/auth/logout

// Connect to MongoDB
await connectMongo();

// define port
const port = process.env.PORT || 3000;

// start server
app.listen(port, () => console.log(`Server is running on ${port} port!`));
