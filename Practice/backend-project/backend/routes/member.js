var express = require('express');
var router = express.Router();

let memberList = [
    {id:1, userid:'test', password:"1234", username:"홍길동"},
    {id:2, userid:'test1', password:"1234", username:"박희동"},
    {id:3, userid:'test2', password:"1234", username:"고길동"},
    {id:4, userid:'test3', password:"1234", username:"둘리"},
    {id:5, userid:'test4', password:"1234", username:"도우너"}
];

router.get('/', function(req, res, next){
    res.send('respond with a resource');
});

router.get('/list', function(req, res, next){
    //send 함수는 
    res.send(memberList)
});

//추가
router.post('/save', function(req, res, next){
    //post => req.body
    //query => req.query
    //params => req.params
    let id = memberList[memberList.length - 1].id + 1;
    let member = {
        id:id,
        userid : req.body.userid,
        username : req.body.username,
        password : req.body.password
    }

    memberList.push(member);

    res.send({status:"success", member : member});
});

router.get('/view/:id', function(req, res, next){
    let id = req.params.id;
    let member = memberList.find(e => e.id == id)
    if(member == null){
        res.send({status:"fail", msg:"해당 데이터가 없습니다."});
    }
    else{
        res.send({status:"success", member:member});
    }
});

router.post('/update/:id', function(req, res, next){
    let id = req.params.id;
    let member = {
        id:id,
        userid : req.body.userid,
        username : req.body.username,
        password : req.body.password
    }

    let find = memberList.find(e => e.id == id);
    if(find == null){
        res.send({status:"fail", msg:"해당 데이터가 없습니다."});
    }
    else{
        find.userid = member.userid;
        find.username = member.username;
        find.password = member.password;

        console.log(memberList);
        res.send({status:"success", member:find});
    }
});

router.post('/delete/:id', function(req, res, next){
    let id = req.params.id;    
    let find = memberList.findIndex(e => e.id == id);
    console.log(find);
    if(find == -1)
    {
        res.send({status:"fail", msg:"해당 데이터가 없습니다."});
    }
    else
    {
        memberList.splice(find, 1); //해당위치에서 1개 삭제
        console.log(memberList);
        res.send({status:"success", member:find});
    }
});

module.exports = router;