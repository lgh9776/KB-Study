//JSON은 "키":"값" 쌍으로 저장 >>> 값이 진짜 값만 저장하는 게 아니라
//함수도 저장이 가능하다.  함수 안에서 JSON 객체 내의 변수에 접근하려면
//this 필수, JSON 내부에 함수 선언 시 화살표 함수 안씀

let score = {
    name:"홍길동", age:23, addr:"서울시",
    "setValue":function(name, age, addr){
        this.name = name;
        this.age = age;
        this.address = addr;
    },
    "output":function(){
        console.log(`${this.name} ${this.age} ${this.addr}`);
    }
}

score.output();
score.setValue("임꺽정", 33, "수원시");
score.output();

//사용하다 함수 추가하기
score.getName=function(){ return this.name; }
console.log(score.getName());