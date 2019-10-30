
class StopWatch {
  constructor() {
    this.$startBtn = document.getElementById('start-btn');
    this.$stopBtn = document.getElementById('stop-btn');
    this.$resetBtn = document.getElementById('reset-btn');
    this.$display = document.getElementById('display');

    this.timerId;
    this.timeSeconds = 0;

    this.setEventListeners()
  }


  setEventListeners() {
    const self = this
    this.$startBtn.addEventListener('click', function() {
      self.startTimer()
    });

    this.$stopBtn.addEventListener('click', function() {
      self.stopTimer()
    });
    
    this.$resetBtn.addEventListener('click', function() {
      self.resetTimer();
    })
  }


  startTimer() {
    this.$startBtn.disabled = 'true'
    const self = this

    this.timerId = setInterval(function() {
      self.timeSeconds++;
      self.displayTimerString();
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timerId)
    this.$startBtn.disabled = ''
  }

  resetTimer() {
    this.timeSeconds = 0;
    this.$display.textContent = '00:00'
  }

  displayTimerString() {
    const strSeconds = ('00' + this.timeSeconds).slice(-2)
    const strMinutes = ('00' + Math.floor(this.timeSeconds / 60,0)).slice(-2)
    this.$display.textContent = `${strMinutes}:${strSeconds}`
  }

}

new StopWatch()