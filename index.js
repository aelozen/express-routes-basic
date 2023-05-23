const express = require('express')

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());
let options = {
    dotfiles: "ignore", //hides the key, comment out to show
    redirect:false
}

app.use(express.static('public',options)) //create options above

app.get("/",(req,res)=>{
let html = "<img src='img/tenor.gif'/>"
let key = "<a href='.secret/key.txt'>This is a Secret Key</a>"
res.send(html+key)
}
)

app.listen(4000,()=>console.log('Listening on 4000'))