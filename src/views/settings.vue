<script setup>
  import { ref, watch } from 'vue'
  import { useI18n } from "vue-i18n";
  import { useTheme } from 'vuetify'
  const t = useI18n()
  const locale = ref(t.locale.value)
  const theme = useTheme()
  const effectTheme = ref(theme.global.name.value)
  
  watch(locale, (newConfig) => {
    t.locale.value = newConfig
  })
  watch(effectTheme, (newConfig) => {
    if (newConfig == 'dark'){
      theme.global.name.value = 'dark' 
    } else if (newConfig == 'default'){
      theme.global.name.value = 'light'
    }
  })
</script>

<template>
  <v-app>
    <v-container class= 'bg-grey-lighten-4 h-75'>
      <v-row>
        <v-col>
          <span>
            {{ $t('l-locale') }} (vue-i18n)：
          </span>
          <v-btn-toggle 
            v-model = 'locale'
            mandatory
          >
            <v-btn value = 'zh-tw'>
              zh-tw
            </v-btn>

            <v-btn value = 'en-us'>
              en-us
            </v-btn>
          </v-btn-toggle>          
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span>
            {{ $t('l-change-theme') }} (vuetify theme)：
          </span>
          <v-btn-toggle 
            v-model = 'effectTheme'
            mandatory
          >
            <v-btn value = 'default'>
              default light
            </v-btn>

            <v-btn value = 'dark'>
              defautl dark
            </v-btn>
          </v-btn-toggle>          
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color = 'primary'>
            default
          </v-btn>
          <v-btn color = 'secondary'>
            default
          </v-btn>
          <v-btn color = 'primary-darken-1'>
            default
          </v-btn>
          <v-btn color = 'secondary-darken-1'>
            default
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<style>
</style>
