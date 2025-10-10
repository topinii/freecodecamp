function whatIsInAName(collection, source) {
  // Get the keys from the source object
  const sourceKeys = Object.keys(source);

  // Filter the collection to find objects that have all key-value pairs from source
  return collection.filter(obj => {
    // Check if every key in source exists in the object and has the same value
    return sourceKeys.every(key => Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === source[key]);
  });
}

// Test the function
console.log(whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));
