<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> <!-- 자동 슬라이드 활성화 -->
      <!-- 인디케이터 -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <!-- 슬라이드 콘텐츠 -->
      <div class="carousel-inner min-vh-50"> <!-- 최소 높이 뷰포트의 50% 설정 -->
        <div class="carousel-item active" data-bs-interval="4000">
          <img src="https://placehold.co/1920x600" class="d-block w-100 h-100 object-fit-cover" alt="Slide 1">
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="https://placehold.co/1920x600" class="d-block w-100 h-100 object-fit-cover" alt="Slide 2">
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="https://placehold.co/1920x600" class="d-block w-100 h-100 object-fit-cover" alt="Slide 3">
        </div>
      </div>
      <!-- 이전 버튼 -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <!-- 다음 버튼 -->
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>
