require('dotenv').config();
const express=require('express');
const router = require("./routes/adminRoutes");
const connectDB = require('./utils/db');
const adminRouter = require('./routes/adminRoutes');
const app=express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/auth",adminRouter);

const PORT = process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}
).catch((error)=>{  
    console.log(error);
});
