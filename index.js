// Code your solution here!

function printString(text){
  console.log(text[0])
  if(text.length > 1){
    printString(text.substring(1, text.length))
  }else{
    return true
  }
}

function reverseString(text){
  var nextString = text.substring(1)
  if(text === ""){
    return ""
  }else{
    return reverseString(nextString) + text[0]
  }
}

function isPalindrome(text){
  var nextText = text.substring(1, text.length - 1)
  if(text.length === 1 || text === ""){
    return true
  }else if(text[0] === text[text.length - 1]){
    return isPalindrome(nextText)
  }else{
    return false
  }
}

function addUpTo(arr, upto){
  if(upto >= 0){
    var nextArr = arr.slice(1)
    upto--
    return addUpTo(nextArr, upto) + arr[0]
  }else{
    return 0
  }
}

function maxOf(arr){
  let begin = arr[0]
  let end = arr[arr.length - 1]
  if(arr.length > 1){
    if(begin > end){
      let next = arr.slice(0, arr.length - 1)
      return maxOf(next)
    }else{
      let next = arr.slice(1)
      return maxOf(next)
    }
  }else{
    return arr[0]
  }
}

function includesNumber(arr, num){
  let begin = arr[0]
  if(arr.length > 0){
    if(begin === num){
      return true
    }else{
      let next = arr.slice(1)
      return includesNumber(next, num)
    }
  }else{
    return false
  }
}
