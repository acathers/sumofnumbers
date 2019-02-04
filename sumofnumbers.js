const myList = [1, 2, 3, 4];

function sumFor(list) {
  let total = 0;
  for (const i of list) {
    total += i;
  }
  return total;
}

console.log(sumFor(myList));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

console.log(sumWhile(myList));

function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list[0] + sumRecursion(list.slice(1));
}

console.log(sumRecursion(myList));

function sumTheEasyWay(list) {
  return _.reduce(list, (total, num) => total + num, 0);
}

console.log(sumTheEasyWay(myList));
