import { createRouter, createWebHistory } from 'vue-router'
import MailTestPage from '@/views/MailTestPage.vue'
import HomePage from '@/views/HomePage.vue'
import KakaoLogin from '@/components/KakaoLogin.vue'
import KakaoCallback from '@/components/KakaoCallback.vue'

// 라우트 설정
const routes = [
  {
    path: '/',                     // 기본 경로
    name: 'HomePage',           // 라우트 이름 (선택 사항)
    component: HomePage       // 연결할 컴포넌트
  },
  {
    path: '/mail',                 // 기본 경로
    name: 'MailTestPage',      // 라우트 이름 (선택 사항)
    component: MailTestPage    // 연결할 컴포넌트
  },
  {
    path: '/login',                 // 기본 경로
    name: 'KakaoLoginPage',      // 라우트 이름 (선택 사항)
    component: KakaoLogin    // 연결할 컴포넌트
  },
  {
    path: '/kakao/callback',                 // 기본 경로
    name: 'KakaoCallbackPage',      // 라우트 이름 (선택 사항)
    component: KakaoCallback   // 연결할 컴포넌트
  },
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(), // 브라우저 히스토리 모드 사용
  routes,                      // 위에서 정의한 라우트 사용
})

export default router
