<template>
  <div class="container">
    <h1>카카오 로그인</h1>
    <!-- 카카오 로그인 버튼 -->
    <a :href="kakaoUrl">
      <img src="/kakao_login_medium_narrow.png" alt="Kakao Login">
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kakaoUrl: '' // 카카오 로그인 URL 저장 변수
    };
  },
  mounted() {
    this.getKakaoLoginUrl(); // 컴포넌트 마운트 시 URL 요청
  },
  methods: {
    async getKakaoLoginUrl() {
      try {
        const response = await axios.get('http://localhost:8080/login/kakao');
        this.kakaoUrl = response.data.location; // URL 저장
      } catch (error) {
        console.error('카카오 로그인 URL 요청 실패:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 200px auto;
}
</style>
