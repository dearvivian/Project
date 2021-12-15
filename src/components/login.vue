<template>
  <div class="lgbody">
    <div class="login_form" id="login_form">
      <div class="logGet">
        <div>
          <!-- 头部提示 -->
          <p class="p1">Login</p>
        </div>

        <div class="lgDu">
          <!-- <a class="p2">Username: </a> -->
          <!-- 用户名输入框 -->
          <span class="fa fa-user fa-3x"></span>
          <input type="text" placeholder="Username" id="username" />
        </div>

        <div class="lgDp">
          <!-- <a class="p2">Password: </a> -->
          <span class="fa fa-lock fa-3x"></span>
          <!-- 密码输入框 -->
          <input type="password" placeholder="Password" id="password" />
        </div>

        <div class="logC">
          <!-- 提交按钮 -->
          <el-button type="primary" @click="login" class="cb">Submit</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  login() {
    if (document.getElementById("username").value == "123") {
      if (document.getElementById("password").value == "123") {
        // 假设登录成功
        this.$router.replace("/Home");
      } else {
        alert("Username or Password wrong!");
      }
    } else {
      alert("Username or Password wrong!");
    }
  },
};

// login() {
//   // 假设登录成功
//   this.$router.replace("/Home");
// }
</script>




<style>
.lgbody {
  background-image: url(../assets/52365854_p0.jpg);
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}

.fa-lock {
  position: relative;
  left: 6px;
  top: 9px;
  background-color: rgb(32, 32, 32);
  width: 44px;
  height: 47px;
  color: #818181;
}

.fa-user {
  position: relative;
  left: 6px;
  top: 9px;
  background-color: rgb(32, 32, 32);
  width: 44px;
  height: 47px;
  color: #818181;
}

.p1 {
  position: relative;
  top: -20px;
  left: -150px;
  font-size: 20px;
}

.p2 {
  color: #cecece;
  font-size: 25px;
}

.login_form {
  position: relative;
}

.logGet {
  width: 400px;
  height: 300px;
  position: relative;
  top: 230px;
  left: 65%;
  background-color: #818181;
  opacity: 0.85;
  border: 3px solid rgb(51, 51, 51);
}

.logGet .lgDu input {
  width: 220px;
  height: 42px;
  position: relative;
  bottom: 50;
  top: 50;
  font-size: 25px;
  text-indent: 2.5rem;
}

.logGet .lgDp input {
  width: 220px;
  height: 42px;
  position: relative;
  bottom: 50;
  top: 50;
  font-size: 25px;
  text-indent: 2.5rem;
}

.logC a button {
  height: 45px;
  width: 100px;
  background-color: none;
  border: none;
  color: white;
  font-size: 18px;
  position: relative;
}

.cb {
  position: relative;
  width: 100px;
  height: 50px;
  top: 20px;
  font-size: 20px;
  color: #818181;
}

input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 23px;
  /* placeholder位置  */
  text-align: left;
}
</style>




