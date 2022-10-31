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

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }

        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromHead() {
        // Remove node at head
        const head = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length === 2) {
            this.head = this.tail;
        } else if (this.length > 2) {
            this.head = this.head.next;
            this.head.prev.next = null;
            this.head.prev = null;
        }

        if (this.length > 0 ) this.length--;
        return !head ? undefined : head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        const tail = this.tail;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else if (this.length === 2) {
            this.tail = this.head;
        } else if (this.length > 2) {
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }

        if (this.length > 0 ) this.length--;
        return !tail ? undefined : tail.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) return this.head.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(this.tail) return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
