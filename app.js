  const express = require('express')
  const app = express()
  port = 3000

  app.get('/', function (req, res) {
  res.send('<h1>Hello World from Node.js!</h1>')
  })

  app.listen(port, function() {
  console.log('Hello World app listening on port ' + port);
  })