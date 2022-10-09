<template>
    
  <meta charset="UTF-8" />
 
   <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css%22%3E">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css%22%3E">
  <main>
    <nav class="flex items-center justify-between flex-wrap navigation-clean-button" style="box-shadow: 0 3px 15px rgb(100 100 100 / 50%);">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <div class="container-fluid">
          <div><a class="navbar-brand" href="#" style="text-align: left; box-sizing: border-box;  font-family: `Poppins`, sans-serif;"><img src="../assets/img/pokelog.png" style="width: 50px;"><span @click="pokedex()">Pokedex</span> </a><a class="navbar-brand d-none" href="#"> </a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
          <div class="collapse navbar-collapse" id="navcol-2">
            <ul class="navbar-nav main-nav" >

            </ul>
          </div>
        </div>
      </div>


      <div class="form-row" style="margin-bottom: 25px;margin-right: 15px;">
        <button @click="logou()" class=" text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent hover:text-white hover:bg-yellow-600 mt-4 ">
          EQUIPE
        </button>
      </div>
    </nav>
       <div class="searchbar">
      <div id="change">
        <input type="text" v-model="search" placeholder="Search title.."/>
      
      </div>
    </div>
    <link rel="stylesheet" href="./style.css">
   <div class="list"> 
    
    <article v-for="pokedexx in filteredList" :key="pokedexx.id" id="myUL" @click="fetchData(pokedexx.id)">
        <center>
        <h3 class="namepok">{{ pokedexx.nom_pok}}</h3>
                </center>
    </article>
    
     
  </div>

  <center>
    <div class="detail">
      <div class="detail-view card" v-if="show">
        <img src="../assets/img/cancel.png" class="close" @click="closeDetail"> 
        <div v-if="att" class="image">
        <div class="load">
        
        
      </div>
      </div>
      <div v-if="att" class="data card-body">
        <h2 class="card-title">{{ att.nom_pok }}</h2>
      </div>
       
      
    
      
      
      <div class="types">
          <div class="type" v-for="(value, index) in att.types" :key="'value'+index"><span>
            
           {{value.type1}}
           {{value.type2}}
            </span>
          </div>
        </div>
         <div class="tables">
           <table class="table table-ligth" style="heigth: 30px;">
            <thead>
               <tr>
     
                 <th scope="col">pv</th>
                 <th scope="col">attaque</th>
                 <th scope="col">defense</th>
                 <th scope="col">att_spe</th>
                 <th scope="col">def_spe</th>
                 <th scope="col">vitesse</th>
             </tr>
            </thead>
            <tbody>
             <tr>
               <td>{{att.s_tat.hp}}</td>
                <td>{{att.s_tat.attack}}</td>
               <td>{{att.s_tat.defense}}</td>
              <td>{{att.s_tat.sp_attack}}</td>
              <td>{{att.s_tat.sp_defense}}</td>
               <td>{{att.s_tat.speed}}</td>
             </tr>
   
            </tbody>
            
         </table>
         <div class="tables">
           <table class="table table-ligth" style="heigth: 30px;">
            <thead>
               <tr>
     
                 <th scope="col">id base pokemon</th>
                 <th scope="col">id pok evolution</th>
                 <th scope="col">pokemon evolution</th>
                
             </tr>
            </thead>
            <tbody>
             <tr>
               <td>{{att.evol.id_pok_base}}</td>
                <td>{{att.evol.id_pok_evol}}</td>
               <td>{{att.evol.lvl_evol_pok}}</td>
             </tr>
   
            </tbody>
            
         </table>
         </div>
         <div class="" v-for="(value, index) in att.evolutions" :key="'value'+index"><span>
           <table class="table table-ligth" style="heigth: 30px;">
            <thead>
          
   
            
            </thead>
         </table>
           
           
            </span>
          
          </div>
           <h3 style="font-weight: bold;">faiblesse</h3>
         
          <div class="teer" v-for="(value, index) in att.weaknes" :key="'value'+index"><span>
            
           <div class="faible">
           bug x {{value.bug}}
           
           </div>
           <div class="faible">
           dragon x {{value.dragon}}
           
           </div>
           <div class="faible">
           electric x {{value.electric}}
           
           </div>
           <div class="faible">
           fairy x {{value.fairy}}
           
           </div>
           <div class="faible">
           fight x {{value.fight}}
           
           </div>
           <div class="faible">
           fire x {{value.fire}}
           
           </div>
           <div class="faible">
           flying x {{value.flying}}
           
           </div>
           <div class="faible">
           ghost x {{value.ghost}}
           
           </div>
           <div class="faible">
           grass x {{value.grass}}
           
           </div>
           <div class="faible">
           ground x {{value.ground}}
           
           </div>
           <div class="faible">
           ice x {{value.ice}}
           
           </div>
           <div class="faible">
           normal x {{value.normal}}
           
           </div>
           <div class="faible">
           poison x {{value.poison}}
           
           </div>

           <div class="faible">
           psychic x {{value.psychic}}
           
           </div>
           <div class="faible">
           rock x {{value.rock}}
           
           </div>
           <div class="faible">
           steel x {{value.steel}}
           
           </div>
           <div class="faible">
           water x {{value.water}}
           
           </div>
           
            </span>
        
         </div>
         </div>
         
                 <div class="tables">
           <table class="table table-ligth" style="heigth: 30px;">
           
            
   
            
         </table>
                 </div>
          
         
    </div>
   
    
   </div>
  </center>

  </main>
