function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(460,460);
    canvas.position(650,115);
    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#FFD700');
}

function modeLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}