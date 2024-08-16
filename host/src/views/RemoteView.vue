<script setup lang="ts">
import bootstrap from 'remote/bootstrap'
import { onMounted, ref } from 'vue'

const remoteRef = ref()

onMounted(() => {
  bootstrap(remoteRef.value, { token: 'Reiner' })
})
</script>

<template>
  <div ref="remoteRef"></div>
</template>
