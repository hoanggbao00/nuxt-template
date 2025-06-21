<script lang="ts" setup>
const { title, description } = getHomepageMeta()

useHead({ title, description })
</script>

<template>
  <div>
    <Button>Click me</Button>
  </div>
</template>
