<template>
<h3>zzzzz</h3>
</template>
<script>
 import { mapState } from 'vuex'

 export default {
  name: 'equipe',
  data: function () {
    return {
      mode: 'equipe',
      email: '',
      prenom: '',
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
        nom: this.nom,
        prenom: this.prenom,
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