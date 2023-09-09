const express=require("express")
const body=require("body-parser")
const app=express()
app.use(body.urlencoded({extended:true}))



app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html")
    // res.send("<h1>Hello crule world</h1>")
})

// app.get("/contact",function(req,res){
//     res.sendFile(__dirname+"/contact.html")
//     // res.send("<h2>IAM SUDEEP</h2>")
// })


// app.get("/about",function(req,res){
//     res.sendFile(__dirname+"/about.html")
//     // res.send("<h2>IAM SUDEEP</h2>")
// })

app.post("/login",function(req,res){
    var username=req.body.username
    var password=req.body.password
    res.send(username+password)
    console.log(req.body)
    // res.sendFile(__dirname+"/login.html")
})

app.post("/about",function(req,res){
    res.sendFile(__dirname+"/about.html")
})


app.listen(3000,function(){
    console.log("Server started on port 3000")
})