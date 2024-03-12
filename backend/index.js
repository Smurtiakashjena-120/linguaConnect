const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");

app.use(cors());

app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);

const PORT=process.env.port || 3000;
;



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})