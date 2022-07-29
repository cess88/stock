
//***********stock****** //
let stock = ["30", "20", "40"]
let errorcontainer = document.querySelector("#error")
let error = false
function stockmanagement() {
    document.querySelector("#stock1").innerText = stock[0]
    document.querySelector("#stock2").innerText = stock[1]
    document.querySelector("#stock3").innerText = stock[2]
}

//***********commande - stock ****** //

function displaychoice() {
    let quantity = document.querySelectorAll('input')
    for (let i = 0; i < stock.length; i++) {
        let result = stock[i] - (quantity[i].value);
        if (result < 0 ) {
            error = true
        }else{
            stock[i] = result
        }     
    } 
    stockmanagement()
    displayerror()
}

//***********message d'arret ****** //

function displayerror(){
    if (error == true) {
      errorcontainer.innerText="impossible stock vide"  
    }else{
        errorcontainer.innerText = ""
    }
    error = false
}

stockmanagement()



