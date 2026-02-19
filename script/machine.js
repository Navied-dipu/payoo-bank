function getValueFormInput (id){
    const input=document.getElementById(id)
    const value=input.value
    return value
}

function getBalance(){
     const balanceElement = document.getElementById("balance");
  const balance = Number(balanceElement.innerText);
  return Number(balance)
}

function setBalace(value){
     const balanceElement = document.getElementById("balance");
    balanceElement.innerText=value
}

function showOnly(id){
    const addMoney=document.getElementById('add-money')
    const cashOut=document.getElementById('cashOut')
    const transfarMoney=document.getElementById('transfar-money')
    const trangectionMOney=document.getElementById('trangection')
    const payBill=document.getElementById('pay-bill')
    const bonus=document.getElementById('bonus')

    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transfarMoney.classList.add('hidden')
    trangectionMOney.classList.add('hidden')
    payBill.classList.add('hidden')
    bonus.classList.add('hidden')

    const selected=document.getElementById(id)
    selected.classList.remove('hidden')
}