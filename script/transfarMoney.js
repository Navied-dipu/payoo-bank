document.getElementById("transfar-btn").addEventListener("click", function () {
  const userNumber = getValueFormInput("user-number");
  const amount = getValueFormInput("transfar-amount");
  const pin = getValueFormInput("transfar-pin");

//   console.log(userNumber, amount, pin);
  const balance = getBalance();
  const newBalance = balance - Number(amount);
  if (userNumber.length !== 11) {
    alert("invalied number");
  }
  if (pin == "1234") {
    alert("Transfar money sccessfuly");
    setBalace(newBalance);
  } else {
    alert("Wrong pin");
  }
});
