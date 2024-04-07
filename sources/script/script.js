let billAmount = document.querySelector("#bill-amount");
let tipPercentage = document.querySelectorAll(".tip-percentage");
let custumTip = document.querySelector("#custum-tip");
let noPeople = document.querySelector("#People");
let generate = document.querySelector(".generate");
let tipAmt = document.querySelector("#tip-amt");
let totalAmt = document.querySelector("#total-amt");
let perAmt = document.querySelector("#per-amt");
let reset = document.querySelector("#reset");

let percentage = -1;
let cTip = -1;
let Amount = 0;
let People = 0;
let TipAmount = 0;
let TotalAmount = 0;
let EachPerson = 0;

billAmount.addEventListener("input", () => {
  Amount = parseFloat(billAmount.value);
});

tipPercentage.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipPercentage.forEach((btn) => {
      btn.style.border = "2px solid transparent ";
    });
    e.target.style.border = "2px solid rgb(255, 217, 0) ";
    percentage = parseFloat(e.target.textContent);
    custumTip.value = "";
    cTip = -1;
  });
});

custumTip.addEventListener("input", () => {
  tipPercentage.forEach((btn) => {
    btn.style.border = "2px solid transparent ";
  });
  cTip = parseFloat(custumTip.value);
  if (custumTip.value == "") {
    cTip = -1;
  }
  percentage = -1;
});

noPeople.addEventListener("input", () => {
  People = parseFloat(noPeople.value);
});

generate.addEventListener("click", () => {
  if (noPeople.value == "" || billAmount == "") {
    alert("Input Field is Empty");
  } else if (cTip == -1 && percentage == -1) {
    alert("Must Include Tip");
  } else {
    if (cTip == -1) {
      TipAmount = Amount * (percentage / 100);
      TotalAmount = TipAmount + Amount;
      EachPerson = TotalAmount / People;
    } else {
      TipAmount = cTip;
      TotalAmount = TipAmount + Amount;
      EachPerson = TotalAmount / People;
    }

    console.log(TipAmount);
    console.log(TotalAmount);
    console.log(EachPerson);

    tipAmt.textContent = "$" + TipAmount.toFixed(2);
    totalAmt.textContent = "$" + TotalAmount.toFixed(2);
    perAmt.textContent = "$" + EachPerson.toFixed(2);
  }
});

reset.addEventListener("click", () => {
  billAmount.value = "";
  custumTip.value = "";
  noPeople.value = "";
  tipAmt.textContent = "";
  totalAmt.textContent = "";
  perAmt.textContent = "";
  percentage = -1;
  cTip = -1;

  tipPercentage.forEach((btn) => {
    btn.style.border = "2px solid transparent ";
  });
});
