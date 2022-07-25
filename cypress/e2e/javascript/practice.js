const numbers = [1, 3, 4, 5, 6];

let initialValue = 5;

let sumNumbers = numbers.reduce(
  (prevValue, currValue) => prevValue + currValue,
  initialValue
);

let sumNumbersNew = numbers.reduce((prevValue, currValue, currIndex) => {
  return currIndex == 0 ? prevValue + currValue : prevValue;
});

console.log(sumNumbers);
console.log(sumNumbersNew);

const multNumber = numbers.map((number) => number * 3);

console.log(multNumber);

const newNumber = [6, 7, 8, ...numbers];
console.log(newNumber);

const functionSpread = (numbers) => {
  console.log(numbers);
};

functionSpread([22, 11, 33, 44]);

const obj = {
  log: ['a', 'b', 'c', 'd'],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
