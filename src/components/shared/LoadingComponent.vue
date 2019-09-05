<template>
  <div>
      <div v-if="loading" :style="{ 'width': `${size}px`, 'height': `${size}px` }" class="spinner"></div>
  </div>
</template>

<script>
export default {
    props: {
        loading: Boolean,
        size: Number
    }
}
</script>

<style>
.spinner {
    margin-left: 5px;
    display: inline-block;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-left-color: #0077b5;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>