function uniteUnique(arr1, arr2) {
    // Use the arguments object to handle any number of arrays
    const result = [];
    const seen = new Set();
    
    // Loop through all arguments (arrays)
    for (let i = 0; i < arguments.length; i++) {
        const currentArray = arguments[i];
        
        // Loop through each element in the current array
        for (let j = 0; j < currentArray.length; j++) {
            const element = currentArray[j];
            
            // If we haven't seen this element before, add it to result
            if (!seen.has(element)) {
                result.push(element);
                seen.add(element);
            }
        }
    }
    
    return result;
}