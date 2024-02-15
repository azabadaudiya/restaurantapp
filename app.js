import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {db} from './database/db.js';
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './route/reservationRoute.js';
const app = express();
dotenv.config({path: './config/config.env'});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);
db();

app.use(errorMiddleware);
export default app;