const mongoose=require("mongoose")

const uri="mongodb+srv://mdnusrat007:najat0007@nusrathcluster.wqmpfwx.mongodb.net/gymdata?retryWrites=true&w=majority";
mongoose.connect(uri)
.then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log("Database connection failed")
    console.error(error)
})
