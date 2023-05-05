const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const arrays = [  { name: 'tiny', arr: tinyArray },  { name: 'small', arr: smallArray },  { name: 'medium', arr: mediumArray },  { name: 'large', arr: largeArray },  { name: 'extraLarge', arr: extraLargeArray },]

const results = [];

for (const array of arrays) {
  perf.start();
  doublerAppend(array.arr);
  const timeAppend = perf.stop().time;

  perf.start();
  doublerInsert(array.arr);
  const timeInsert = perf.stop().time;

  results.push({
    size: array.name,
    append: timeAppend,
    insert: timeInsert,
  });
}

console.table(results);
