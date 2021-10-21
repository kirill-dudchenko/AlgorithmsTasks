// For a given string s find the character c (or C) with longest consecutive
// repetition and return: [c, l] where l (or L) is the length of the repetition. 
// If there are two or more characters with the same l return the first in order of appearance.

// For empty string return: ["", 0]

function longestRepetition(s) {
    if (s === ""){return ["", 0]}
    let map = new Map();
    let chararray = s.split("");
    let max = 0;
    let count = 1;
    
    for (i = 0; i < chararray.length; i++){
      if (chararray[i] === chararray[i + 1]){
        count++
        continue;
      }
      if (count > max){
        map.set(count, chararray[i]);
        max = count;
      }
      count = 1;
    }
    
    return [map.get(max), max];
  }

  console.log(longestRepetition('aaaaaaabbbbcccdkdkugnsodjngiTTTTTTTTTTTTTTTTTTTTTTTT'));
