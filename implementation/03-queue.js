const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val)
        if (!this.tail) {
            this.head = newNode
            this.tail = newNode
        }

        if(this.tail) {
            this.tail.next = newNode
        }

        this.length++
        return this.length

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head) {return undefined}

        if(this.length === 1) {
            this.head = null
            this.tail = null
        }

        this.head = this.head.next
        this.length--

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
