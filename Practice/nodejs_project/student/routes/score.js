// score/list => 목록 보여주기
// score/view/1 => 상세보기, 총점, 평균
// score/writer => 등록화면으로 이동
// score/save => 배열에 추가하기


let scores = [
    {id:1, "name":"홍길동", kor:90, eng:80, math:70},
    {id:2, "name":"임꺽정", kor:80, eng:80, math:60}
]

var express = require('express');
var router = express.Router();

//socre/list
router.get("/list", (req, res) => {
    // views/score/score_list.ejs파일을 불러온다
    res.render("score/score_list", {list:scores});
})

//http://127.0.0.1:3000/score/view/1
router.get("/view/:id", (req, res) => {
    let id = req.params.id;
    let result = scores.filter((item) => item.id == id);

    let student = result[0];
    let total = student.kor + student.eng + student.math;
    let avg = total / 3;

    res.render("score/score_view", {view:student, total:total, avg:avg});
})

router.get("/writer", (req,res) => {
    res.render("score/score_writer");
})

router.post("/save", (req, res) => {
    let id = scores[scores.length - 1].id + 1;
    let name = req.body.name;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let math = req.body.math;


    scores.push({"id":id, "name":name, "kor":kor, "eng":eng, "math":math});
    res.redirect("/score/list");
})

module.exports = router;