</template>
    
    
<script>
import axios from 'axios';
export default {
  name: 'Profile',
  components: {
  
  },
  data: () => {
    return {
      imageUrl1:
        `image.formats.url`,
      imageUrl:
        "http://localhost:1337",
      apiUrl: "https://localhost:1337/pokemons/",
      pokemonUrl: "",
      restaurant: [],
      showDetail: false,
      restaurants: [],
      pokemon: {},
      att:{},
      search:'',
      show: false,
    };
  },
  
    async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/pokedexxes')
      console.log(response)
      this.restaurants = response.data,
      console.log(this.restaurants)
      this.pokemon = response.data
      
    } catch (error) {
      this.error = error;
    }
    try {
      const response = await axios.get('http://localhost:1337/upload/files/')
      this.restaurant = response.data
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    setPokemonUrl(id) {
     return new Promise((resolve) => {
      axios.get(`http://localhost:1337/pokedexxes/${id}`)
         .then(function({
            data
         }) {
            resolve(data);
            
            
            this.att = data
            console.log(this.att)
           
            
            
         })
          
     
     
     this.showDetail = true;   
   });
   
    
    },
    logou: function () {
      window.location.href = '/login';
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.show = false;
    },
    
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
  fetchData(id) {
        let req = new Request(`http://localhost:1337/pokedexxes/${id}`);
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
            this.att = data;
            this.show = true;
            console.log(this.att)
          })
          .catch((error) => {
            console.log(error);
          })
      },
       created() {
      this.fetchData();
    }
  },
  computed: {
   filteredList() {
      return this.restaurants.filter(pokedexxes => {
        return pokedexxes.nom_pok.toLowerCase().includes(this.search.toLowerCase())
      })
    }
   
  },
  myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
};
</script>

<style  scoped>
.load{
  display: flex;
}
.card-title{
  font-weight: bold;
}
.te1{
        display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
   align-content: center;
    
}
.faible{
  width: 150px;
  height: 35px;
}
.teer span{
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
    justify-content: center;
    margin: 0 auto;
}
.faible{
       color: rgb(10, 119, 10);
    margin: 0 2px 2px 0;
    border-radius: 20px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 1rem;
    /* letter-spacing: 2px; */
    text-transform: capitalize;
    word-wrap: none;
    word-break: keep-all;
    background-color: #ffffff;
    border: 3px solid;
}
 .types, .abilities {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          
         
          
        }
        .type { 
            color: rgb(17, 67, 182);
            margin: 0 0 10px 0;
            padding: 5px 10px;
            font-weight: bold;
            font-size: 1rem;
            letter-spacing: 2px;
             text-transform: capitalize;
              display: block;
        margin-left: auto;
        margin-right: auto 
            }
            .type  {
                             
                    padding: 10px 14px;
                    border-radius: 29px;   
                }
 .image {
        display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    margin-left: auto;
    width: 140px;
    height: 140px;
    background-color: #eee;
    margin-top: -100px;
    margin-right: -50px;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
    border-radius: 50%;
    overflow: hidden;
       
      }
.detail {
    display: flex;
    justify-content: center;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    align-items: flex-start;
       margin-top: 50px; 
    display: block;
    margin-left:auto;
    margin-right:auto ;
    width: 100%;
    
  }
  .detail-view {
      border-radius: 20px;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;
      padding: 50px 0 0;
      position: relative;
     
      max-width: 510px;
      
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
  }
 .close {
        
       padding: 10px 20px;
    margin-top: -30px;
    font-size: 1.2rem;
    cursor: pointer;
    height: 50px;
  
    padding-right: 450px;
      }
 .list {
  display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	justify-content: center;
	margin: 0 auto;
	max-width: 1200px;
  padding-top: 25px;
}
.jp{
  height: 400px;
}
.namepok{
 font-weight: bold;
}
    article {
      background-color: #eee;
	border-radius: 20px;
	box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
	margin: 10px;
	padding: 30px;
	text-align: center;   
    }
    h3 {
        margin: 0;
      }
  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-size: 2rem;
    color: #efefef;
  }
  .searchbar {
        position: relative;
        width: 100%;
        max-width: 510px;
        margin-bottom: 5px;
        margin-top: 20px;
        padding: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto
    }
    .tables{
      display: block;
        margin-left: auto;
        margin-right: auto
    }
    .searchbar input {
      border: none;
      outline: none;
      
      padding: 13px 40px 13px 13px;
      width: 100%;
      font-size: 1rem;
      border-radius: 20px;
      box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
    }
    .legenda {
        color: #fff;
    }
    i img{
      position: absolute;
      top: 6px;
      width: 35px;
      right: 10px;
      font-size: 1.25rem;
      color: #0A2E50;
      cursor: pointer;
    }
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
*, *:after, *:before {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
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
.container .item2 {
  background-repeat: no-repeat;
  background-size: 40%;
  background-image: url("https://2img.net/h/img2.wikia.nocookie.net/__cb20090125151112/es.pokemon/images/3/33/Turno_Ball_(Ilustraci%C3%B3n).png");
  background-position: center;
}
.card-title{
      margin-top: -80px;
}
</style>>