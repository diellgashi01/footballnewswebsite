<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-img src="https://thumb9.shutterstock.com/mosaic_250/259077216/1727356513/stock-vector-vector-soccer-ball-on-white-background-european-football-logo-football-ball-design-vector-1727356513.jpg" max-height="150" max-width="150"></v-img>
          <v-list-item-title>
            Fotmob
          </v-list-item-title>
          <v-list-item-subtitle>
            Latest Football News
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
      <v-list-item-group
        color="primary">

      <router-link to="/" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title router-link="/">News</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>  

      <router-link to="/about" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-if="isLoggedIn" to="/profile" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-if="isLoggedIn && user.role === 'admin'" to="/add-post" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-note-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Add Post</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-if="isLoggedIn && user.role === 'admin'" to="/dashboard" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-application</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-if="!isLoggedIn" to="/login" style="text-decoration: none; color: inherit;">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link v-if="isLoggedIn" to="/logout"  style="text-decoration: none; color: inherit;">
        <v-list-item @click.prevent="logoutUser">
          <v-list-item-icon>
            <v-icon>mdi-account-off</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fotmob</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    computed:{
        ...mapGetters(['isLoggedIn']),
        ...mapGetters(['user'])
    },
    methods:{
        ...mapActions(['getProfile']),
        ...mapActions(['logout']),
        logoutUser(){
            this.logout();
        }
    },
    created(){
       this.getProfile();
    },
    data: () => ({ 
      drawer: null,
       items: [
        { title: 'Home', icon: 'mdi-home',link: "/"},
        { title: 'Add Post', icon: 'mdi-note-plus', link:"/add-post" },
        { title: 'About', icon: 'mdi-help-box', link:"/about" },
        { title: 'Profile', icon: 'mdi-account-details', link:"/profile" },
        { title: 'Dashboard', icon: 'mdi-application', link:"/dashboard" },
        { title: 'Login', icon: 'mdi-account', link:"/login" },
        { title: 'Logout', icon: 'mdi-account-off', link:"/logout" },
      ],
      
}),
  }
</script>

<style>

</style>