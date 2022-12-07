// timer constructor
// instantiates a timer that can be started and stopped and keeps an aggregate
// TODO add optional param of a cached DOM ref and handle interval internally

function Timer(name) {
  this.name = name;
  this.initTime = Date.now();
  this.startTime = undefined;
  this.totalTime = 0;
  this.isRunning = false;

  this.start = function () {
    if (this.isRunning) {
      return console.warn('Timer is already running');
    }
    this.isRunning = true;
    this.startTime = Date.now();
  };

  this.stop = function () {
    if (!this.isRunning) {
      return console.warn('Timer is already stopped');
    }
    this.totalTime = this.totalTime + this.elapsed();
    this.isRunning = false;
  };

  this.elapsed = function () {
    if (!this.isRunning) {
      return 0;
    }
    return Date.now() - this.startTime;
  };

  this.reset = function () {
    this.totalTime = 0;
    this.isRunning = false;
    this.startTime = undefined;
  };

  this.time = function () {
    // not yet run case
    if (this.isRunning) {
      return this.totalTime + this.elapsed();
    }
    return this.totalTime;
  };
}

export default Timer;
