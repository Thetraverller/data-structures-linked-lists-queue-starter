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
        // O(n)
        let length = 0;
        let current = this.head;

        while(current) {
            length++;
            current = current.next;
        }

        return length;

        // O(1)
        // Add length property to the list to achieve this
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let current = this.head;

        while(current) {
            sum += current.value;
            current = current.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (n < 0) return null;

        let current = this.head;

        for (let i = 1; i <= n; i++) {
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
        const len = this.listLength();
        const mid = len % 2 === 0 ? (len / 2) - 1: Math.floor(len / 2);

        return this.findNthNode(mid);

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new SinglyLinkedList();

        const len = this.listLength();

        let newNode;

        for (let i = len - 1; i >= 0; i--) {
            newNode = this.findNthNode(i);
            newList.addToTail(newNode.value);
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        // O(n + 3n2) => O(n2)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        const len = this.listLength();

        let index = len - 1;
        let node1 = this.findNthNode(index);

        while (node1) {
            this.addToTail(node1.value);

            node1 = this.findNthNode(index - 1);
            index--;
        }

        let node2 = this.head;

        for (let i = 0; i < len; i++) {
            const next = node2.next;

            node2.next = null;
            this.head = next;

            node2 = next;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(2n + 2n2 + n) => O(n2)
    }

    print() {
        // Print out the linked list
        const len = this.listLength();

        if (len > 0) {
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
        let len = 0;
        let current = this.head;

        while(current) {
            len++;
            current = current.next;
        }

        const mid = len % 2 === 0 ? (len / 2) - 1: Math.floor(len / 2);
        current = this.head;

        for (let i = 1; i <= mid; i++) {
            current = current.next;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();

        let current = this.tail;

        while (current) {
            newList.addToTail(current.value)
            current = current.prev;
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
        // O(1);
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let len = 0;
        let node1 = this.tail

        while (node1) {
            this.addToTail(node1.value);
            node1 = node1.prev;
            len++;
        }

        let node2 = this.head;

        for (let i = 0; i < len; i++) {
            const next = node2.next;

            node2.prev = null;
            node2.next = null;
            this.head = next;

            node2 = next;
        }

        this.head.prev = null;
        // Write your hypothesis on the time complexity of this method here
        // O(2n) => O(n);
    }

    print() {
        // Print out the linked list
        let len = 0;
        let current = this.head;

        while(current) {
            len++;
            current = current.next;
        }

        if (len > 0) {
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
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
