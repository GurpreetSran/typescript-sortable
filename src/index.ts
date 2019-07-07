import NumbersCollection from './NumbersCollection';
import CharsCollection from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCol = new NumbersCollection([2, 3, -32, 5, 4]);
numbersCol.sort();
console.log(numbersCol.collection);

const charsCol = new CharsCollection('weDfsdfmdjf');
charsCol.sort();
console.log(charsCol.collection);

const linkList = new LinkedList();
linkList.add(34);
linkList.add(-34);
linkList.add(24);
linkList.add(3);
linkList.add(-6);
linkList.add(-26);

linkList.sort();
linkList.print();
