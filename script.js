const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

const clock = setInterval(
  function time() {
    const now = new Date()
    const hr = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    hour.textContent = hr < 10 ? '0' + hr : hr
    minute.textContent = min < 10 ? '0' + min : min
    second.textContent = sec < 10 ? '0' + sec : sec
  }, 1000
)