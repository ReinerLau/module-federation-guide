<script setup lang="ts">
import bootstrap from 'remote/bootstrap'
import { onMounted, ref } from 'vue'

const remoteRef = ref()

onMounted(() => {
  bootstrap(remoteRef.value)
})
</script>

<template>
  <div ref="remoteRef"></div>
</template>
