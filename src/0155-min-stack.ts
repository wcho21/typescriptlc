class Stack {
    #stack: number[]
    
    constructor() {
        this.#stack = []
    }

    push(val: number): void {
        this.#stack.push(val)
    }

    pop(): void {
        this.#stack.pop()
    }

    peek(): number {
        return this.#stack[this.#stack.length-1]
    }

    isEmpty(): boolean {
        return this.#stack.length === 0
    }
}

class MinStack {
    #stack: Stack
    #minStack: Stack

    constructor() {
        this.#stack = new Stack()
        this.#minStack = new Stack()
    }

    push(val: number): void {
        if (this.#minStack.isEmpty()) {
            this.#minStack.push(val)
        } else {
            const lastMinElem: number = this.#minStack.peek()
            const minVal: number = Math.min(lastMinElem, val)
            
            this.#minStack.push(minVal)
        }
        
        this.#stack.push(val)
    }

    pop(): void {
        this.#minStack.pop()
        this.#stack.pop()
    }

    top(): number {
        return this.#stack.peek()
    }

    getMin(): number {
        return this.#minStack.peek()
    }
}