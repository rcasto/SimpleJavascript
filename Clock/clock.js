// update via a timer

function Clock(container) {
    this.clockHolder = document.createElement("div");
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
    var that = this;
    this.clockHolder.innerHTML = this.getTime();
    setTimeout(function () {
        that.startClock();
    }, 1000);
};

window.onload = function () {
    var clock = new Clock(document.body);
    clock.startClock();
};