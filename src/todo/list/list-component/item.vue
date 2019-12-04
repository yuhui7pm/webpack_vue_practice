<template>
  <div :class="['todo-item', list.tabStatus?'finished':'']">
    <input 
      type="checkbox" 
      class="check"
      v-model="list.tabStatus"/>
    <label>{{list.value}}</label>
    <button class="delete" @click="deleteIt"></button>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type:Object,
      required:true
    }
  },
  methods:{
    deleteIt(){
      this.$emit('deleteItem',this.list.index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item
    position relative
    background-color #fff
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,0.06)
    height 80px
    &.finished
      label 
        color gray
        transition line-through 0.8s
        text-decoration line-through
    &:hover
      .check:after
        background url('../../../asset/images/uncheck_red.png') no-repeat
        background-size 70% 80% 
        background-position center center
      .delete:after
        content "x"
  .check 
    width 0px
    height 0px
    &:after
      content ''
      width 30px
      height 30px
      border-radius 50%
      border 2px solid green
      box-sizing border-box
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
    &:hover:after
      cursor pointer
    &:checked:after
      background url('../../../asset/images/check.png') no-repeat !important
      background-size 70% 80% !important
      background-position center center !important
  label
    white-space pre-line
    word-break break-all
    box-sizing border-box
    padding-left 56px
    display inline-block
    line-height 80px
    transition color 0.8s
  .delete
    position absolute
    top 0
    right 10px
    bottom 0
    width 40px
    height 40px
    margin auto 0
    font-size 30px
    color #cc9a9a
    transition color 0.2s ease-out
    background-color transparent
    appearance none
    border-width 0
    cursor pointer
    outline none
</style>