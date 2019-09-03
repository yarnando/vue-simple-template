<template>
  <div>
      <div v-if="loading" class="spinner"></div>
  </div>
</template>

<script>
export default {
    props: {
        loading: Boolean
    }
}
</script>

<style>
.spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-left-color: #0077b5;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>