let app = require("express")()

app("/",(req,res)=> {
	res.send("Successfull done")
})

app.listen(9999,()=>console.log("running server"))