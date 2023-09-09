let paragraph = document.getElementById("countdown");
let paragraph2 = document.getElementById("secoundpara");

let secoundsLeft = 10;

let updateCountDown = () => {
  if (secoundsLeft > 0) {
    paragraph.textContent = `Your countdown starts ${secoundsLeft}`;
    secoundsLeft--;
  } else {
    clearInterval(countDownInterval);
    paragraph2.textContent = "Happy Independence Day";
  }
};

let countDownInterval = setInterval(updateCountDown, 1000);
