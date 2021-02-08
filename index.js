// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString){
       if (myString.length > 1){
            let mySubString = myString.substring(1, myString.length)
            return reverseString(mySubString) + myString[0]
       }else{
           return myString
       }
   }

   function isPalindrome(string){
    if(string.length <= 1){
      return true
    }
    let firstLetter = string[0]
    let lastLetter = string[string.length - 1]
    if(firstLetter === lastLetter){
      let subString = string.substring(1, string.length - 1)
      return isPalindrome(subString)
    }else{
      return false
    }
   }

   function addUpTo(array, n){
     if(n === 0){
       return array[0]
     }
     return addUpTo(array,n-1) + array[n]
   }

   function maxOf(array){
     let i = 0
     if (array.length === 1){
       return array[0]
     }
     let newArray = array.slice( i + 1)
     return Math.max(array[0],maxOf(newArray))
   }

   function includesNumber(array, ele){
    let i = 0
    if(array.length === 0){
      return false
    } 
    if(array[i] === ele){
      return true
    }
    let newArray = array.slice(i + 1)
    return includesNumber(newArray, ele)
  }
 
