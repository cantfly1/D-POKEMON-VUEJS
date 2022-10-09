<template>
<body class="a" >
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
   <nav class="navbar navbar-light navbar-expand-md d-flex navbar-fixed-top navigation-clean-button" style="box-shadow: 0 3px 15px rgb(100 100 100 / 50%);">
        <div class="container">
            <div class="d-flex justify-content-center" style="/*width: 100%;*/">
                <nav class="navbar navbar-light navbar-expand-md d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div class="container-fluid">
                        <div><a class="navbar-brand" href="#" style="text-align: left;"><img src="../assets/img/pokelog.png" style="width: 50px;"><span>Pokedex</span> </a><a class="navbar-brand d-none" href="#"> </a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
                        <div class="collapse navbar-collapse" id="navcol-2">
                            <ul class="navbar-nav main-nav" >
                             
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
    <div class="login-card" style="color: var(--bs-blue);background: rgba(247,247,247,0.54);box-shadow: 0 3px 15px rgb(100 100 100 / 50%);"><img class="profile-img-card" src="../assets/img/pwi.png" >
        <p class="profile-name-card"> </p>
        <form class="form-signin"><span class="reauth-email"> </span><input class="form-control" type="email" id="inputEmail" v-model="email" required="" placeholder="email" autofocus=""><input class="form-control" v-model="username" type="text" id="inputEmail" required="" placeholder="username" autofocus=""><input class="form-control" v-model="password" type="password" id="inputPassword" required="" placeholder="Mot de passe">
            <div class="checkbox">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label" for="formCheck-2">ce rappeler de moi</label></div>
            </div><button class="btn btn-primary btn-lg d-block btn-signin w-100" type="submit" style="background: rgb(169,182,124);">Conexion</button>
        </form><a @click="switchToLogin()" class="forgot-password" href="#">Tu as deja un compte?</a>
    </div>
  </body>
</template>
<script>
 import { mapState } from 'vuex'
 export default {
  name: 'register',
  data: function () {
    return {
      mode: 'register',
      email: '',
      username: '',
      password: '',
    }
  },
  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push('/');
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
    switchToLogin: function () {
      window.location.href = '/login';
    },
    createAccount: function () {
      const self = this;
      this.$store.dispatch('createAccount', {
        email: this.email,
        username: this.username,
        password: this.password,
      }).then(function () {
        self.login();
      }, function (error) {
        console.log(error);
      })
    },
  }
}
</script>
<style scoped>
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#aaaaaa;
  }
</style>