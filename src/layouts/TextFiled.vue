<template>
  <v-card class="mx-auto" max-width="344" title="메일 값 보내기 테스트">
    <v-container>
      <!-- 이메일 입력 -->
      <v-text-field v-model="email" color="primary" label="이메일" variant="underlined"
        :rules="[rules.required, rules.email]" required></v-text-field>

      <!-- 이름 입력 -->
      <v-text-field v-model="first" color="primary" label="이름" variant="underlined" :rules="[rules.required]"
        required></v-text-field>

      <!-- 약관 동의 체크박스 -->
      <v-checkbox v-model="terms" color="secondary" label="(필수) 개인정보 수집 및 이용에 동의합니다." :rules="[rules.requiredTerms]"
        style="font-size: 10px; color: gray;"></v-checkbox>
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

<script>
export default {
  data() {
    return {
      // 데이터 변수
      first: '',
      email: '',
      terms: false,

      // 입력 검증 규칙
      rules: {
        required: value => !!value || '필수 입력 항목입니다.', // 빈 값 방지
        email: value => /.+@.+\..+/.test(value) || '올바른 이메일 형식이 아닙니다.', // 이메일 형식 검증
        requiredTerms: value => value || '약관에 동의해야 합니다.', // 체크박스 검증
      },
    }
  },
  computed: {
    // 폼 검증 상태 확인
    validForm() {
      return this.first && this.email && /.+@.+\..+/.test(this.email) && this.terms;
    }
  },
  methods: {
    submitForm() {
      if (this.validForm) {
        alert('등록 완료!');
      } else {
        alert('모든 항목을 올바르게 입력하세요.');
      }
    }
  }
}
</script>
