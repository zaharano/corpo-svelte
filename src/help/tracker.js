import Timer from './timer';

// clocking features
let workTimer = new Timer('work');

function clockIn() {
  workTimer.start();
  inactivityMonitor();
}

function timeWorked() {
  return workTimer.time();
}

// focus features haha
let inactiveTimer = new Timer('inactive');

function inactivityMonitor() {
  let idle;

  resetTimeout();
  document.addEventListener('onmousemove', resetTimeout);
  document.addEventListener('onkeydown', resetTimeout);
  document.addEventListener('ontouchstart', resetTimeout);

  function inactive() {
    inactiveTimer.start();
  }
  function resetTimeout() {
    if (inactiveTimer.isRunning) {
      inactiveTimer.stop();
    }
    clearTimeout(idle);
    idle = setTimeout(inactive, 2000);
  }
}
