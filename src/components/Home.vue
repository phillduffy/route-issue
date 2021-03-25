<template>
  <div>
    <h1>Parent</h1>

    <router-link :to="{ name: 'child', params: { id: '1' } }"
      >Child with Param</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
