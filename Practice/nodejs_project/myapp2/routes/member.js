var express = require('express');
var router = express.Router();

//const에는 새로운 공간이 할당되면 안됨! 안에 값은 바뀌어도 됨!
const members=[
    {"id":"1", username:"홍길동", userid:"user01", "password":"1234"},
    {"id":"2", username:"임꺽정", userid:"user02", "password":"1234"}
];

//로그온 - 로그온 페이지 이동
//       - 디비에 존재하는지 확인
router.get('/logon', function(req, res, next){
    res.render("member/logon");
});

router.post('/logon', function(req, res, next){
    const {userid, password} = req.body;
    //request 객체의 body -> JSON 객체
    //let userid = req.body.userid;

    let result = members.filter((m) => { return m.userid == userid });
    console.log(result);

    if(result.length == 0)
    {
        res.send({"result":"FAIL", "msg":"해당 아이디가 없습니다."});
        return;
    }

    if(result[0].password != password)
    {
        res.send({"result":"FAIL", "msg":"패스워드가 일치하지 않습니다."});
        return;
    }

    res.send({"result":"OK", "msg":"로그온 성공"});
});

router.get("/write", (req, res, next) => {
    res.render("member/member_write");
})

router.post("/join", (req, res, next) => {
    const {userid, password, username} = req.body;
    console.log(userid, req.body);

    let id = members[members.length - 1]+1;

    members.push({"id":id, "name":username, "userid":userid, "password":password});
    res.send({"result":"OK", "msg":"회원 가입 성공"});
})

module.exports = router;