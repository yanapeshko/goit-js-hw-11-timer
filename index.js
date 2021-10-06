import refs from "./refs.js";

const { days, hours, mins, secs } = refs;

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.intervalId = null;
    this.time = 0;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      let currentDate = Date.now();

      this.time = this.targetDate - currentDate;

      this.insertData(days, this.getDays(this.time));
      this.insertData(hours, this.getHours(this.time));
      this.insertData(mins, this.getMins(this.time));
      this.insertData(secs, this.getSecs(this.time));
    }, 1000);
  }

  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol);
  }

  getDays(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, "0");
  }
  getHours(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      "0"
    );
  }
  getMins(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      "0"
    );
  }
  getSecs(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000));
  }

  insertData(place, value) {
    place.textContent = value;
  }
}

const newTimer = new CountdownTimer("#timer-1", new Date("Nov 19, 2021"));
newTimer.startTimer();
