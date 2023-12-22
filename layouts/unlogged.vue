<script lang="ts" setup></script>

<template>
  <div>
    <div class="container">
      <div class="backgroundImage"></div>
      <div class="formContainer">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.backgroundImage {
  background-image: url('https://picsum.photos/1500/800');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.5;
}
.formContainer {
  background-color: white;
  width: 50%;
  height: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
