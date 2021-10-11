const express = require("express")
const path = require("path")
const app = express()

const publicPath = path.resolve(__dirname,"./public")
app.use(express.static(publicPath))
app.use(express.urlencoded())

app.get("/", (req,res)=>{
    let file = path.join(__dirname,"./views/home.html")
    res.sendFile(file)
})

app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/views/register.html")
})

app.post("/resultado-register",(req,res)=>{
    res.redirect("/")
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/views/login.html")
})

app.post("/resultado-login",(req,res)=>{
    res.redirect("/")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running")
})