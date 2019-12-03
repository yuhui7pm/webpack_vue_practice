<template>
  <div id="test">{{text}}</div>
</template>

<script>
  export default {
    data(){
      return{
        text:'我是余晖'
      }
    }
  }
</script>

<style>
body{
  background: red;
}
#test{
  color:greenyellow;
  width:200px;
  height:200px;
}
</style>