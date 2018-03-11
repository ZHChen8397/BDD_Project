<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-md-6 ">
                <a href="#" class="active" id="login-form-link">Login</a>
              </div>
              <div class="col-md-6">
                <a href="#" id="register-form-link">Register</a>
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" role="form" style="display: block;" v-on:submit.prevent="login">
                  <div class="form-group">
                    <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Account" value="" v-model="userInfo.account">
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" v-model="userInfo.pwd" >
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-12 col-sm-offset-3">
                        <button name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" data-loading-text="<i class='fa fa-circle-o-notch fa-spin' ></i> 登入中">Log In</button>
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" role="form" style="display: none;" v-on:submit.prevent="register">
                  <div class="form-group">
                      <input class="form-control" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=^[^\W]*$).+$" id="inputName" placeholder="Account" type="text" required v-model="regUserInfo.regAccount"/>
                    <div class="help-block " id="account-warning">帳號至少須有一大寫字母，一小寫字母以及數字組合(不包含特殊符號)</div>
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email Address" value="" required v-model="regUserInfo.regEmail">
                    <div class="help-block with-errors" id="email-warning"></div>
                  </div>
                  <div class="form-group">
                      <input type="password" data-minlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$" class="form-control" id="inputPassword" placeholder="Password" required v-model="regUserInfo.regPassword">
                    <div class="help-block" id="pwd-warning">密碼長度至少8位，至少須有一大寫字母，一小寫字母以及數字組</div>
                  </div>
                  <div class="form-group">
                    <input type="password" data-match="#inputPassword" data-error="密碼不一致" name="confirm-password" id="confirm-password" required class="form-control" placeholder="Confirm Password">
                    <div class="help-block with-errors" id="repwd-warning"></div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-12 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" class="form-control btn btn-register" value="Register Now">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let refresh = function () {
//   $('#inputName').val('')
//   $('#email').val('')
//   $('#inputPassword').val('')
//   $('#confirm-password').val('')
//   $('#login-form').delay(100).fadeIn(100)
//   $('#register-form').fadeOut(100)
//   $('#register-form-link').removeClass('active')
//   $('#login-form-link').addClass('active')
// }
let template
export default {
  data () {
    return {
      userInfo: {
        account: '',
        pwd: ''
      },
      regUserInfo: {
        regAccount: '',
        regEmail: '',
        regPassword: ''
      }
    }
  },
  mounted () {
    template = this
    $('#register-form').validator()
    $(function () {
      $('#login-form-link').click(function (e) {
        $('#login-form').delay(100).fadeIn(100)
        $('#register-form').fadeOut(100)
        $('#register-form-link').removeClass('active')
        $(this).addClass('active')
        e.preventDefault()
      })
      $('#register-form-link').click(function (e) {
        $('#register-form').delay(100).fadeIn(100)
        $('#login-form').fadeOut(100)
        $('#login-form-link').removeClass('active')
        $(this).addClass('active')
        e.preventDefault()
      })
      $('#login-submit').on('click', function () {
        var $this = $(this)
        $this.button('loading')
        $this.attr('disabled', false).css('background-color', '#53A3CD')
      })
    })
  },
  methods: {
    login () {
      console.log(`login success ${JSON.stringify(template.userInfo, null, 2)}`)
    },
    register () {
      console.log(`register success ${JSON.stringify(this.regUserInfo, null, 2)}`)
    }
  }
}
</script>

<style src="./Login.css"></style>
