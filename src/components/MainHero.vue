<template>
  <div>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">뉴스레터 구독</h1>
          <p class="col-lg-10 fs-4">최신 뉴스, 기사 및 자료를 이메일로 받아보세요. 매주 새로운 소식을 전해드립니다.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form @submit.prevent="submitForm" class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <!-- 이메일 입력 -->
            <div class="form-floating mb-3">
              <input type="email" v-model="form.email" class="form-control" id="floatingInput"
                placeholder="name@example.com" @blur="validateEmail" />
              <label for="floatingInput">이메일 주소를 입력하세요</label>
              <!-- 이메일 에러 메시지 -->
              <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
            </div>

            <!-- 약관 동의 체크박스 -->
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" v-model="form.terms" @change="validateTerms" />
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <!-- 약관 에러 메시지 -->
            <small v-if="errors.terms" class="text-danger d-block">{{ errors.terms }}</small>

            <!-- 제출 버튼 -->
            <button class="w-100 btn btn-lg btn-secondary mt-3" type="submit">구독하기</button>
            <hr class="my-4">
            <small class="text-body-secondary">개인정보는 안전하게 보호됩니다. 언제든 구독을 해지할 수 있습니다.</small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

// 폼 데이터 상태 관리
const form = reactive({
  email: '',
  terms: false
});

// 에러 상태 관리
const errors = reactive({
  email: '',
  terms: ''
});

// 이메일 유효성 검사
const validateEmail = () => {
  if (!form.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!/.+@.+\..+/.test(form.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  } else {
    errors.email = '';
  }
};

// 약관 체크박스 유효성 검사
const validateTerms = () => {
  if (!form.terms) {
    errors.terms = '약관에 동의해야 합니다.';
  } else {
    errors.terms = '';
  }
};

// 폼 제출 처리
const submitForm = async () => {
  // 유효성 검사 실행
  validateEmail();
  validateTerms();

  // 에러가 없을 때만 전송
  if (!errors.email && !errors.terms) {
    try {
      const response = await axios.post('http://localhost:8080/api/userinfo', {
        email: form.email,                           // 이메일
        privacyConsent: form.terms,                 // 개인정보 동의 여부
      });

      alert('구독 신청이 완료되었습니다!');
      console.log(response.data);

      // 폼 초기화
      form.email = '';
      form.terms = false;
    } catch (error) {
      alert('구독 신청에 실패했습니다. 다시 시도해 주세요.');
      console.error(error);
    }
  } else {
    alert('입력 항목을 확인하세요.');
  }
};
</script>

<style lang="scss" scoped></style>
