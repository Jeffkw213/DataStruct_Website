import React, { Component } from 'react'
class node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}
class linkedlist {
  constructor(){
    this.head = null;
  }
  //insert 
  insert (data) {
    this.head = new node(data, this.head);
  }
  //deleteLast
  deleteLast(){
    if(!this.head){
      return;
    }else{
      current = this.head;
      while (!current.next){
        current = current.next;
      }
      current = null;
    }
  }
  //search 
  search(data){
    if (!this.head){
      return;
    }else{
      current = this.head;
      while (!current.next){
        if(current.data == data){
          return true;
        }
      }
    }
  }
  //delete in between
  deleteSearch(data){
    if(!this.head){
      return;
    }else{
      current =this.head;
      while (!current.next){
        if (current.next.data = data){
          current.next = current.next.next;
          return
        }
        current = current.next
      }
    }
  }
}
export default class Trees extends Component {
  //props
  data = {
    
  }
  render() {
    return (
      <div className='Tree'>
        <div className='title'>        
          
        </div>

      </div>
    )
  }
}
