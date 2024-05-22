let arr = [1,266,342,23,15,24214,2323,233];
arr.forEach((item, i)=>{
    console.log(item, i);
});

let arr2 = arr.map((item, i)=> item*2);
console.log(arr2);

arr = [
    [1,2,3],
    [3,4,5],
    [10,20,30,40],
    [100,200,300,400,500]
];

arr.forEach( (item, i)=>{
    //item -> 1차원배열로 전달된다.
    console.log(i, item);
})

arr.forEach( (item, i)=>{
    item.forEach((a,ii)=>{
        console.log(i, ii, a);
    })
})

let result = arr.map( (item,i)=>{
    item.map((a,ii)=>{
        console.log(i,ii,a);
        return a*2;
    })
    return item;
});
console.log(result);


//filter와 find 함수 차이점
arr = [1, 265, 4, 100, 9, 8, 45, 21, 17];
result = arr.filter(x => x % 2 == 0); //짝수만
console.log(result);

result = arr.find(x => x%2 == 0);
console.log(result);

result = arr.find(x => x > 300); //줄 데이터가 없을 때 undefined를 줌
console.log(result);

let sum = arr.reduce((prev, item)=>{
    //prev - 이전에 반환된 값, 처음에는 0으로 세팅되어 있음
    //item - 현재 배열의 요소
    //console.log(prev, item); //누적되는 과정 보기
    return prev + item; //이 값이 다시 prev에 할당되어 온다
}, 1000); //지정하면 지정값, 지정 안하면 0

console.log(sum);

arr = [
    [1],
    [1,2,3],
    [[4,5,6], [7,8,9], [10,11,12]]
];

//배열의 차원을 낮춰줌
result = arr.flat();
console.log(result);

//문자열 처리하기
let sentence = "green blue magenta cyan yellow gray black pink brown";

//문자 배열로 나누기
let words = sentence.split(" ");
console.log(words);

//문자 배열을 하나로 묶기 -join 함수
console.log(words.join(",")); //,로 모든 단어를 묶음

//문제 1. 단어의 길이가 5글자 이상인 것만 추출하기 >>> filter 사용하기
console.log("------------");
words.forEach((x, i)=>{
    if (x.length >= 5) //words.filter(w => w.length >= 5)
        console.log(x);
});

//문제 2. 모든 단어를 대문자로 바꾸기 >>> map 사용하기
console.log("------------");
words.forEach((x, i)=>{
    console.log(x.toUpperCase()); //words.map(w => w.toUpperCase())
});

//문제 3. 단어의 길이가 5글자 미만인 것만 대문자로 바꾸기
console.log("------------");
words.forEach((x, i)=>{
    if (x.length < 5)
        console.log(x.toUpperCase()); //words.filter(w => w.length < 5).map(w => w.toUpperCase())
});

//문제 4. 단어 중 r을 포함한 단어만 추출하기
console.log("------------");
words.forEach((x, i)=>{
    if (x.indexOf("r") != -1) //words.filter(w => w.includes("r"))
        console.log(x);
});