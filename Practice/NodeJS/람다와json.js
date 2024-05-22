//람다와json.js

//람다 = 레코드! DB 중 한 사람의 데이터!
let scores = [
    {id:1, name:"홍길동", kor:90, eng:80, mat:70},
    {id:2, name:"임꺽정", kor:100, eng:70, mat:90},
    {id:3, name:"조승연", kor:95, eng:100, mat:100},
    {id:4, name:"강형구", kor:80, eng:60, mat:90},
    {id:5, name:"강감찬", kor:70, eng:80, mat:80},
    {id:6, name:"서희", kor:90, eng:80, mat:70}
];

function output()
{
    //scores는 객체 배열을 전달, forEach에는 배열의 요소 하나
    //Number, String : 현재는 JSON 객체
    scores.forEach((s) => {
        console.log(`${s.name} ${s.total} ${s.avg}`);
    });
}

//총점 구하기
function process()
{
    scores.forEach((s) => {
        s.total = s.kor + s.eng + s.mat;
        //s["total"] = s["kor"] + s["eng"] + s["mat"]
        s.avg = (s.total / 3).toFixed(2); //정수 / 정수 = 실수
    });
}

//오버로딩x 같은 이름으로 함수 만들지x
//유사) 매개변수에 디폴트값을 줄 수 있다 >>> search() search(90)
//평균 80점 이상 구하기
function checkAvg(limit = 80)
{
    let result = scores.filter(s => s.avg >= limit);
    console.log(result);
}

function compare(a, b)
{
    if(a.total > b.total)
        return 1;
    else if(a.total < b.total)
        return -1;
    else
        return 0;
}

function sort()
{
    //scores.sort(compare);
    //scores.sort((a, b) => a.total - b.total); //반환x 원본이 변경되는 것
    //console.log(scores);

    //toSorted 원본을 놔두고 정렬한 객체를 반환한다.
    scores.toSorted((a, b) => b.total - a.total)
    .forEach(s => {
        console.log(`${s.name} ${s.total} ${s.avg}`);
    });
}

process()
output()

checkAvg(90)
sort()