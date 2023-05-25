import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en-us',
    legacy: false,
    warnHtmlMessage: false,
    fallbackLocale: 'en-us',
    availableLocales: ['zh-tw', 'en-us'],
    messages: {
      'zh-tw': {
        'l-home-page': '首頁',
        'l-blog': '部落格',
        'l-show-feature': '功能展示',
        'l-about-me': '關於我',
        'l-locale': '語系'
      },
      'en-us': {
        'l-home-page': 'home page',
        'l-blog': 'blog',
        'l-show-feature': 'features',
        'l-about-me': 'about me',
        'l-locale': 'locale'
      }
    },
})


export default i18n