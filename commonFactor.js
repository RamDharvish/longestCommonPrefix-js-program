function longestCommon(str) {
     
    const first=str[0]
    const second=str[1]
    const last=str[str.length-1]
    let result=""

   for(let i=0;i<first.length;i++) {
    if (first[i]===second[i] && first[i]===last[i]) {
        result+=first[i]
    }
   }
   return result
    
}




let str= ["flower", "flourish", "flour"]
let result=longestCommon(str)

console.log(result)