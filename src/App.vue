<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>

<template>
  {{ input || 'empty' }}<br>
  <input v-model="input"/>
</template>
