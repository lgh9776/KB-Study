//전개 ... : 배열을 합산하고자 할 때 주로 사용
//           하나씩 펼쳐서 전달
let arr = [1,2,3];
let arr2 = [...arr,4,5];

console.log(arr2);
console.log(...arr); //반복 대신 배열을 펼쳐서 보여줌

function myfunc(...arr) //가변인자 - 매개변수의 숫자가 정확하지 않을때
{
    console.log(arr);
}

myfunc([1,2]);
myfunc([1,2,3,4,5]);

//배열 합산
let a1 = [1,2,3];
let b1 = [5,6,7,8];
let c1 = [...a1, ...b1];
console.log(c1);

//전개연산자
//배열을 합산해서 새로운 배열을 반환한다.
//push : 원래 메모리에 계속 늘려가는 방식 / concat : 새로 만들어서 던짐
let c2 = c1.concat([10,20,30]);
console.log(c2);

//해체
let persons = {"name":"홍길동", "age":23};
let {name, age}=persons;
console.log(name);
console.log(age);

function myfun2(person)
{
    const {name, age, phone}=person;
    console.log(name);
    console.log(age);
    console.log(phone);
}

myfun2({name:"Tom", age:22, phone:"010-0000-0000"});