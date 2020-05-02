document.getElementById("timer").innerHTML = "00:00:00";
document.getElementById("time").focus();

function startTimer() {
  console.log("inside");
  let [h, m, s] = document.getElementById("time").value.split(":");
  let timer = setInterval(function () {
    s--;
    if (s < 0) {
      s = 0;
    }
    printer(h, m, s);
    if (h == 0 && m == 0 && s == 0) {
      printer(h, m, s);
      clearInterval(timer);
    }
    if (m == 0 && s == 0) {
      m = 60;
      h--;
    }
    if (s == 0) {
      s = 60;
      m--;
    }
    if (m == 0 && h != 0) {
      m = 59;
      h--;
    }
  }, 1000);
}

function printer(h, m, s) {

  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  h = h < 10 ? "0" + h : h;
  document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
}