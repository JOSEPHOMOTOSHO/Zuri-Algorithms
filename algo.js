// Farehnheit algo
function convertFahrToCelsius(num){
    const fahrenheit = parseFloat(num)
    if (!fahrenheit){
        let type = typeof num;
        if (type == "object" && Array.isArray(num)){
            type = "array";
        }
        return `${num} is not a valid number but a/an ${type}`;
    }
    const celsius = (fahrenheit - 32) *5/9;
    return celsius;
}

console.log(convertFahrToCelsius(["hi"]))


//yu-h-gi -oh algo


function checkYuGiOh(n){
    if(n !== parseInt(n)){
      return `invalid parameter: ${n}`
    }
    const arrOfNum = [];
    for(let i = 1; i<=n; i++ ){
      arrOfNum.push(i)
    }
   for(let elem in arrOfNum){
     if(arrOfNum[elem]  % 2 === 0 && arrOfNum[elem]  % 3 === 0 && arrOfNum[elem]  % 5 === 0){
      arrOfNum[elem] = "yu-gi-oh"
    
     }else if(arrOfNum[elem] %2==0 && arrOfNum[elem] %3==0){
      arrOfNum[elem] = "yu-gi"
      
     }else if(arrOfNum[elem] %2==0 && arrOfNum[elem] %5==0){
      arrOfNum[elem] = "yu-oh"
      
     }else if(arrOfNum[elem] %2==0){
       arrOfNum[elem] = "yu"
       
     }else if(arrOfNum[elem] %3==0){
      arrOfNum[elem]= "gi"
      
     }else if(arrOfNum[elem] %5==0){
       arrOfNum[elem] = "oh"
     }else{
       arrOfNum[elem] = arrOfNum[elem] 
     }
     
    }
   return arrOfNum
  }
  
  console.log(checkYuGiOh(30))
  