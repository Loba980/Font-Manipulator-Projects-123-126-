function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#90EE90");
    textSize[10];
    fill("#f08a0e");
    text('Loba', 50, 400);
    textSize(differnece);
}

function gotPoses(results){
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
differnece=floor(leftWristX-rightWristX);
}
