<template>
  <div id="app">
    <div id="cover">
      <Header></Header>
      <TodoList></TodoList>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './todo/header/header.vue';
  import TodoList from './todo/list/list.vue';
  import Footer from './todo/footer/footer.jsx';
  
  export default{
    components:{
      Header,
      TodoList,
      Footer,
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
      position absolute
      left 0
      right 0
      top 0
      bottom 0   
      background-color #999 
      opacity 0.5
      z-index 1
</style>