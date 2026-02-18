document.getElementById("add-btn").addEventListener("click", function () {
  const bank = getValueFormInput("add-money-bank");
  const bankNumber = getValueFormInput("account-number");
  const amount = getValueFormInput("add-amount");
  const pin = getValueFormInput("add-pin");
  //   console.log(bank, bankNumber, amount,pin);
  const balance = getBalance();
  const newBalance = balance + Number(amount);
  if (bankNumber.length !== 11) {
    alert("invalied number");
  }
  if (pin == "1234") {
    alert("Add money sccessfuly");
    setBalace(newBalance);
  } else {
    alert("Wrong pin");
  }
});
