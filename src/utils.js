// 2d array equality check
// [ [], [], []]
// reason for this, is to help remove the dietaries and update the list
export const arraysEqual = (arr1, arr2, index) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return index;
};
