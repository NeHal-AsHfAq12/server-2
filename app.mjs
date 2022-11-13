console.log("hello world");
import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/hello', (req, res) => {
  res.send('Hello friends chai peelo')
  console.log(`${req.ip} is saying hello`)

})
app.get('/bye', (req, res) => {
  res.send('Hello friends chai nahi peelo')
  console.log(`${req.ip} is saying bye`)

})
app.get('/', (req, res) => {
  res.send('Hello friends chai to peelo!!')
  console.log(`${req.ip} is saying nikal bhai`)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
