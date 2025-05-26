module.exports = function findSubarraysWithSum(array, targetSum) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let element1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j];
      if (targetSum === element1 + element2) {
        result.push([element1, element2]);
      }
    }
  }

  return result;
};
