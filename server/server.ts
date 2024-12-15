import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

//CRETA server
app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with Port ${process.env.PORT}`);
    connectDB();
});