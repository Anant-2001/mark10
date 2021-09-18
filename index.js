var billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
var message = document.querySelector(".alert-message");
const checkButton = document.querySelector("#check-button");
var returnNotes = document.querySelectorAll(".return-notes")
const list = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", () => {return returnCalculator()} );
function returnCalculator(){
  var amountToReturn = cashGiven.value - billAmount.value;
  message.style.display = "none";
  if(billAmount.value>0){
    if(cashGiven.value >= billAmount.value){
      for (var i = 0; i<list.length; i++){
        noOfNote = Math.trunc( amountToReturn/ list[i]);
        amountToReturn = amountToReturn % list[i];
        returnNotes[i].innerText = noOfNote;
      }
      
    }
    else{
      message.style.display = "block";
      message.innerText = "Cash given should not be less than bill amount"
    }
  }
  else{
    message.style.display = "block";
    message.innerText = "Enter valid amount";
  }
}