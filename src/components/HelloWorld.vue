<template>
  <div>
    {{recipe.name}}
  </div>
</template>

<script>
  import resept from '../resepts.js'
  export default {
    computed: {
      recipe() {
        return resept.resepts.find(b => b.id == this.id)
      }
    },
  }
</script>

<style scoped>

</style>