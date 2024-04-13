const express = require('express')
const OpenAI = require('openai')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path');
const messages=[]
const openai = new OpenAI({
  apiKey: "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" 
});

async function main(input) {
  messages.push({ role: 'user', content: input })
  console.log(messages)
  const chatCompletion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0]?.message?.content;
}



app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/api', async function(req, res, next) {
  console.log(req.body)
  const mes=await main(req.body.input)
  res.json({success:true , message:mes})
})


app.listen(port, () => {
  // Code.....
})