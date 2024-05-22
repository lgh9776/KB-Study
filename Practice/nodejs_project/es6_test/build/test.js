function addContact(name, mobile, home = "없음", email = "없음", favoriteFoods = "없음") {
  var str = `name=${name}, mobile=${mobile}, home=${home}, email=${email}`;
  console.log(str);
}
function foodReport(name, age, ...favoriteFoods) {
  console.log(name + ", " + age);
  console.log(favoriteFoods);
}
addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시", "hero@email.com", "감자", "고구마");