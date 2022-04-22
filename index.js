import cors from "cors"
import express from "express"

const app = express()
app.use(cors())
const users = [{
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]
const tweets = []

app.listen(5000)

app.post("/sign-up", (req, res) => {
    res.send([...users])
})

app.post("/tweets",(req,res)=>{
    res.send([...tweets])
})

app.get("/tweets", (req, res) => {
    res.send([...tweets])
})