function getIndexToIns(arr, number) {
  // Sort the array in ascending order
  const sortedArr = arr.sort((a, b) => a - b);

  // Use findIndex to find the first element greater than or equal to the number
  const index = sortedArr.findIndex(element => element >= number);

  // If no element is found (all elements are smaller), return the length of the array
  return index === -1 ? sortedArr.length : index;
}