<script setup>
  import { RouterView } from 'vue-router'
  const links = ['首頁','github','作品集','關於我',]
</script>

<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <v-tab
          text ="首頁"
          to = '/'
        />
        <v-tab
          text ="github"
          to = '/github'
        />
        <v-tab
          text ="部落格"
          to = '/md'
        />
        <v-tab
          text ="關於我"
          to = '/aboutMe'
        />
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <RouterView />
    </v-main>
  </v-app>
</template>