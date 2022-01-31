class Node {
  constructor(val = null) {
    this.value = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
    this.c = 0
  }

  push(val) {
    //first check if the list is empty.
    //if its empty then set the head and tail to the new node .
    //if its not empty then set the tail .next to new node and set the tail to the new node.
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }
    return this
  }
  pop() {
    if (!this.head) {
      return undefined
    } else {
      let curr, prev
      curr = this.head
      prev = curr
      while (curr.next) {
        prev = curr
        curr = curr.next
      }
      this.tail = prev
      this.tail.next = null
      this.length--

      if (this.length === 0) {
        this.head = null
        this.tail = null
        this.length = 0
      }
      return curr
    }
  }
  shift() {
    if (!this.head) return undefined
    else {
      this.c++
      console.log('reached here', this.c)
      let temp = this.head
      this.head = this.head.next
      this.length--
      if (this.length === 0) {
        this.tail = null
      }
    }
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
    return this.head
  }
  get(idx) {
    // if index is negative or out of bounds then return null
    if (idx < 0 || idx > this.length) return null
    else {
      //initialise a curr and set it to
      let temp, curr
      let count = 0
      curr = this.head
      while (count < idx && curr.next !== null) {
        curr = curr.next
        count++
      }
      temp = curr
      return curr
    }
  }
  set(idx, value) {
    if (!this.get(idx)) return null
    else {
      const temp = this.get(idx)
      temp.value = value
      return this
    }
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false
    if (idx === 0) {
      this.unshift(value)
      return true
    } else if (idx === this.length) {
      this.push(value)
      return true
    } else {
      const newNode = new Node(value)
      let foundNode = this.get(idx - 1)
      if (foundNode) {
        newNode.next = foundNode.next
        foundNode.next = newNode
        this.length++
        return true
      }
    }
    return false
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined
    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()
    else {
      let prevNode = this.get(idx - 1)
      let temp = prevNode.next
      prevNode.next = temp.next
      this.length--
      return temp
    }
  }
  reverse() {
    if (!this.head) return undefined
    else {
      let prev = null
      let next = null
      let node = this.head
      this.head = this.tail
      this.tail = node
      while (!node) {
        next = node.next
        node.next = prev
        prev = node
        node = next
      }
      return this
    }
  }
}
