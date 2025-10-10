function diffArray(arr1, arr2) {
  // Combine elements from arr1 that are not in arr2
  const notInArr2 = arr1.filter(item => !arr2.includes(item));

  // Combine elements from arr2 that are not in arr1
  const notInArr1 = arr2.filter(item => !arr1.includes(item));

  // Return the symmetric difference (elements in either array but not both)
  return [...notInArr2, ...notInArr1];
}

console.log(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']));