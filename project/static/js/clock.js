function startTime() {
  var nowTime = new Date();
  var hour = nowTime.getHours();
  var minute = nowTime.getMinutes();
  var second = nowTime.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  document.getElementById('txt').innerHTML =
  hour + ":" + minute + ":" + second;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}