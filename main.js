var textsize = 0 ;
var rightWristX = 0 ;
var leftWristX = 0 ;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(600, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses) ;
}

function draw() {
    background("#B7BF96");
    text("Saanvi", 100, 250);
    textSize(textsize);
    fill("white");
}

function modelLoaded() {
    console.log("poseNet is initialised");
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
        rightWristX = results[0].pose.rightWrist.x ;
        leftWristX = results[0].pose.leftWrist.x ;
        textsize = floor(leftWristX - rightWristX) ;
        console.log(textsize) ;


}
}