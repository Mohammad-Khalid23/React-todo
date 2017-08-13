import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class AppComponent extends Component {
  constructor(props) {
    super(props)
    var values = localStorage.getItem("dataTodo"); //getting todo list from localStorage
    values = JSON.parse(values)
        if(values === null){
      values = []
      localStorage.setItem("dataTodo",values)
    }
    this.state = {
    todoValue: values // array of todo from localStorage
    }
  }

  //add todo in the list
  addTodo() {
    var input = this.refs.inputValue.value
    if (input !== "" && input !== "x") {
      this.state.todoValue.unshift(input)
      this.refs.inputValue.value = " " // make input field empty
      this.setState({ todoValue: this.state.todoValue })
      localStorage.setItem("dataTodo",JSON.stringify(this.state.todoValue))

    }else {
      alert("Please Write Something in the Box")
    }
  }

//remove All todo
  removeAll() {
      alert("Removing All")
    var empty=[]; //replacing empty array iwth todo
    localStorage.setItem("dataTodo",JSON.stringify(empty))
    var emptyArray= localStorage.getItem("dataTodo")
      emptyArray = JSON.parse(emptyArray)
      this.setState({ todoValue: emptyArray })
  }
  //deleting specific todo item
  deleteTodo(index) {
    console.log(index)
    var allTodo = this.state.todoValue
    allTodo.splice(index,1)
    this.setState({todoValue : this.state.todoValue})
}

  render() {

    return (
      <div className ="main" >
        <div className="container">
          <h1>My First React Todo</h1>

          <input type="text" ref="inputValue" className="inputStyle" />
          <button className="btn btn1" onClick={this.addTodo.bind(this)} > Add </button>
          <button className="btn" onClick={this.removeAll.bind(this)}>Remove All</button>
          <h3>Work to Do</h3>
          <div className="listItems">
          <ul ref="completeList">
            {
              this.state.todoValue.map((Value, index) => {
                return (
                  <li key={index} className="list"> 
                  {Value}
                  <span className="close" onClick={this.deleteTodo.bind(this,index)} >x</span>
                </li>
                )
              })
            }
          </ul>
          </div>
        </div>

      </div>
    )
  }
}
export default AppComponent;
