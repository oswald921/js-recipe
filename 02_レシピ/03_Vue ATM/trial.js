function inputCheck() {
  let Diposit = document.getElementById("deposit").value
  let DipositCheck = document.getElementById("depositCheck")
  DipositCheck.innerHTML = "入金額：" + Diposit + "円"
}
