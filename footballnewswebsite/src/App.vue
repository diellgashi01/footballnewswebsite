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
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
  export default {
    data: () => ({ 
      drawer: null,
       items: [
        { title: 'Home', icon: 'mdi-home',link: "/"},
        { title: 'Add Post', icon: 'mdi-note-plus', link:"/add-post" },
        { title: 'About', icon: 'mdi-help-box', link:"/about" },
        { title: 'Profile', icon: 'mdi-account-details', link:"/profile" },
        { title: 'Dashboard', icon: 'mdi-application', link:"/dashboard" },
        { title: 'Login', icon: 'mdi-account', link:"/login" },
      ], 
}),
  }
</script>