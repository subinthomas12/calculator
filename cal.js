function displayNum(num){
    result.value+=num
}

function evaluateExpr(){

    //expr=result.value
    //op=eval(expr)
    //result.value=op

    result.value=eval(result.value)
}

function allClear(){
    result.value=""
}

function backSpace(){
    result.value=result.value.slice(0,-1)
}