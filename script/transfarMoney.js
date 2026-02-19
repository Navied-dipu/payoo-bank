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
   if (newBalance < 0) {
    alert("Invalid amount");
    return;
  }
  if (pin == "1234") {
    alert("Transfar money sccessfuly");
    setBalace(newBalance);
    const trangection = document.getElementById("trangection-div");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="w-full rounded-xl p-4 flex justify-between items-center">
          <img src="assets/opt-1.png" alt="" />
          ${userNumber} Bank transfar ${amount} taka scuccefuly
          <p>:</p>
        </div>
   `;
    trangection.appendChild(div);
  } else {
    alert("Wrong pin");
  }
});
