import React, { Component } from 'react'
import '../assets/linkedlist.css'
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

export default class Linked_List extends Component {
  //props
  render() {
    return (
      <div className='linkedlist'>
        <div className='title'>        
          Linked-List
          
        </div>

      </div>
    )
  }
}
