// This is the link of this JavaScript Challenge from codewars.com
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
    text = text.toLowerCase()
    
    // We have created a string alphanum including all the letters in the alphabet in consecutive order to determin the position of the letter with the index always +1
    alphanum = 'abcdefghijklmnopqrstuvwxyz'
    
    arr = []
    for(i=0; i<=text.length-1; i++){
      for(j=0; j<=alphanum.length-1; j++){
        // console.log(text[i], alphanum[j])
    
        if(text[i] == alphanum[j]){
          index = alphanum.indexOf(alphanum[j])
        //   console.log(`${text[i]} is the ${index+1} letter of the alphabet`)
        arr.push(index+1)
        }
      }
    }

    arrstring = arr.toString()
    const result = arrstring.replace(/,/g, ' ');
    console.log(text)
    console.log(result);
}
alphabetPosition("The sunset sets at twelve o' clock.")
console.log('====================')
alphabetPosition('carleyeshield21')
