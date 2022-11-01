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
        let newNode = new SinglyLinkedNode(val)

        if(!this.head){               // if no head or head == null
            this.head = newNode       // assign newNode to the head pointer
        } else{
            newNode.next = this.head  //next value of newNode is equal to the current head ponter
            this.head = newNode       // head value now points to new node
        }

        this.length++

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
            let current = this.head                   //curr at head pointer
            for (let i = 1; i < this.length; i++) {  // iterating through to the end to travers curr to the end of the list
                current = current.next              // curr is at the tail of the list and is the next pointer
            }
            current.next = newNode                //tail next pointer, points to the newNode which is the newNode
        }

        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head){return undefined}

        let removed = this.head
        this.head = this.head.next     //head pointer now points to next value of the current head
        this.length--

        return removed

        // Write your hypothesis on the time complexity of this method here
        // Constant time, we go directly to references
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) {return undefined}

        let removed;

        if(this.length === 1) {
            let removed = this.head      //clarity of what is removed
            this.head = this.head.next   //head pointer now points towards the next value of that node
            this.length--
            return removed
        }

        let current = this.head
        while(current.next.next) {  //traversing to second last value
            current = current.next
        }
        removed = current.next
        current.next = null     // second last value now equals null removing last value

    this.length--;
    return removed;
}

        // Write your hypothesis on the time complexity of this method here
        // O(n), must traverse through the whole list
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) {return this.head.value}

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list
        if (this.length > 0) {
            let current = this.head
        }

        while(current) {
            console.log(current.value)
            current = current.next
        }
        console.log("NULL")
        // Write your hypothesis on the time complexity of this method here
        // O(n) traverse through list
        //traversal by setting current as this.head; then condition while current is true current.next;

    }


module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
