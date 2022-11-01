const replacer = require('../utils/circular-object-replacer.js');
// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1)
        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if(!this.head) {           //if no head set head and tail to newNode; do not need to set this.prev or newNode.next
            this.head = newNode
            this.tail = newNode
        } else {                         //if head
        this.head.prev = newNode        // current heads previous node is set to the new node
        newNode.next = this.head        // newNodes next value is set to the current head; linking the two together
        this.head = newNode             // newNode is now set as the current head
    }

        this.length++
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);
        if(!this.tail) {                //if no tail/head
            this.head = newNode;        // set head and tail to the newNode
            this.tail = newNode;
        } else {                        // if tail
            this.tail.next = newNode;   // current tails next node set to newNode
            newNode.prev = this.tail;   // newNode prev key points to current tail
            this.tail = newNode         // tail key now points to newNode
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) {return undefined}

        this.head = this.head.next   //head points to next node
        this.head.prev = null

        this.length--

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.tail) {return undefined}

        this.tail = this.head.prev  //head points to next node
        this.tail.next = null

        this.length--
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) {return undefined}
        return this.head.value
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(!this.tail) {return undefined}
        return this.tail.value
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
