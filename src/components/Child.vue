<template>
  <div>
    <h1>Child</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Back Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'grandchild' }">Grandchild</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
