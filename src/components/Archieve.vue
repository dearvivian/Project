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


</style>