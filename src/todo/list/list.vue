<template>
  <div class="todo-list">
    <input 
      class="todo-list-input"
      autofocus
      placeholder="请输入内容"
      @keyup.enter="addTodo"
    />
    <Item
      v-for="list in filterLists"
      :list='list'
      :key='list.index'
      @deleteItem="deleteList"
    ></Item>
    <Tabs
      :lists='lists'
      :tabName='tabName'
      @changTab='toggleFilter'
      @clearCompletedList="clearLists"
    ></Tabs>
  </div>
</template>

<script>
import Item from './list-component/item.vue';
import Tabs from './list-component/tabs.vue';
let index = 0; //这里是每个item的id
export default {
  data(){
    return{
      tabName:'all',//这是底部点击按钮的名字
      lists:[], //原始数组
    }
  },
  components:{
    Item,
    Tabs
  },
  computed:{
    filterLists(){
      if(this.tabName=='all'){
        return this.lists;
      }
      //true表示已经完成了的
      //false表示还是待办的
      let listCompleteStatus = this.tabName === 'completed';
      return this.lists.filter(val=>{
        return val.tabStatus===listCompleteStatus //如果为true,返回已经完成了的list
      })
    }
  },
  methods:{
    // 点击回车增加某一条todolist
    addTodo(e){
      if(e.target.value.length>0){
        this.lists.unshift({
          index:index++,
          value:e.target.value,
          tabStatus:false,
        })
        e.target.value = ''
        // console.log('todolist回车之后的值',e.target.value)
      }
    },
    // 删除某一条todolist
    deleteList(id){
      //方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
      this.lists.splice(this.lists.findIndex(todo=>id===this.lists.index),1);
    },
    //子组件要求切换tab状态
    toggleFilter(state){
      // console.log('状态更改前state:',state)
      this.tabName = state;
      // console.log('状态更改后state:',state)
    },
    //删除已经完成了的todoLists
    clearLists(){
      this.lists = this.lists.filter(val=>val.tabStatus===false)
    }
  },

}
</script>

<style lang="stylus" scoped>
.todo-list
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
  &-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 70px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>