function mostraMenor(pNum1, pNum2){
    let nr1 = parseInt(pNum1)
    let nr2 = parseInt(pNum2)
    let objDiv = document.getElementById("idResultado")
    let resultado = ""

  
    if(nr1 > nr2) 
        resultado = "Numero " + nr1 + " é maior!!!";
    else if(nr1 < nr2)
        resultado = "Numero " + nr2 + " é maior!!!";
    else
        resultado = "numeros iguais!!!";
    objDiv.innerHTML = resultado;
    
}
/*function mostraMenor(pNum1, pNum2){
    let nr1 = parseInt(pNum1)
    let nr2 = parseInt(pNum2)
    let objDiv = document.getElementById("idResultado")
    let resultado = ""

  
    if(nr1 > nr2) 
        resultado = "Numero " + nr1 + " é maior!!!";
    else if(nr1 < nr2)
        resultado = "Numero " + nr2 + " é maior!!!";
    else
        resultado = "numeros iguais!!!";
    objDiv.innerHTML = resultado;
    
}*/
