function setDate() {
  const secHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  if (secHand) {
    const now = new Date()

    const sec = now.getSeconds()
    const secDegree = ((sec / 60) * 360)
    secHand.style.transform = `rotate(${secDegree + 90}deg`

    const min = now.getMinutes()
    const minDegree = ((min / 60) * 360)
    minHand.style.transform = `rotate(${minDegree + 90}deg`

    const hour = now.getHours()
    const hourDegree = ((hour / 12) * 360)
    hourHand.style.transform = `rotate(${hourDegree + 90}deg`
  }
}

function startClock() {
  setInterval(setDate,1000);
}

function challenge02() {
  document.addEventListener('DOMcontentLoaded', startClock());
}

export { challenge02 };
