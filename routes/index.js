var express = require('express');
var router = express.Router();
var readerfile = require("../control/readermd.js");
var fs = require("fs");
var markdown = require("markdown").markdown;

router.get('/page', function(req, res, next) {
  //跨域
  res.header("Access-Control-Allow-Origin", "*"); 

  if(req.headers['x-requested-with']!='XMLHttpRequest'){
      var html = fs.readFileSync('./fe_app/app/index.html','utf-8');
      res.send(html);
      return;
  }

  var path = req.query.seacherpage;
  if(path) {
      var md = fs.readFileSync(path, "utf-8");
      var str = markdown.toHTML(md).replace(/<a href=/g, "<a data-path=");
      res.send(str);
      return;
  }else {
  res.render('index', { title: 'Express' });
  }
});

//导航树创建
router.get("/nav", function(req, res, next){
	//跨域
	res.header("Access-Control-Allow-Origin", "*");
	var listjson = readerfile();
	res.json({"navlist":listjson});
})



module.exports = router;
