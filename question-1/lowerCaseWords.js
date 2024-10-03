function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array."));
        }
        //lowercase the string elements
        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string') 
            .map(word => word.toLowerCase()); 
        resolve(lowerCasedWords);
    });
}
//Example 
const mixedArray = ['pizza', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(`[${result.join(', ')}]`)) 
    .catch(error => console.error(error));
  