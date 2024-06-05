var express = require('express');
var router = express.Router();

let scoreList = [
    {id:1, name:"홍길동", kor:90, eng:80, mat:70},
    {id:2, name:"임꺽정", kor:100, eng:100, mat:90}
];

router.get("/list", (req, res) => {
    res.send(scoreList);
})

//get방식은 정보가 다 드러남, 한글은 깨짐
//파일전송은 무조건 post 다 무제한 가능하다. 20~30mb 정도만
router.post("/save", (req, res) => {
    let id = scoreList[scoreList.length-1].id+1;
    let score = { id:id,
        name : req.body.name,
        kor : req.body.kor,
        eng : req.body.eng,
        mat : req.body.mat
    }
    scoreList.push(score);
    res.send(scoreList);
})

router.get("/view/:id", (req, res) => {
    let id = req.params.id;
    let find = scoreList.find( e => e.id == id);
    if(find == null)
    {
        res.send({status:"fail", "msg":"해당 데이터가 없습니다"});
        return;
    }
    res.send({status:"success", score:find});
})

module.exports = router;
