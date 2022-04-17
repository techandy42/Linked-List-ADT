// Linked List ADT Implementation

interface node<T> {
    item: T
    next: llnode<T>
}

interface Illist<T> {
    createNode(item: T, next: llnode<T>): node<T>
    addFront(item: T): void
    removeFront(): T | undefined
    insert(item: T): void
    remove(item: T): T | undefined
    size(): number
    print(): void
}

type llnode<T> = node<T> | null

class Llist<T> implements Illist<T> {
    front: llnode<T>

    constructor() {
        const node: llnode<T> = null
        this.front = node
    }

    createNode(item: T, next: llnode<T>): node<T> {
        return {
            item,
            next,
        }
    }

    addFront(item: T): void {
        if (this.front == null) {
            const node: node<T> = this.createNode(item, null)
            this.front = node
        } else {
            const node: node<T> = this.createNode(item, this.front)
            this.front = node
        }
    }

    removeFront(): T | undefined {
        if (this.front == null) {
            return undefined
        }

        const retval = this.front.item
        this.front = this.front.next
        return retval
    }

    insert(item: T): void {
        if (this.front == null) {
            return this.addFront(item)
        } else if (this.front.item > item) {
            return this.addFront(item)
        }
        
        let node: llnode<T> = this.front
        while (node.next != null && node.next.item < item) {
            node = node.next
        }
        
        if (node.next == null) {
            node.next = this.createNode(item, null)
        } else {
            const newnode = this.createNode(item, node.next)
            node.next = newnode
        }
    }

    remove(item: T): T | undefined {
        if (this.front == null) {
            return undefined
        }

        let node: llnode<T> = this.front
        while (node.next != null && node.next.item != item) {
            node = node.next
        }

        if (node.next == null) {
            return undefined
        } else {
            node.next = node.next.next
            return item
        }
    }

    size(): number {
        let count = 0
        let node: llnode<T> = this.front
        while (node != null) {
            count++
            node = node.next
        }     
        return count
    } 

    print(): void {
        let node: llnode<T> = this.front
        while (node != null) {
            console.log(node.item)
            node = node.next
        }
    }
}
