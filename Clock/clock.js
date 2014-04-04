// update via a timer

function Clock(container) {
    this.clockHolder = document.createElement("div");
    this.running = false;
    container.appendChild(this.clockHolder);
}

Clock.prototype.getTime = function () {
    var date = new Date();
    var hour = date.getHours() % 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour === 0) {
        hour = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hour + ":" + minutes + ":" + seconds;
};

Clock.prototype.startClock = function () {
    this.running = true;
    this.updateClock();
};

Clock.prototype.updateClock = function () {
    if (!this.running) {
        return;
    }

    var that = this; // save context

    this.clockHolder.innerHTML = this.getTime();

    setTimeout(function () {
        that.updateClock();
    }, 1000);
};

Clock.prototype.stopClock = function () {
    this.running = false;
};

window.onload = function () {
    var clock = new Clock(document.body);
    clock.startClock();
    setTimeout(function () {
        clock.stopClock();
    }, 5000);
};