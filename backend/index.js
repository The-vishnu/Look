import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/Routes/auth.routes.js';
import { connectDB } from './src/lib/db.js';


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Look-It AI powered shopping platform" });
});

app.get("/api", (req, res) => {
    res.status(200).json({ message: "API endpoint working!" });
});

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});
