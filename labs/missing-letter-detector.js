function fearNotLetter(str) {
    // Get the character codes for the first and last characters
    const start = str.charCodeAt(0);
    const end = str.charCodeAt(str.length - 1);
    
    // Check each character code in the expected range
    for (let i = start; i <= end; i++) {
        const expectedChar = String.fromCharCode(i);
        
        // If the expected character is not found in the string, it's missing
        if (str.indexOf(expectedChar) === -1) {
            return expectedChar;
        }
    }
    
    // If all characters are present, return undefined
    return undefined;
}
