<template>
  <div>
    <router-link :to="{name: 'home'}"><button>Назад</button></router-link>
    <p>{{id}}</p>
    <p>{{recipe.name}}</p>
    <img :src="recipe.img">
    <p>{{recipe.recipe}}</p>
    <!-- {{recipe}} -->
  </div>
</template>

<script>
  import resept from '../resepts.js'
  export default {
    props:{
      'id':{
          type: String,
          required: true
      }
    },
    computed: {
      recipe() {
        return resept.resepts.find(b => b.id == this.id)
      }
    },
    methods: {
      res() {
        console.log(resept.resepts)

      }
    },
  }
</script>

<style scoped>
  div{
    width: 90%;
    margin: 0 auto;
  }
  img{
    width: 500px;
    margin: 0 auto;
  }
</style>