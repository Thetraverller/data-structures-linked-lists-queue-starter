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
        const head = this.head;

        if (this.head) {
            this.head = this.head.next;
            this.length--;
            return head;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        let tail;

        if (this.head) {

            if (this.length === 1) {
                tail = this.head;
                this.head = null;
            } else {
                let penultimate = this.head;

                for (let i = 1; i < this.length - 1; i++) {
                    penultimate = penultimate.next;
                }

                tail = penultimate.next;
                penultimate.next = null;
            }

            this.length--;
            return tail;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
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
