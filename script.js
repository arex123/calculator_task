
// let historyStack = "";


/*
solve()
    1: to solve expression inside input box
    2: to show the result 
    3: save all history result 

*/
function solve(){


    let pelem = document.getElementById("hbox")

    let nelem = document.createElement("div")
    nelem.classList.add("h1")

    let expression = ""

    let inputExp = document.getElementById('uinput');
    expression+= inputExp.value +" = "

    inputExp.value = eval(inputExp.value)
    expression+=inputExp.value+"\n";
    nelem.innerHTML=expression
    // historyStack+=expression
    pelem.appendChild(nelem)

}

//below code is for showing history tab when clicked 'H'
let hclicked = false;
function showHistory(){
    if(!hclicked){
        hclicked=true

        let historytab = document.getElementById("hbox")
        
        historytab.style.display="block"

        let historyButton = document.getElementById("hisele")
        historyButton.style.backgroundColor = "#0fb9b1";
        
    }else{
        let historytab = document.getElementById("hbox")
        historytab.style.display="none"
        hclicked=false;

        let historyButton = document.getElementById("hisele")
        historyButton.style = "none"
    }
   
    
}