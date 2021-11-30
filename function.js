song1 = "";
song2 = "";

left_x= 0;
left_y= 0;
right_x= 0;
right_y= 0;
score_l= 0;
score_r= 0;



function preload() {
    song1 = loadSound("Ruelle- I Get To Love You.mp3")
    song2 = loadSound("Ruelle- War Of Hearts.mp3")
        }
function setup() {
    canvas= createCanvas(650,500)
    canvas.position(450,250)

    video= createCapture(VIDEO);
    video.size(650, 500)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}
function modelLoaded(){
    console.log("Posenet Loaded")
}
function draw(){
image(video, 0, 0, 650, 500)


}
function gotPoses(results){
if(results.length > 0){
console.log(results);
left_x= results[0].pose.leftWrist.x;
left_y= results[0].pose.leftWrist.y;
right_x= results[0].pose.rightWrist.x;
right_y= results[0].pose.rightWrist.y;
score_l= results[0].pose.keypoints[9].score;
score_r= results[0].pose.keypoints[10].score;
}
}
