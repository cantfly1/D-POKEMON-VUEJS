<template>
  <head>
    <meta charset="utf-8">
    <title>Mon Profil</title>
  </head>
  <body>

  <!-- Le menu de la page -->
  <div class="menu" style="color-background: white!important;box-shadow: 0 3px 15px rgb(100 100 100 / 50%);">
    <img src="https://2img.net/h/img2.wikia.nocookie.net/__cb20090125151112/es.pokemon/images/3/33/Turno_Ball_(Ilustraci%C3%B3n).png" border="05" alt="Avatar" class="avatar center">
    <h2 class="center"> Firstname </h2>
    <a href="#1">Information</a>
    <a href="#2">Mon équipe</a>
    <a href="#3">Autre utilisateurs</a>
    <a href="#4">Mes echanges</a>

  </div>
  <!-- Fin du menu -->

  <!-- La page -->
  <div class="page">

    <!-- Partie 1 : Infos -->
    <h2 class="title" id="1">Informatiion</h2>
    <div class="content">
      <p>Name</p><div v-if="info">zd</div>
      <p>Firstname</p>
      <p>E-mail</p>
        <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>

    <!-- Partie 2 : Equipe -->
    <h2 class="title" id="2">Mon Equipe</h2>
    <div class="content">
        <button @click="logou()" class="button">
        Déconnexion
      </button>
        <article v-for="pokemons in nowName" :key="pokemons.id" id="myUL" @click="fetchData(pokemons.id)">
        <center>
        <h3 class="namepok">{{ nowName.name}}</h3>
        
        <img :src="imageUrl + pokemons.image[0].url" alt="" width="120" height="120" />   
        </center>
    </article>
        
       
      
      <img src=" ../assets/eau.jpg" border="05" alt="Avatar" class="avatar center">
      <p>Les différents Pokemons</p>
    </div>

    <!-- Partie 3 : user -->
    <h2 class="title" id="3">Autre utilisateurs</h2>
    <div class="content">
      <p class="center"><strong>Les autres Profils</strong></p>
      <p>J'avais penser à afficher les users ici , il clique dessus et voit les différents pokemons et demande un échange</p>


    </div>

    <!-- Partie 4 : Mes echanges -->
    <h2 class="title" id="4">Mes échanges</h2>
    <div class="content">
      <p class="center">Ici il peut voir les echanges entre Pokemon</p>
    </div>


  </div>


  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: "Myteam",
    props:['info'],
    data: () => {
    return {
     pokemon:{},
     nowName:[],
     imageUrl:
        "http://localhost:1337",
    };
  },
   
    methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
    logou: function(){
      const idx = Math.floor(Math.random() * this.restaurants.length);
       const a = this.restaurants[idx]
       this.nowName.push(a)
      
      console.log(this.nowName)
      
    }
    },
     async mounted () {
     try {
      const response = await axios.get('http://localhost:1337/pokemons')
      console.log(response)
      this.restaurants = response.data
      console.log(this.restaurants)
    } catch (error) {
      this.error = error;
    }
    
    
      
    
    },
     logou: function () {
      
    },
}

</script>

<style scoped>
body {
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.comment {
  color: #009dff;
  font-style: italic;
  margin-top: 30px;
  margin-bottom: 50px;
}

.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #71aaeb;
  width: 70%;
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  margin: 0px;
}

.center {
  padding-left: 0px;
  padding-right: 0px;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.menu {
  width: 30%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffcde8;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.menu a {
  display: block;
  color: red;
  padding: 16px;
  text-decoration: none;
  text-align: center;
}

.menu a:hover {
  background-color: #d9d9d9;
}

.page {
  margin-left: 35%;
  padding: 1px 16px;
}

.content {
  text-align: left;
  padding-left: 35px;
  margin-top: 35px;
  margin-bottom: 50px;
}

.title {
  margin-bottom: 25px;
  text-align: left;
  padding-left: 35px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  box-shadow: 0 4px 2px -2px lightgray;
}

.progressbar {
  background-color: lavender;
  border-radius: 25px;
}

.progress {
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: cyan;
  border-radius: 25px;
}



</style>