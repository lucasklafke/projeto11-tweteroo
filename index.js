import cors from "cors"
import express, {json} from "express"

const app = express()
app.use(cors())
app.use(json())
const users = [{
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]
const tweets = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
}]

app.listen(5000)

app.post("/sign-up", (req, res) => {
    const  user = req.body
    users.unshift({
        username: user.username,
        avatar: user.avatar
    })
    res.send([...users])
})

app.post("/tweets",(req,res)=>{
    const tweet = req.body
    let user = users.find(user=>user.username === tweet.username)
    tweets.unshift({
        username: tweet.username,
        avatar: user.avatar,
        tweet: tweet.tweet
    })
    res.send([...tweets])
})

app.get("/tweets", (req, res) => {
    res.send([...tweets.slice(0,10)])
})