<template>
<body class="a" >
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
   <nav class="navbar navbar-light navbar-expand-md d-flex navbar-fixed-top navigation-clean-button" style="box-shadow: 0 3px 15px rgb(100 100 100 / 50%);">
        <div class="container">
            <div class="d-flex justify-content-center" style="/*width: 100%;*/">
                <nav class="navbar navbar-light navbar-expand-md d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div class="container-fluid">
                        <div><a class="navbar-brand" href="#" style="text-align: left;"><img src="../assets/img/pokelog.png" style="width: 50px;"><span @click="pokedex()">Pokedex</span> </a><a class="navbar-brand d-none" href="#"> </a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
                        <div class="collapse navbar-collapse" id="navcol-2">
                            <ul class="navbar-nav main-nav" >
                             
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
    
  <div class="login-card " style="box-shadow: 0 3px 15px rgb(100 100 100 / 50%);color: var(--bs-blue);background: rgba(247,247,247,0.54);"><img class="profile-img-card" src="../assets/img/pwi.png" >
    <p class="profile-name-card"> </p>
    <div class="form-signin"><span class="reauth-email"> </span>
      <input v-model="identifier" class="form-control" type="text" placeholder="mail"/>
    
      <input v-model="password" class="form-control" type="password" placeholder="Mot de passe"/>
    
    <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
      Adresse mail et/ou mot de passe invalide
    </div>
    <div class="form-row">
      <button @click="login()" class="btn btn-primary btn-lg d-block btn-signin w-100"   style="background: rgb(169,182,124);">
        <span v-if="status == 'loading'">Connexion en cours...</span>
        <span v-else>Connexion</span>
      </button>
    </div>
   </div>
    <p class="card__subtitle">you don't have a count ? <span class="card__action" @click="switchToCreateAccount()">register here</span></p>
  </div>

  </body>
</template>



