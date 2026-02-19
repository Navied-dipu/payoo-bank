document.getElementById("pay-btn").addEventListener("click", function () {
  const toPay= getValueFormInput("to-pay");

  const billerAccNum = getValueFormInput("billerAcc-number");
  const payAmount = getValueFormInput("pay-amount");
  const pin = getValueFormInput("pay-pin");
  //   const balanceElement = document.getElementById("balance");
  //   const balance = Number(balanceElement.innerText);
  const balance = getBalance();
  const newBalance = balance - Number(payAmount);
  if (billerAccNum.length !== 11) {
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
    setBalace(newBalance);
    const trangection = document.getElementById("trangection-div");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="w-full rounded-xl p-4 flex justify-between items-center">
          <img src="assets/opt-1.png" alt="" />
          ${toPay} bill pay ${newBalance} taka  to ${billerAccNum}
          <p>:</p>
        </div>
   `;
    trangection.appendChild(div);
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
