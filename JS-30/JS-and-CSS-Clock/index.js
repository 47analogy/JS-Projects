function operateClock () {
  const secondHand = document.querySelector('.second-hand')
  const minutesHand = document.querySelector('.min-hand')
  const hoursHand = document.querySelector('.hour-hand')

  const time = new Date()

  const secondsTime = time.getSeconds()
  const minutesTime = time.getMinutes()
  const hoursTime = time.getHours()
  console.log(hoursTime)

  // convert time to degrees
  const secondsDegrees = (secondsTime / 60) * 360 + 90
  const minutesDegrees = (minutesTime / 60) * 360 + 90
  const hoursDegrees = hoursTime / 12

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(operateClock, 1000)
