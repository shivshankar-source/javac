//calculator using diff
function add(a,b) {
    return a+b;
    }
  
 const sub=function(a,b){
            return a-b;
    }
   
  const dev= (a,b)=> (b!==0?a/b:"number can't devided by zero") ; 

  const multi=(a,b)=>a*b;

  const operate=function(a,b,operation){
    return operation(a,b);
  }
const a=20,b=5;
  console.log("multiply" ,  operate(a,b,multi));
 console.log("devide", operate(a,b,dev));
 console.log("addition",operate(a,b,add));
 console.log("subtarction",operate(a,b,sub));
 
 