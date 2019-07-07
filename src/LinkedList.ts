import Sorter from './Sorter';

class LinkNode {
  next: LinkNode | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter {
  head: LinkNode | null = null;
  constructor() {
    super();
  }

  add(data: number): void {
    const node = new LinkNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  at(index: number): LinkNode {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: LinkNode | null = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Just swap the values for now.
    const rightNode = this.at(rightIndex);
    const leftNode = this.at(leftIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;

    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: LinkNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
