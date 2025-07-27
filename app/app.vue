<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: `%s | ${appConfig.appName}`,
  meta: [
    {
      name: 'description',
      content: appConfig.appDescription,
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
