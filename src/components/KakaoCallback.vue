<template>
  <div>
    <h1>로그인 처리 중...</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async mounted() {
    // 현재 URL에서 인가 코드 추출
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      try {
        // 인가 코드로 백엔드에 요청하여 사용자 정보 처리
        const response = await axios.get(`http://localhost:8080/kakao/callback?code=${code}`);
        console.log('사용자 정보:', response.data);
        alert('로그인 성공!');
      } catch (error) {
        console.error('로그인 오류:', error);
        alert('로그인 실패!');
      }
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20%;
}
</style>
