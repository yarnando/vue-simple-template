<template>
  <div class="header">
      <h1 class="header__title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>

.header {
  display: flex;
  align-items: center;
  background: rgb(47, 47, 47);
  min-height: 60px;
  padding: 0 10vw;
  color: white;
}

.header__title {
  font-size: 20px;  
  font-weight: normal;
}

@media (min-width: 555px) {
  .header__title {
    font-size: 24px;   
  }
}

</style>