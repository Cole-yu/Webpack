var http=require("http");
var mysql  = require('mysql');

http.createServer(function(req,res){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',                   
    database: 'user_cmx' 
  }); 
   
  connection.connect();
   
  var  sql = "select name,age from user where name='yfx'";

  //查
  connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
   
          console.log('--------------------------SELECT----------------------------');

          // result 是个数组对象 result=[{"name":"yfx","age":"27"}]
          console.log(result);
        
          res.writeHead(200,{
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type",
            "Content-Type":"applicaiton/json,charset=utf-8"
          });

          var data=JSON.stringify(result);

          res.write(data);

          res.end();      
         console.log('------------------------------------------------------------\n\n');  
  });
   
  connection.end();  

}).listen(3000);
console.log("http server is listening at loacalhost:3000");
