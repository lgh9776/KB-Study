<template>
    <div>
      <h1>Score List</h1>
      <ul>
        <!-- 각 학생의 이름과 성적을 표시하는 반복문 -->
        <li v-for="(score, index) in scoreList" :key="index">
          <p>{{ score.name }}</p>
          <p>Korean: {{ score.kor }}</p>
          <p>English: {{ score.eng }}</p>
          <p>Math: {{ score.math }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scoreList: [
          { name: "홍길동", kor: 90, eng: 60, math: 90 }, 
          { name: "임꺽정", kor: 80, eng: 80, math: 90 }, 
          { name: "강감찬", kor: 70, eng: 100, math: 90 }, 
          { name: "윤관", kor: 80, eng: 90, math: 50 }, 
          { name: "서희", kor: 80, eng: 90, math: 70 }
        ]
      };
    }
  };
  </script>
  