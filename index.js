var express = require('express');
var app = express();
//Подключаем дополнительные плагины
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));    // to support URL-encoded bodies
app.use(express.static("./"));//Для статических файлов(если такее есть(index.html))

//Старт сервера
app.listen(3000, function () {
  console.log('Start Server 127.0.0.1 on port 3000!');
});


//Робота с файламы
//Добработка логирования
/*var fs = require("fs");
app.get('/add', function (req, res) {//Пример GET запроса

  fs.open("Log.txt", "a", 0644, function(err, file_handle) {
    if (!err) {
      var d =new Date();
      var data = {};
      data.time = d.getHours()+":"+d.getMinutes();
      if (req.query.t) data.t =Number(req.query.t);
      if (req.query.h) data.h =Number(req.query.h);

      fs.write(file_handle, JSON.stringify(data)+'\n', null, 'ascii', function(err, written) {
        if (!err) {
          // Всё прошло хорошо
          console.log("add record "+ Date());
        } else {
          // Произошла ошибка при записи
          console.log("err add record "+ Date());
        }
      });
    } else {
      console.log("err open File ");
      // Обработка ошибок при открытии
    }
  });
  res.send("Good");
  res.end();
});*/


//Код сервера влажность
app.get('/humidity', function (req, res) {//Пример GET запроса
  var temp = "Humidity:" + getRandomArbitary(30,70).toFixed(0);
  console.log(temp);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(temp);
  res.end();
});

//Код сервера температура
app.get('/temperature', function (req, res) {//Пример GET запроса
  var temp = "Temperature:" + getRandomArbitary(16,27).toFixed(2);
  console.log(temp);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(temp);
  res.end();
});

function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}

//what are you
app.get('/whatareyou', function (req, res) {//Пример GET запроса
  console.log("what are you");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var str="";
  str=str+"Emulator Arduino+Ethernet\n\r";
  str=str+"support command:\n\r";
  str=str+"temperature - Degrees Celsius\n\r";
  str=str+"humidity - Humidity in percent";
  res.end(str);
});