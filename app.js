  // const express = require('express')
  // const app = express()
  // port = 3000

  // app.get('/', function (req, res) {
  // res.send('<h1>Hello World from Node.js!</h1>')
  // })

  // app.listen(port, function() {
  // console.log('Hello World app listening on port ' + port);
  // })

  const express = require('express');
  const app = express();
  const path = require('path');
  const router = express.Router();
  
  
  router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log('Display Index.html');
    //__dirname : It will resolve to your project folder.
  });
  
  // app.get('/main.css', function(req, res) {
  //     res.sendFile(__dirname + "/assets/css/main.css");
  //   });
  app.use(express.static(__dirname));
  //app.use(express.static(__dirname + '/assets'));
  router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });
  
  router.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname+'/sitemap.html'));
  });
  
  //add the router
  app.use('/', router);
  app.listen(process.env.port || 3000);
  
  console.log('Running at Port 3000');
  console.log("Let's go!");