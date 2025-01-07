import { createApp } from 'vue'
import App from './App.vue'

// Pinia 설정
import { createPinia } from 'pinia'

// Vue Router 설정
import router from './router'

// Vuetify 설정
import 'vuetify/styles' // Vuetify 스타일 적용
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 아이콘 설정 추가
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Material Design Icons
import '@mdi/font/css/materialdesignicons.css' // 아이콘 CSS 적용

// 부트스트랩 및 아이콘 추가
import 'bootstrap/dist/css/bootstrap.min.css' // 부트스트랩 스타일 적용
import 'bootstrap' // 부트스트랩 JavaScript 적용
import 'bootstrap-icons/font/bootstrap-icons.css' // 부트스트랩 아이콘 CSS 적용

// 테마 및 아이콘 구성
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // 기본 아이콘 세트 설정
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light', // 테마 설정 (light 또는 dark 선택 가능)
  },
})

// Pinia 생성
const pinia = createPinia()

// 애플리케이션 생성 및 설정
const app = createApp(App)

app.use(pinia) // Pinia 사용 등록
app.use(router) // Router 사용 등록
app.use(vuetify) // Vuetify 사용 등록

app.mount('#app') // 애플리케이션 마운트
