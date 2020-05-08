/*
* Ways to export:
*
*   You can export individual stuff using the module.exports = *name*
*   To export multiple use object file notation like below
*/

const count = (arr1) => {
  return `${arr1} has ${arr1.length} elements. \nThe total is ${add(arr1)}`;
};

const add  = arr1 => {
  let tot = 0;

  arr1.forEach( (i) => {
    tot += i;
  });
  return tot;
}

//module.exports = count;

module.exports = {
  count: count, add: add
};
