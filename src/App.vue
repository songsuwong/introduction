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
          :text = '$t("l-home-page")'
          to = '/'
        />
        <v-tab
          text ="github"
          to = '/github'
        />
        <v-tab
          :text = '$t("l-blog")'
          to = '/md'
        />
        <v-tab
          :text = '$t("l-show-feature")'
          to = '/settings'
        />
        <v-tab
          :text = '$t("l-about-me")'
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