<template>
  <div>
      <h1>params --> {{$route.params.keyword}} ===== {{keyword}}</h1>
      <h1>query --> {{$route.query.k}} ====== {{k}}</h1>
  </div>
</template>

<script>
export default {
    name: '',
    props:['keyword','k']
}
</script>

<style scoped>

</style>