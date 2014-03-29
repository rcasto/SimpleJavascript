// run this when the window is loaded
window.onload = function () {
    // Grab the car img element holding the car from the DOM
    var car = document.getElementById('car');
    var left = 0;
    var animateDelay = 500; // this is in milliseconds
    var SPACE_BAR = 32; // keycode of space bar
    var pixelMovement = 5;

    // absolute positioning allows for image adjustments via left style property
    car.style.position = 'absolute';
    car.style.left = left + 'px';

    // Animate the cop car every animateDelay milliseconds
    setTimeout(function animate() {
        left += pixelMovement; // move it by 5 pixels each time
        car.style.left = left + 'px';
        setTimeout(animate, animateDelay);
    }, animateDelay);

    window.onkeydown = function (event) {
        // Detect space bar being pressed, speed up cop car
        if (event.keyCode === SPACE_BAR) {
            pixelMovement = 35;
        }
    };

    window.onkeyup = function (event) {
        // Detect space bar being released, slow down cop car
        if (event.keyCode === SPACE_BAR) {
            pixelMovement = 5;
        }
    };
};

// try to edit program to have car stop at end of page, HINT: at this point car.style.right = '0px'
// try to make the animation smoother, HINT: edit animtateDelay

//try to make image head back, or be controlled via keyboard arrows.  Get creative, play around