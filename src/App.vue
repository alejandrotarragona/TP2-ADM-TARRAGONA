<template>
  <div id="app">
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/login">Login</router-link>


    </nav>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            FOCUS TODO
          </v-list-item-title>
          <v-list-item-subtitle>
            MAXIMIZA TU PRODUCTIVIDAD!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      src="red.jpg"
      scroll-target="#scrolling-techniques-2"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>FOCUS TODO | herramienta de productividad</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

     
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  </div>
</template>

<script>

  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-checkbox-marked-circle-plus-outline', to:'/' },
          { title: 'Focus🔥🫡', icon: 'mdi-image', to:'/about'},
          { title: 'Registrate🔥🫡', icon: 'mdi-image', to:'/login'},

          
        ],

     }),
  }
</script>