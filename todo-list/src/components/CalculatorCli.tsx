import React, { useEffect } from 'react';





export default function CalculatorCli() {
    type Operator = '+'| '-'|'*'|'/'
    function calculate(){
        const firstStr : string | null = prompt('Enter first number')
        const operator : string | null = prompt('enter operator')
        const secondStr : string | null = prompt('enter second number')
        
        const validInput :boolean = isNumeber(firstStr) && isOperator(operator) && isNumeber(secondStr)
        if (validInput) {
            const firstNum: number = parseInt(firstStr!); // Here, we're using the "!" operator to assert that `firstStr` is not null
            const secondNum: number = parseInt(secondStr!); // Similarly, for `secondStr`
    
            // Now, you can perform calculations based on the operator
            let result: number = 0;
            switch (operator) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
                default:
                    console.log('Invalid operator');
                    return;
            }
    
            console.log(`Result: ${result}`);
    }
}
calculate()


    function isOperator(opr:string|null):boolean
    {
       switch(opr){
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default: return false
       }
    }

    function isNumeber (str:string| null) :boolean{
        if (str === null) {
            return false; 
          }
          
          const num = parseInt(str);
          const isNum: boolean = !isNaN(num);
          return isNum;
    }
    
  return (
    <div>
      
    </div>
  )
}
