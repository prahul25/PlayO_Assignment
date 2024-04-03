import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import getCustomerData from "./Controllers/index.controllers.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/api/customers", getCustomerData);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
