const bill_amount = document.getElementById("bill-amount")
const cash_given = document.getElementById("cash-given")
const btncheck = document.getElementById("check")
const errorMsg = document.getElementById("error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

btncheck.addEventListener("click", function returnChange() {
    errorMsg.style.display =  "none";
 
    if(bill_amount.value < 0)
    {
        var msg = "The bill amount should be greater than 0"
        showMessage(msg)
    }
    else {
         if(parseInt(cash_given.value)< parseInt(bill_amount.value))
         {
             alert(cash_given.value)
             var msg = "let him wash dishes"
             showMessage(msg)
         }
         else {
            
             calculateChange();
         }
    }
})

function  showMessage(msg) {
    errorMsg.style.display = "block"
    errorMsg.innerHTML = msg;
}

function  calculateChange() {
    var amountToBeReturned = (cash_given.value - bill_amount.value);

    const notes  = [2000,500,200,100,50,20,10,5,2,1]
    
    for(let i=0;i<notes.length;i++)
    {
        console.log(amountToBeReturned)
        let numOfNotes = Math.trunc(amountToBeReturned/notes[i])
        amountToBeReturned %= notes[i];
        noOfNotes[i].innerHTML = numOfNotes ;
    }
    


}