<style >
.login-card {
  max-width: 350px;
  padding: 40px 40px;
  background-color: #F7F7F7;
  margin: 0 auto 25px;
  margin-top: 80px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-card .profile-img-card {
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 50%;
}
.login-card .profile-name-card {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
}
.login-card .reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
}
.login-card .form-signin input[type=email], .login-card .form-signin input[type=password], .login-card .form-signin input[type=text], .login-card .form-signin button {
  height: 44px;
  font-size: 16px;
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  box-sizing: border-box;
}
.login-card label {
  color: #000000;
}
.login-card .form-signin .form-control:focus {
  border-color: rgb(104, 145, 162);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
}
.login-card .btn.btn-signin {
  font-weight: 700;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  background: rgb(104, 145, 162);
  border-radius: 3px;
  border: none;
  transition: all 0.218s;
  padding: 0;
}
.login-card .btn.btn-signin:hover, .login-card .btn.btn-signin:active, .login-card .btn.btn-signin:focus {
  background: rgb(12, 97, 33);
}
.login-card .forgot-password {
  color: rgb(104, 145, 162);
}
.login-card .forgot-password:hover, .login-card .forgot-password:active, .login-card .forgot-password:focus {
  color: rgb(12, 97, 33);
}
:root {
  --km-primary: #0fb59f;
  --km-secondary: #ffae02;
  --km-bg: #f5f5f5;
  --km-black: #222222;
}
#km-header *:focus {
  outline: none;
}
#km-header {
}
#km-header .navbar {
  display: flex;
  flex-flow: column;
}
#km-header .navbar .km-navbar-brand {
  padding: 20px 0;
  width: 100%;
  background-color: #ffffff;
}
#km-header .navbar .km-navbar-brand .navbar-toggler {
  padding: 0;
  color: var(--km-primary);
}
#km-header .navbar .km-navbar-brand .container {
  position: relative;
}
#km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container {
  position: absolute;
  right: 0;
  top: 20%;
}
#km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a {
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  border: 1px solid var(--km-primary);
  padding: 10px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  width: 100px;
  text-decoration: none;
  font-weight: bold;
  transition: .3s all;
}
#km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a:first-child, #km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a:last-child:hover {
  background-color: var(--km-primary);
  color: #ffffff;
}
#km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a:first-child:hover, #km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a:last-child {
  color: var(--km-primary);
  background-color: #ffffff;
}
#km-header .navbar .km-navbar-menu {
  background-color: rgb(150,182,124);
  width: 100%;
  text-align: center;
}
#km-header .navbar .km-navbar-menu .navbar-nav {
}
#km-header .navbar .km-navbar-menu .navbar-nav .nav-item {
  padding: 0 25px;
}
#km-header .navbar .km-navbar-menu .navbar-nav .nav-item .nav-link {
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  padding: 18.5px 0 12.5px 0;
  border-bottom: 5px solid transparent;
  transition: .3s all;
  font-weight: bold;
  letter-spacing: 1px;
}
#km-header .navbar .km-navbar-menu .navbar-nav .nav-item .nav-link:hover {
  border-color: #ffffff;
}
#km-header .navbar .km-navbar-menu .navbar-collapse {
  position: relative;
}
#km-header .navbar .km-navbar-menu .navbar-nav .km-cart {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
#km-header .navbar .km-navbar-menu .navbar-nav .km-cart .nav-link {
  position: relative;
  padding-top: 8px;
}
#km-header .navbar .km-navbar-menu .navbar-nav .km-cart i {
  position: relative;
  top: 5px;
}
#km-header .navbar .km-navbar-menu .navbar-nav .km-cart span {
  background-color: #000000;
  color: #ffffff;
  position: absolute;
  top: 10px;
  right: -15px;
  border-radius: 100%;
  width: 20px;
  display: inline-block;
  font-size: 13px;
}
@media (max-width:595px) {
  .km-px-0 {
    padding-right: 0;
    padding-left: 0;
  }
}
@media (max-width:595px) {
  #km-header .navbar .km-navbar-brand .navbar-brand {
    max-width: 40%;
    margin: 0;
  }
}
@media (max-width:595px) {
  #km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container {
    right: 5%;
  }
}
@media (max-width:595px) {
  #km-header .navbar .km-navbar-brand .km-navbar-brand-btn-container a {
    font-size: 12px;
    width: 60px;
    padding: 5px 0;
  }
}
@media (max-width:595px) {
  #km-header .navbar .km-navbar-menu .navbar-nav .km-cart span, #km-header .navbar .km-navbar-menu .navbar-nav .km-cart {
    position: static;
  }
}
.nav.navbar-nav.main-nav {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
.nav.navbar-nav.main-nav {
  list-style: disc outside;
  list-style-type: disc;
  list-style-position: outside;
  list-style-image: initial;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
}
.navbar-nav > li {
  list-style-type: none;
  float: left;
  padding: 0;
  line-height: 50px;
  height: 50px;
  margin: 0;
}
.navbar.navbar-default {
  background: black;
}
.navbar-default .navbar-nav > li > a {
  color: white;
}
.navbar-default .navbar-nav > li > a:hover {
 
  color: #fff;
  text-decoration: none;
}
.navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-nav > li > a:hover {
  color: #f4e7e7;
 
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  display: inline-block;
  margin: 0;
  text-align: center;
  transition: all .3s;
}
a:active {
 
}
.navigation-clean-button {
  background: rgba(247,247,247,0.54);
  padding-top: 10px;
  padding-bottom: 10px;
  color: #f2f5f8;
  border-radius: 0;
  box-shadow: none;
  border: none;
  margin-bottom: 0;
}
@media (max-width:767px) {
  .navigation-clean-button {
    padding-top: 0;
    padding-bottom: 0;
  }
}
@media (max-width:767px) {
  .navigation-clean-button .navbar-header {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
@media (max-width:767px) {
  .navigation-clean-button .navbar-right {
    margin-bottom: 20px;
  }
}
.navigation-clean-button .navbar-brand {
  font-weight: bold;
  color: inherit;
}
.navigation-clean-button .navbar-brand:hover {
  color: #1485ee;
}
.navigation-clean-button .navbar-brand img {
  height: 100%;
  display: inline-block;
  margin-right: 10px;
  width: auto;
}
.navigation-clean-button .navbar-toggle {
  border-color: #ddd;
}
.navigation-clean-button .navbar-toggle:hover, .navigation-clean-button .navbar-toggle:focus {
  background: none;
}
.navigation-clean-button .navbar-toggle .icon-bar {
  background-color: #888;
}
.navigation-clean-button .navbar-collapse, .navigation-clean-button .navbar-form {
  border-top-color: #ddd;
}
.navigation-clean-button .navbar-nav > .active > a, .navigation-clean-button .navbar-nav > .open > a {
  background: none;
  box-shadow: none;
}
.navigation-clean-button.navbar-default .navbar-nav > .active > a, .navigation-clean-button.navbar-default .navbar-nav > .active > a:focus, .navigation-clean-button.navbar-default .navbar-nav > .active > a:hover {
  border-top: 1px solid #e04c40;
  box-shadow: none;
  transition: background-color 0.25s;
  background: none;
  pointer-events: none;
}
.navigation-clean-button.navbar .navbar-nav > li > a {
  padding-left: 18px;
  padding-right: 18px;
}
.navigation-clean-button.navbar-default .navbar-nav > li > a {
  color: #dfe8ee;
  font-weight: 400;
  text-transform: uppercase;
  font-family: 'Work Sans';
}
.navigation-clean-button.navbar-default .navbar-nav > li > a:focus, .navigation-clean-button.navbar-default .navbar-nav > li > a:hover {
  color: #e04c40 !important;
  border-top: solid 1px #e04c40;
  background-color: transparent;
  transition: background 0.2s ease, padding 0.8s linear;
  transition: background-color 0.25s;
}
.navigation-clean-button .navbar-nav > li > .dropdown-menu {
  margin-top: -5px;
  box-shadow: 0 4px 8px rgba(0,0,0,.1);
  background-color: #222222;
  border-radius: 2px;
}
.navigation-clean-button .dropdown-menu > li > a:focus, .navigation-clean-button .dropdown-menu > li > a {
  line-height: 2;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Roboto';
  color: #df4c40;
}
.navigation-clean-button .dropdown-menu > li > a:focus, .navigation-clean-button .dropdown-menu > li > a:hover {
  background: #df4c40;
  color: inherit;
  transition: background-color 0.25s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
.navigation-clean-button .actions {
  margin-top: 7px;
  margin-bottom: 0;
}
.navigation-clean-button .actions .login {
  margin-right: 7px;
  text-decoration: none;
  color: #ffffff;
}
.navigation-clean-button .action-button, .navigation-clean-button .action-button:active {
  background: transparent;
  border-radius: 0;
  color: #e04c40;
  box-shadow: none;
  border: 1px solid #e04c40;
  text-shadow: none;
  padding: 10px 22px;
  transition: background-color 0.25s;
}
.navigation-clean-button .action-button:hover {
  background: #e04c40;
  color: #fff;
  font-weight: 400;
  border: 1px solid #df4c40;
}
.navbar {
  margin-bottom: 0;
}
.btn {
  border-radius: 0;
}
a.navbar-brand.navbar-link {
  font-weight: 400;
}
p.navbar-text.navbar-right.actions {
  font-family: 'Roboto Slab';
  text-transform: uppercase;
  font-weight: 400;
}
a.navbar-link.login:hover {
  color: #e04c40;
}
.btn.focus, .btn:focus, .btn:hover {
  color: #ffffff;
  text-decoration: none;
  background-color: #1485ee;
  border: none;
}
.btn-default {
  color: #ffffff;
  background-color: #df4c40;
  border: none;
}
.btn {
  font-family: 'Roboto';
  font-weight: 400;
}
.flex {
  display: flex;
}
.flex.center {
  justify-content: center;
}
.center {
  text-align: center;
}
.full-height {
  height: 100%;
}
.form-box {
  padding: 10px 20px;
  box-shadow: 0px 0px 15px #000;
}
.flex.v-center {
  align-items: center;
}
.form-box > form {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
@media (max-width:767px) {
  .form-box > form {
    padding-left: 0;
    padding-right: 0;
  }
}
.form-box .form-control {
  margin-bottom: 10px;
}
.form-box .btn.btn-block {
  margin-top: 25px;
}
.form-box img {
  margin-bottom: 15px;
}
.avatar.round {
  border-radius: 50%;
}
.avatar {
  border: 1px solid black;
  max-width: 100px;
  max-height: 100px;
  width: 100px;
  height: 100px;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
*, *:after, *:before {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
header#main-header {
  display: none;
}
html {
  height: 100%;
}
body {
  background-color: #1f2029;
  min-height: 100%;
}
.title {
  color: lightgreen;
  width: 100%;
  text-align: center;
}
.filters {
  display: flex;
  justify-content: center;
}
.container {
  padding: 1em;
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.container li {
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 200px;
  height: 200px;
}
.container li:hover {
  border: 1px solid lightgreen;
  color: #fff;
}
.container li:hover body {
  background: red;
}
.filters {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.filters > * {
  margin: 0.2em 0.9em;
}
.btn {
  background: #1f2029;
  color: white;
}
[type=radio]:checked,
[type=radio]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type=radio]:checked + label,
[type=radio]:not(:checked) + label {
  position: relative;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  line-height: 30px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  color: #fff;
  margin-right: 10px;
  margin-left: 10px;
  transition: all 0.2s ease;
}
[type=radio]:checked:hover + label:before,
[type=radio]:not(:checked):hover + label:before,
[type=radio]:checked:hover + label:after,
[type=radio]:not(:checked):hover + label:after {
  opacity: 0.7;
}
[type=radio]:checked + label:before,
[type=radio]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  background-color: transparent;
  transition: all 0.2s ease;
}
[type=radio]:checked + label:after,
[type=radio]:not(:checked) + label:after {
  content: "";
  width: calc(100% - 8px);
  border-radius: 2px;
  height: 22px;
  background-color: #e74c3c;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: all 0.2s ease;
}
[type=radio]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type=radio]:checked + label:after {
  opacity: 0.8;
  transform: scale(1);
}
.radio-gens:checked + label:before,
.radio-gens:not(:checked) + label:before {
  border: 1px solid #e74c3c;
}
.radio-gens:checked + label:after,
.radio-gens:not(:checked) + label:after {
  background-color: #e74c3c;
}
.pokeimage {
  width: 100px;
}
.pokeimage.loaded img {
  opacity: 1;
}
.container .item2 {
  background-repeat: no-repeat;
  background-size: 40%;
  background-image: url("https://2img.net/h/img2.wikia.nocookie.net/__cb20090125151112/es.pokemon/images/3/33/Turno_Ball_(Ilustraci%C3%B3n).png");
  background-position: center;
}
</style>


<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  data: function () {
    return {
      mode: 'login',
      identifier: '',
      password: '',
    }
  },
  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push('/team');
      return ;
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.prenom != "" && this.nom != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(['status'])
  },
  methods: {
    switchToCreateAccount: function () {
       window.location.href = '/register';
    },
    pokedex: function () {
      window.location.href = '/';
    },
    login: function () {
      const self = this;
      this.$store.dispatch('login', {
        identifier: this.identifier,
        password: this.password,
      }).then(function () {
        self.$router.push('/team');
      }, function (error) {
        console.log(error);
      })
    },
  }
}
</script>