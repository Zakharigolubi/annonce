<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  outline: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'green' 
  },
});
</script>

<template>
  <div>
    <q-btn
      no-caps
      rounded
      :outline="outline"
      :label="label"
      :class ="variant"
    />
  </div>
</template>

<style scoped>
.green-large {
  padding: 16px 20px; 
  color: #F5F5F5;
  background-color: #337566;
}

.green-small {
  padding: 8px 12px;
  color: #F5F5F5;
  background-color: #337566;
}

.grey {
  padding: 8px 12px; 
  color: #0F0F0F;
  background-color: #E8E8E8;
}
</style>