function truthCheck(collection, pre) {
  // Check if every object in the collection has a truthy value for the property 'pre'
  return collection.every(obj => obj[pre]);
}

// Test the function
console.log(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'isBot')); // Should return false
console.log(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'name')); // Should return true
console.log(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'role')); // Should return false