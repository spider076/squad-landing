function check() {
  var checkBox = document.getElementById("checbox");
  var price1 = document.getElementsByClassName("price1");
  var price2 = document.getElementsByClassName("price2");
  var starterMonthly = document.getElementById("starter-monthly-button");
  var starterYearly = document.getElementById("starter-yearly-button");
  var basicMonthly = document.getElementById("basic-monthly-button");
  var basicYearly = document.getElementById("basic-yearly-button");

  for (var i = 0; i < price1.length; i++) {
    if (checkBox.checked == true) {
      price1[i].style.display = "block";
      price2[i].style.display = "none";
      starterMonthly.classList.add("d-none");
      starterYearly.classList.remove("d-none");
      basicMonthly.classList.add("d-none");
      basicYearly.classList.remove("d-none");
    } else if (checkBox.checked == false) {
      price1[i].style.display = "none";
      price2[i].style.display = "block";

      starterMonthly.classList.remove("d-none");
      starterYearly.classList.add("d-none");
      basicMonthly.classList.remove("d-none");
      basicYearly.classList.add("d-none");
    }
  }
}
check();
