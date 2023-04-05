(() => {
  // Craeting function that will get the current time
  function showCurrentTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    const time = `${h}:${m}:${s} ${session}`;
    document.getElementById("clock").innerText = time;
  }
  showCurrentTime();

  // Calling the Fucntion by 1 second interval
  setInterval(showCurrentTime, 1000);
})();
