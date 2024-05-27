<template>
    <div>
      <div id="info">
        <h2 align="center" style="padding: 30px; font-weight: bolder;">상품정보</h2>
      </div>

      <br/>
      <hr>
      <br/>
      <br/>

      <div align="center">
      <table>
        <tr>
          <td class="td1">제품번호</td>
          <td class="td2">100</td>
        </tr>
        <tr>
          <td class="td1">제품이름</td>
          <td class="td2" style = "color: #a183ff">shoes1</td>
        </tr>
        <tr>
          <td class="td1">제품설명</td>
          <td class="td2">fun shoes1</td>
        </tr>
        <tr>
          <td class="td1">제품가격</td>
          <td class="td2">1000</td>
        </tr>
        <tr>
          <td class="td1">제품회사</td>
          <td class="td2">c100</td>
        </tr>
        <tr>
          <td class="td1">제품이미지</td>
          <td class="td2"><img src="./shoes.jpg" alt="신발 이미지" width="100px" height="100px"></td>
        </tr>
      </table>
      </div>
  
      <br/>
      <div align="center">
        <img src="./image.jpg" width="250px" height="150px">
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
  td,tr{
    width: 200px;
    text-align: center;
  }
  #info{
    width: auto;
    height: 100px;
    background-color: #39feb3;
  }
  .td1{
    background-color: #b1d6ff;
  }
  .td2{
    background-color: #89e8a9;
  }
  </style>
  