<template>
  <div class="home">
    <h1>All Resept</h1>
    <input type="text" v-model="searching">
    <div v-for="(resept, i) in filterResept" :key="i">
      <p>{{resept.name}}</p>
      <router-link :to="{name: 'recipe', params:{id:resept.id}}">
        <img class="recipe-img" :src="resept.img" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import resepts from '../resepts'
export default {
  name: 'home',
  data() {
    return {
      resepts: [],
      searching: '',
    }
  },
  created() {
    this.resepts = resepts.resepts
  },
  computed: {
    filterResept(){
      let res = this.resepts
      return this.resepts.filter(post => {
        return post.name.toLowerCase().includes(this.searching.toLowerCase())
      })
    },
  },
  components: {
    HelloWorld
  }
}
</script>
<style>
  .recipe-img{
    width: 300px;
    height: 200px;
  }
</style>
