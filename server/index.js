var express = require('express') // node_module 내 express 관련 코드를 가져온다.
var app = express()
var logger = require('morgan')
var mongoose = require('mongoose')
var routes = require('./src/routes')

app.use(express.json())
app.use(logger('tiny'))

app.use("/dic",routes)

const CONNECT_URL = 'mongodb://localhost:27017/kor_dic_db' 
mongoose.connect(CONNECT_URL, { // Mongo DB 서버 연결 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => console.log("mongodb connected ...")) 
    .catch(e => console.log(`failed to connect mongodb: ${e}`))

app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.use( (req, res, next) => { // 사용자가 요청한 페이지가 없는 경우 에러처리 
    res.status(404).send("Sorry can't find page") })

app.use( (req, res, next) => {
    console.error(err.stack)  
    res.status(500).send("Something is broken on server") })


app.listen(5000, ()=>{
    console.log('server is lunning on port 5000....')
})