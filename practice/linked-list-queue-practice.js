// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        //O(n)
        let length = 0;
        let current = this.head;

        while (current) {
            current = current.next;
            length++;
        }
        return length;

        // O(1)
        // This requires changing the implementation of this class:
        // Add a length property to the constructor and increment/decrement whenever we call functions that add/remove nodes
        // then we can just reference this.length
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let current = this.head;

        while (current) {
            sum += current.value;
            current = current.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
        // O(n) time

        //both sum and average (below) can be ran in constant time at the cost of space
        //add a length and a sum property to the constructor and update appropriately as we add/remove nodes
    }

    averageValue() {
        // Returns the average value of all the nodes
        let length = 0;
        let sum = 0;
        let current = this.head;

        while (current) {
            sum += current.value;
            length++;
            current = current.next;
        }
        return sum/length;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let position = 0;
        let current = this.head;

        while (current && position < n) {
            position++;
            current = current.next;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let mid = Math.floor((this.listLength() - 1) / 2);
        return this.findNthNode(mid);

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // finding list length is O(n)
        // finding the Nth is O(n)
        // O(2n) => O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let reversed = new SinglyLinkedList();
        let length = this.listLength();

        while (length > 0) {
            let tail = this.findNthNode(length-1);
            reversed.addToTail(tail.value);
            length--;
        }
        return reversed;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // We traverse to the end of the original list every time [O(n)]
        // then once there we perform addToTail, which is also O(n)
        // so for every n elements, we have to perform n operations => n^2
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let current = this.head;
        let previous = null;

        while(current) {

            let next = current.next;
            if(next === null){this.head = current}

            current.next = previous;
            previous = current;
            current = next;
        }

        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // The doubly linked implementation moves inwards from both sides

    let front = this.head;
    let back = this.tail;

    while (front !== back && front.next !== back) {
        front = front.next;
        back = back.prev;
    }

    return front;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let reversed = new DoublyLinkedList();
        let current = this.tail;
        reversed.head = current;

        while (current) {

            let oldPrev = current.prev;
            let oldNext = current.next;

            current.next = oldPrev;
            current.prev = oldNext;

            current = current.next;
        }

        reversed.tail = current;

        //console.log("reversed", reversed);
        return reversed;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.tail;
        this.head = current;
        while (current) {

            let oldPrev = current.prev;
            let oldNext = current.next;

            current.next = oldPrev;
            current.prev = oldNext;

            current = current.next;
        }
        this.tail = current;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
