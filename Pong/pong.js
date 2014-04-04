// rectangle for computer pong paddle
// rectangle for user pong paddle
// circle for pong ball

// investigate ai options for computer pong paddle

function Pong(container) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext('2d');
    
    container.appendChild(this.canvas);
}

window.onload = function () {
    var pong = new Pong(document.body);
};