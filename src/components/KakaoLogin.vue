<template>
  <div class="container">
    <h1>카카오 로그인</h1>
    <a :href="kakaoUrl">
      <img src="/kakao_login_medium_narrow.png" alt="Kakao Login">
    </a>
  </div>
</template>

<script>
import axios from 'axios'; // axios 임포트

export default {
  data() {
    return {
      kakaoUrl: '' // 카카오 로그인 URL 저장
    };
  },
  async mounted() {
    try {
      // 로그인 URL 요청
      const response = await axios.get('http://localhost:8080/login/kakao');
      this.kakaoUrl = response.data.location; // 동적 URL 저장
    } catch (error) {
      console.error('카카오 로그인 URL 요청 실패:', error);
      alert('로그인 URL을 가져오는 데 실패했습니다.');
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
