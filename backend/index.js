import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());  
dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 3001;
 const allowedOrigins = process.env.CLIENT_ORIGIN.split(',');
app.use(cors({
    origin: allowedOrigins, // Replace with your React app's URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
}));

app.get("/", (req, res) => {
    res.send("Hello Guys welcome");
});

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    })
    .catch((err) => {
        console.error("Mongodb connection error", err);
        process.exit(1);
    });


import authRouter from "./routes/user.route.js";
import savedsongRouter from "./routes/saved.route.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/songs", savedsongRouter);