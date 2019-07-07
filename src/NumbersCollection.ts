import Sorter from './Sorter';

class NumbersCollection extends Sorter {
  public collection: number[];
  public length: number;
  constructor(data: number[]) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const temp = this.collection[leftIndex];
      this.collection[leftIndex] = this.collection[rightIndex];
      this.collection[rightIndex] = temp;
    }
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }
}

export default NumbersCollection;
