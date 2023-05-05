// SUM ZERO
function addToZero(nums) {
    const seen = new Set();  
    for (const num of nums) {
        if (seen.has(-num)) {
            return true;      
        }
        seen.add(num);
    }
    return false;             
}

console.log(addToZero([]));                 
console.log(addToZero([1]));                
console.log(addToZero([1, 2, 3]));          
console.log(addToZero([1, 2, 3, -2]));      
console.log(addToZero([1, 2, -1, 4, -4]));  

//-------------------------------------------

// UNIQUE CHARS
function hasUniqueChars(word) {
    const seen = new Set();  
    for (const char of word) {
        if (seen.has(char)) {
            return false;     
        }
        seen.add(char);
    }
    return true;              
}

console.log(hasUniqueChars("Monday"));   
console.log(hasUniqueChars("Moonday"));  
console.log(hasUniqueChars(""));         
console.log(hasUniqueChars("a"));        

//--------------------------------------------

// PANGRAM
function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charSet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));
    return alphabet.split('').every(char => charSet.has(char));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));  
console.log(isPangram("I like cats, but not mice"));                     
console.log(isPangram(""));                                              
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));                 

//---------------------------------------------
 
// LONGEST WORD
function findLongestWord(words) {
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}

console.log(findLongestWord(["hi", "hello"]));                       
console.log(findLongestWord(["cat", "dog", "elephant", "giraffe"])); 
console.log(findLongestWord([]));                                    



//EXTRA CREDIT - SPACE COMPLEXITY:
//SUM ZERO - O(n)
//UNIQUE CHARS - O(k)
//PANGRAM - O(1)
//LONGEST WORD - O(1)