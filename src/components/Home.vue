<template>
  <div class="box">
    <div class="row1">
      <div class="tobutton">
        <a class="dis">Dearvivian's Blog</a>
        <el-button type="text" class="toHome" @click="toHome">Home</el-button>
        <el-button type="text" class="toAbout" @click="toAbout"
          >About</el-button
        >
        <el-button type="text" class="toArchieve" @click="toArchieve"
          >Archieve</el-button
        >
      </div>
      <div class="part1">
        <div class="banner"></div>
        <div class="pabout">
          <div class="pimage"></div>
          <div class="dis2">
            <p class="ddis1">Dearvivian</p>
            <p class="ddis2">"A fool must now and then be right by chance."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
body {
  background-color: #797979;
}

.box {
  position: relative;
}

.dis {
  position: relative;
  width: 200px;
  height: 50px;
  color: white;
  top: -133px;
  left: 20px;
}

.row1 {
  position: absolute;
  top: -50px;
  background: black;
  border: 1px solid black;
  width: 1500px;
  height: 35px;
  margin: 0 auto;
  border: 2px solid #000000;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  font-size: 24px;
  background: rgb(0, 0, 0);
  border-radius: 15px;
  left: 200px;
}

.tobutton {
  position: absolute;
  top: 50px;
}

.toHome {
  position: absolute;
  left: 1250px;
  font-size: 15px;
  color: white;
  top: -50px;
}

.toAbout {
  position: absolute;
  left: 1300px;
  font-size: 15px;
  color: white;
  top: -50px;
}

.toArchieve {
  position: absolute;
  left: 1360px;
  font-size: 15px;
  color: white;
  top: -50px;
}

.part1 {
  position: relative;
  width: 1250px;
  display: flex;
}

.banner {
  position: relative;
  width: 860px;
  height: 270px;
  background-image: url("../assets/banner1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  left: 50px;
  top: 50px;
  border-radius: 15px;
}

.pabout {
  position: absolute;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  background-color: #555555;
  left: 1000px;
  top: 50px;
}

.pimage {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-image: url("../assets/pimage.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  left: 25%;
  top: 20px;
}

.ddis1 {
  position: absolute;
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 15px;
  color: white;
  word-wrap: break-word;
  word-break: normal;
  line-height: 20px;
  left: 15%;
  top: 40%;
}

.ddis2 {
  position: absolute;
  width: 220px;
  height: 50px;
  text-align: center;
  font-size: 15px;
  color: white;
  word-wrap: break-word;
  word-break: normal;
  line-height: 20px;
  left: 12%;
  top: 48%;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #000000;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>