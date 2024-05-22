//1~n까지의 합계를 구하는 동기함수

//동기함수 => 함수 앞에 async를 붙이면 함수가 promise 객체를 반환한다.
async function sigma(limit)
{
    sum = 0;
    for(i = 1; i < limit; i++)
    {
        sum += 1;
    }

    return sum;
}

limit=100;
let pro = new Promise(function(resolve, reject){
    //제작코드 시작
    if(limit < 10)
        reject("10보다 큰 수를 주세요.");

    sum = 0;
    for(i = 0; i <= limit; i++)
    {
        sum+=i;
    }

    resolve(sum); //return 사용못함
    //제작코드 종료
})  //소비코드
.then((result)=>{
    console.log("결과는 ", result);
})
.catch((error)=>{
    console.log("error");
})

//비동기 >>> then(성공), catch(에러)가 항상 따라다님
//비동기는 응답이 늦게 옴
//사용하고 싶은 코드 쓰고
//DB에서 데이터 불러오거나 네트워크에서 불러오는 ? 좀 장시간! >>> promies

/*  동기식 처리를 쉽게 비동기식 처리로 바꿀 수 있는 클래스임
    
    let promise = new Promise(callback(resolve, reject){});
    리턴 받은 값은 Promise 객체 주소값이다.


*/

//console.log(sigma(100));
sigma(100)
.then(result=>console.log(result));

//await 명령어를 사용하면 promise 객체가 작업을 완료하기를 기다린다.
//SyntaxError: await is only valid in async functions and the top level bodies of modules
//await은 꼭!! async 함수 안에서만 쓸 수 있음

async function main()
{
    let a = await sigma(1000);
    console.log(a);
}

main();