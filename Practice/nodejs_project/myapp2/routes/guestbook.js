//CRUD - create, read, update, delete
//방명록 -> 만들고 읽고 수정하고 삭제하고
// guestbook/list - 목록화면
// guestbook/view/1 - 상세화면
// guestbook/write - 글쓰기 화면 이동
// guestbook/save - 실제 디비에 저장
// guestbook/modify - 수정화면으로 이동
// guestbook/save - 수정 완료
// guestbook/delete  - 삭제

//data를 json으로 만듦
let guestbooks = [
    {id:1, "title":"놀러옴", "writer":"홍길동"},
    {id:2, "title":"놀러옴2", "writer":"장길산"},
    {id:3, "title":"놀러옴3", "writer":"임꺽정"},
    {id:4, "title":"놀러옴4", "writer":"홍경래"},
    {id:5, "title":"놀러옴5", "writer":"이징옥"}
]

var express = require('express');
var router = express.Router();

// /guestbook/list
router.get("/list", (req, res) => {
    //views/guestbook/guestbook_list.ejs파일을 불러온다
    res.render("guestbook/guestbook_list", {list:guestbooks});
})

//http://127.0.0.1:3000/guestbook/view/1
router.get("/view/:id", (req, res) => {
    let id = req.params.id;
    //배열에서 해당 id가 존재하는지? id값을 갖는 요소의 배열을 반환 받음
    let result = guestbooks.filter((item) => item.id == id);

    //첫번째 하나만 전송
    res.render("guestbook/guestbook_view", {view:result[0]});
})

router.get("/write", (req, res) => {
    //페이지 이동용으로만 사용한다
    res.render("guestbook/guestbook_write");
})

router.post("/save", (req, res) => {
    //파라미터를 받는다
    let id = guestbooks[guestbooks.length - 1].id+1;
    let title = req.body.title;
    let writer = req.body.writer;

    //등록 후에는 ejs 파일 전송이 아니고 다른 페이지로 이동
    guestbooks.push({"id":id, "title":title, "writer":writer});
    res.redirect("/guestbook/list"); //새로운 페이지 이동 - 함수 직접 호출x 꼭 redirect
})

module.exports = router;