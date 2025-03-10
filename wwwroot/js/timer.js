function startTimer(duration, displayId) {
    let timer = duration,
      hours,
      minutes,
      seconds;
    const display = document.getElementById(displayId);

    const interval = setInterval(() => {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `Ends in: ${hours}:${minutes}:${seconds}`;

      if (--timer < 0) {
        clearInterval(interval);
        display.textContent = "Deal ended";
      }
    }, 1000);
  }

  window.onload = function () {
    const superDealsDuration = 24 * 60 * 60; // 24 giờ
    const bigSaveDuration = 12 * 60 * 60; // 12 giờ

    startTimer(superDealsDuration, "timer1");
    startTimer(bigSaveDuration, "timer2");
  };