<script setup>
  import { ref, watch } from 'vue'
  import { useI18n } from "vue-i18n";
  const t = useI18n()
  const locale = ref(t.locale.value)
  watch(locale, (newConfig) => {
    t.locale.value = newConfig
  })
</script>

<template>
  <v-app>
    <v-container class= 'bg-grey-lighten-4 h-75'>
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
    </v-container>
  </v-app>
</template>

<style>
</style>
