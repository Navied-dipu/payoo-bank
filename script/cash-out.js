document.getElementById("widthdraw-btn").addEventListener("click", function () {
  const agentNum = getValueFormInput("agent-number");
  const cashOutAmount = getValueFormInput("cahsout-amount");
  const pin = getValueFormInput("input-pin");
//   const balanceElement = document.getElementById("balance");
//   const balance = Number(balanceElement.innerText);
const balance=getBalance()
  const newBalance = balance - Number(cashOutAmount);
  if (agentNum.length !== 11) {
    alert("Invalied number");
  }
  if (newBalance < 0) {
    alert("Invalid amount");
    return;
  }

  if (pin === "1234") {
    alert("Cash out successfully");
    // balanceElement.innerText = newBalance;
    // console.log(newBalance);
    setBalace(newBalance)
  } else {
    alert("Pin invalid");
  }
});

// document.getElementById("widthdraw-btn").addEventListener("click", function () {
//   const agentNum = document.getElementById("agent-number").value;
//   const cashOutAmount = document.getElementById("cahsout-amount").value;
//   const pin = document.getElementById("input-pin").value;

//   const balanceElement = document.getElementById("balance");
//   const balance = Number(balanceElement.innerText);

//   const newBalance = balance - Number(cashOutAmount);

//   if (newBalance < 0) {
//     alert("Invalid amount");
//     return;
//   }

//   if (pin === "1234") {
//     alert("Cash out successfully");
//     balanceElement.innerText = newBalance;
//     console.log(newBalance);
//   } else {
//     alert("Pin invalid");
//   }
// });
