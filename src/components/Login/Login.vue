<template>
  <div>
    <div class="contact">
      <div class="inner">
        <h3>Please login your amazon account</h3>
        <input class="email" type="text" placeholder="Account" v-model="userInfo.account">
        <input class="pass" type="password" placeholder="Password" v-model="userInfo.pwd">
        <br>
        <button class="btn btn-primary" @click="login">Login</button>
        <!-- <input class="submit" type="submit" value="Login" oninput="login()"> -->
      </div>
      <div>{{userInfo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        account: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      console.log(`login success ${JSON.stringify(this.userInfo, null, 2)}`)
    }
  }
}
</script>

<style >
.contact {
  top: 32%;
  padding: 20px;
  position: relative;
}
.contact .inner {
  -moz-box-shadow: 1px 1px 10px rgba(47, 47, 47, 0.2) inset;
  -webkit-box-shadow: 1px 1px 10px rgba(47, 47, 47, 0.2) inset;
  box-shadow: 1px 1px 10px rgba(47, 47, 47, 0.2) inset;
  background: #fff;
  border-radius: 5px;
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  width: 280px;
}
.contact .inner h1 {
  color: #36383c;
  margin: 0;
  font-weight: bold;
}
.contact .inner p {
  color: #7c818b;
  margin: 0 0 30px 0;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 1px;
}
.contact .inner input {
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #e5e7e9;
  border: none;
  color: #2b2b2b;
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 100;
  padding: 15px;
  width: 100%;
}
.contact .inner input.email {
  -moz-box-shadow: 0px 2px 3px rgba(47, 47, 47, 0.1) inset;
  -webkit-box-shadow: 0px 2px 3px rgba(47, 47, 47, 0.1) inset;
  box-shadow: 0px 2px 3px rgba(47, 47, 47, 0.1) inset;
  border: 1px solid #adaeb0;
  border-radius: 5px 5px 0 0;
}
.contact .inner input.pass {
  -moz-box-shadow: 0px -1px 3px rgba(47, 47, 47, 0.1) inset;
  -webkit-box-shadow: 0px -1px 3px rgba(47, 47, 47, 0.1) inset;
  box-shadow: 0px -1px 3px rgba(47, 47, 47, 0.1) inset;
  border: 1px solid #adaeb0;
  border-top: none;
  border-radius: 0 0 5px 5px;
  margin-top: -2px;
}
.contact .inner input:focus {
  background: #f6f6f6;
  outline: none;
}

</style>
