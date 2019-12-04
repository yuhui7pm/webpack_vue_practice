import '../../asset/todoList/footer.styl';

export default {
  data(){
    return{
      author:"Yu Hui"
    }
  },
  render(){
    return(
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}