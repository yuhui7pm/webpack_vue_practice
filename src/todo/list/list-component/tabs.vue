<template>
  <div class="bottom">
    <span class="left">{{this.unfinished.length}} items left</span>
    <span class="tabs">
      <span v-for="tab in tabsBut" :key="tab" :class="[tab,tabName===tab?'actived':'']" @click="toggleFilter(tab)">
        {{tab}}
      </span>
    </span>
    <span 
      class="clear"
      @click="clearCompleted"
    >
      Clear Completed
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabsBut:['all', 'active', 'completed']
    }
  },
  props:{
    lists:{
      type:Array,
      required:true
    },
    tabName:{
      type:String,
      required:true
    }
  },
  computed:{
    unfinished(){
      return this.lists.filter(val=>{
        return val.tabStatus===false
      })
    }
  },
  methods:{
    toggleFilter(state){
      console.log('我已经点击了',state);
      this.$emit('changTab',state)
    },
    clearCompleted(){
      this.$emit('clearCompletedList')
    }
  }
}
</script>

<style lang="stylus" scoped>
.bottom
    font-weight 500
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    width 200px
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>