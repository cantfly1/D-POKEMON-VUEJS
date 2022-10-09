import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:1337'
});

let user = localStorage.getItem('user');
if (!user) {
 user = {
    userId: -1,
    token: '',
  }; 
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

// Create a new store instance.
const store = createStore({
  data: function () {
    return {
      info:{},
    }
  },
  state: {
    status: '',
    user: user,
    userInfos: {
      nom:'',
      prenom: '',
      email: '',
      photo: '',
    },
    
  },
 
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      this.info = user;
      console.log(this.info)
    },
    userInfos: function (state, userInfos) {
      state.userInfos = userInfos;
    },
    logout: function (state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('user');
    }
  },
  actions: {
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('/auth/local', userInfos)
        .then(function (response) {
          commit('setStatus', '');
          commit('logUser', response.data);
          
          
          resolve(response);
          this.info = response.data;
          console.log(this.info)
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          console.log(userInfos)
          reject(error);
        });
      });
    },
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/auth/local/register', userInfos)
        .then(function (response) {
          commit('setStatus', 'created');
          resolve(response);
          console.log(userInfos)
        })
        .catch(function (error) {
          commit('setStatus', 'error_create');
          reject(error);
          console.log(userInfos)
        });
      });
    },
  }
})

export default store;