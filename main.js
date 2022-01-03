function setup() {
    canvas=createCanvas(500, 450);
    canvas.position(150, 250);
    camera=createCapture(VIDEO);
    camera.hide();
    color=""
}
function draw() {
    image(camera, 0, 0, 500, 450);
    tint(color);
}
function tintcolor() {
    color=document.getElementById("color").value;
}
function take_snapshot(){
save(color+" people.png")
}