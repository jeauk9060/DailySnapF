<template>
  <div>
    <header class="p-3 bg-white border-bottom shadow-sm">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <!-- 네비게이션 메뉴 -->
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><router-link to="/" class="nav-link px-2 text-secondary">Home</router-link></li>
            <li><router-link to="/menu1" class="nav-link px-2 text-dark">메뉴 1</router-link></li>
            <li><router-link to="/menu2" class="nav-link px-2 text-dark">메뉴 2</router-link></li>
            <li><router-link to="/menu3" class="nav-link px-2 text-dark">메뉴 3</router-link></li>
            <li><router-link to="/menu4" class="nav-link px-2 text-dark">메뉴 4</router-link></li>
          </ul>

          <!-- 검색 폼 -->
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control text-dark bg-light" placeholder="검색" aria-label="Search">
          </form>

          <!-- 버튼 -->
          <div class="text-end">
            <router-link to="/login">
              <button type="button" class="btn btn-outline-dark me-2">로그인</button>
            </router-link>
            <router-link to="/signup">
              <button type="button" class="btn btn-warning">회원가입</button>
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>
