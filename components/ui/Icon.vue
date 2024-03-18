<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: '' 
  },
});
</script>

<template>
  <q-icon
    :name="name"
    :class="variant"
  />
</template>

<style scoped>
.green {
  width: 16px;
  height: 16px;
  font-size: 20px;
  color: #337566;
}

.black-m {
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: #0F0F0F;
}

.black-s {
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: #0F0F0F;
}
</style>