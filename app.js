let app = require("express")()


app.get("/",(req,res)=> {
	res.send("Welcome to Express module using docker");
})


app.listen(3000,()=>console.log("Server is running on port number 3000"));