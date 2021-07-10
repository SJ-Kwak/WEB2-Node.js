//버전관리할 때는 이 파일로 저장. 보안을 위해.
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
});
db.connect();
module.exports = db;