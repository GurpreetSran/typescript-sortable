import Sorter from './Sorter';

class CharactersCollection extends Sorter {
  collection: string;
  length: number;

  constructor(str: string) {
    super();
    this.collection = str;
    this.length = str.length;
  }

  swap(leftIndex: number, rightIndex: number) {
    const chars = this.collection.split('');
    const temp = this.collection[leftIndex];

    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = temp;

    this.collection = chars.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLocaleLowerCase()
    );
  }
}

export default CharactersCollection;
