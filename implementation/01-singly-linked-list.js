const replacer = require('../utils/circular-object-replacer.js');

// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 1; i < this.length; i++) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {return undefined}

        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // Constant time, we go directly to references
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {return undefined}

        let removed;

        if (this.length === 1) {
            removed = this.head;
            this.head = null;
            this.length--;
            return removed;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        removed = current.next;
        current.next = null;

        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(n), must traverse through the whole list
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) return this.head.value;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list

        if (this.length > 0) {
            let current = this.head;

            while(current) {
                console.log(current.value)
                current = current.next;
            }

            console.log("NULL");
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
