import mongoose from "mongoose";
export const db = () => {
    mongoose
    .connect(process.env.MONGO_URI,{dbName: "RESTAURANT"})
    .then(()=>{
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    }).catch((err) => {
        console.log("ERROR");
    })};

     