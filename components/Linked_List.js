import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Node from './Node'
import '../assets/linkedlist.css'

// class node {
//     constructor(data, next = null) {
//         this.id = 1
//         this.data = data
//         this.next = next
//     }
// }
// class linkedlist {
//     constructor() {
//         this.head = null
//     }
//     //insert
//     insert(data) {
//         this.head = new node(data, this.head)
//     }
//     //deleteLast
//     deleteLast() {
//         if (!this.head) {
//             return
//         } else {
//             current = this.head
//             while (!current.next) {
//                 current = current.next
//             }
//             current = null
//         }
//     }
//     //search
//     search(data) {
//         if (!this.head) {
//             return
//         } else {
//             current = this.head
//             while (!current.next) {
//                 if (current.data == data) {
//                     return true
//                 }
//             }
//         }
//     }
//     //delete in between
//     deleteSearch(data) {
//         if (!this.head) {
//             return
//         } else {
//             current = this.head
//             while (!current.next) {
//                 if ((current.next.data = data)) {
//                     current.next = current.next.next
//                     return
//                 }
//                 current = current.next
//             }
//         }
//     }
// }

export default function Linked_List() {
    const [nodes, setNodes] = useState([])
    const [head, setHead] = useState(null)
    const [data, setData] = useState('')

    function createNode(data) {
        const newNode = { id: uuidv4(), data, next: head }
        setNodes([...nodes, newNode])
        setHead(newNode.id)
        setData('')
    }

    function deleteNode(id) {
        const targetElement = nodes.find((node) => node.id === id)
        setNodes(
            nodes
                .map((node) => {
                    if (node.next === id) {
                        return { ...node, next: targetElement.next }
                    }
                    return node
                })
                .filter((node) => node.id !== id)
        )
    }

    return (
        <div className="linkedlist">
            <div className="title">Linked-List</div>
            <input
                type="text"
                value={data}
                onInput={(event) => {
                    setData(event.target.value)
                }}
            />
            <button onClick={() => createNode(data)}>Add Node</button>

            <div> HEAD: {head && head} </div>
            <div className="nodeContainer">
                {nodes.map((node, index) => (
                    <Node
                        key={index}
                        id={node.id}
                        data={node.data}
                        next={node.next}
                        deleteNode={deleteNode}
                    />
                ))}
            </div>
        </div>
    )
}
