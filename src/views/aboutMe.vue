<script setup>
  import { ref, watch } from 'vue'
  import { useI18n } from "vue-i18n";
  import { useTheme } from 'vuetify'
  const t = useI18n()
  const locale = ref(t.locale.value)
  const theme = useTheme()
  const effectTheme = ref(theme.global.name.value)

</script>

<template>
  <v-app>
    <v-container class = 'bg-grey-lighten-4 overflow-y-auto' style = 'height: calc(100vh - 48px);'>
      <v-img
        width = '200'
        height = '200'
        src = '../assets/photo.jpg'
      /> 

      <h2> INTRODUCTION </h2>
      <h4>
        我是 james ，擔任超過四年的前端工程師，其中兩年為全端工程師，用了包括 Extjs、jquery等前端框架以及
        PHP作為後端，後兩年則有開發vue相關網頁，也有使用storybook協助UX開發元件庫。
      </h4>
      <br>
      <h2> SKILLS </h2>
      <h3> Web Development</h3>
      <h4>● Basics：Html5｜CSS3｜RWD｜JavaScript｜jQuery</h4>
      <h4>● Styling：vuetify｜Bootstrap｜unoCss｜tailwindCss</h4>
      <h4>● Frontend Frameworks：Vue.js</h4>
      <h4>● Building tools：Vite｜Webpack｜Npm｜Eslint </h4>
      <h4>● Dev skills：Git Control</h4>
      <br>
      <h2> EXPERIENCE </h2>
      <div>
        <v-timeline side="end" align="start" >
          <v-timeline-item
            fill-dot
            dot-color="primary"
            icon = 'mdi-star'
          >
            <v-card
              class = 'uno-w-[700px]'
            >
              <v-card-title>
                2019 ~ 2021
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <p>
                  主產品 SEG 使用了 EXTjs 框架，搭配zendframe的PHP框架，過程中也常常需要用到各種Linux指令，
                </p>
                <br>
                <p>
                  也有維護公司內部的 CRM 系統，一樣是EXTjs框架，以及PHP、MySQL。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
                  <v-timeline-item
            fill-dot
            dot-color="primary"
            icon = 'mdi-star'
          >
            <v-card
              class = 'uno-w-[700px]'
            >
              <v-card-title>
                2021 ~ 2022
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <p>
                  同時維護舊的系統以及用vue重構一個公司內部系統，使用的為vue2搭配vuetify的前端，搭配
                </p>
                <br>
                <p>
                  laravel的PHP框架，搭配的開發工具為webpack。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
                  <v-timeline-item
            fill-dot
            dot-color="primary"
            icon = 'mdi-star'
          >
            <v-card
              class = 'uno-w-[700px]'
            >
              <v-card-title>
                2022 ~ now
              </v-card-title>
              <v-card-text class="bg-white text--primary">
                <p>
                  配合UX實作了新的元件庫，使用的工具為storybook7搭配vue3、vuetify、unocss。
                </p>
                <br>
                <p>
                  開發公司新的專案，以vue3、vuetify、unocss，搭配vite作為開發工具
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>        
      </div>
      <h2> Contact me </h2>
      <h4>
        Email:jamesamy2004@gmail.com
      </h4>
      <h4 class = 'mb-4'>
        phone:0970-669-060
      </h4>
    </v-container>
  </v-app>
</template>

<style>
</style>
