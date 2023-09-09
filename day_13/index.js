const express=require("express")
const https=require("https")
const app=express()

app.get("/",function(req,res){
  https.get("https://api.kanye.rest/",function(respone){
    // console.log(respone)
    respone.on("data",function(data){
       res.write("<h1>quote for the day </h1>")
       res.write(JSON.parse(data).quote)
       res.send()
    })
  })
})

app.listen(3000,function(){
    console.log("Server is up and running")
})