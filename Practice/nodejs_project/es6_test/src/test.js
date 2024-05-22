function addContact(name, mobile, home = "없음", address = "없음", email = "없음", ...favoriteFoods)
{
    console.log(`name >> ${name}`);
    console.log(`home >> ${home}`);
    console.log(`address >> ${address}`);
    console.log(`email >> ${email}`);
    foodReport(favoriteFoods)
}

function foodReport(...favoriteFoods){
    console.log(`favoriteFoods >> ${favoriteFoods}`);
    //console.log(favoriteFoods);
    console.log("-----------");
}


addContact("홍길동", "010-222-3331")
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시")
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시", "hero@email.com", "감자", "고구마")
