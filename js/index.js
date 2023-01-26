function tipCalculator() {
  var billAmount = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("numOfPeople").value;

  if (billAmount === "" || service == 0) {
    alert("Please Enter Correct Value");
    return;
  }

  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var amount = (billAmount * service) / people;
  amount = Math.round(amount * 100) / 100;
  amount = amount.toFixed(2);

  document.getElementById("tip-container").style.display = "block";
  document.getElementById("tip").innerHTML = amount;
}

document.getElementById("tip-container").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate-btn").onclick = function () {
  tipCalculator();
};
