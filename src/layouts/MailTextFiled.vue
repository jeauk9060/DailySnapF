<template>
  <v-card class="mx-auto" max-width="800" title="메일 값 보내기 테스트">
    <v-container>
      <!-- 이메일 입력 -->
      <v-text-field v-model="state.email" color="primary" label="이메일" variant="underlined"
        :rules="[rules.required, rules.email]" required></v-text-field>

      <!-- 이름 입력 -->
      <v-text-field v-model="state.first" color="primary" label="이름" variant="underlined" :rules="[rules.required]"
        required></v-text-field>

      <!-- 약관 동의 체크박스 -->
      <v-checkbox v-model="state.terms" color="secondary" label="(필수) 개인정보 수집 및 이용에 동의합니다."
        :rules="[rules.requiredTerms]" style="font-size: 10px; color: gray;"></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <!-- 등록 버튼 -->
      <v-btn color="success" :disabled="!validForm" @click="submitForm">
        구독하기
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive, computed } from 'vue';
import axios from 'axios';

// 상태 관리
const state = reactive({
  first: '',
  email: '',
  terms: false
});

// 유효성 검증 규칙
const rules = {
  required: value => !!value || '필수 입력 항목입니다.',
  email: value => /.+@.+\..+/.test(value) || '올바른 이메일 형식이 아닙니다.',
  requiredTerms: value => value || '약관에 동의해야 합니다.'
};

// 폼 검증 상태
const validForm = computed(() => {
  return state.first && state.email && /.+@.+\..+/.test(state.email) && state.terms;
});

// 폼 제출 처리
const submitForm = async () => {
  if (validForm.value) {
    try {
      const response = await axios.post('http://localhost:8080/api/userinfo', {
        name: state.first,
        email: state.email
      });
      alert('등록 완료!');
      console.log(response.data);
    } catch (error) {
      alert('등록 실패. 다시 시도하세요.');
      console.error(error);
    }
  } else {
    alert('모든 항목을 올바르게 입력하세요.');
  }
};
</script>
