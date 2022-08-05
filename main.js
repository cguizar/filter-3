mostache_x = 0;
mostache_y = 0;

function preload() {
    mostache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    PoseN = ml5.poseNet(Video,pose_NET);
    PoseN.on('pose',On);
}

function draw() {
    image(Video,0,0,300,300);
    image(mostache,mostache_x,mostache_y,30,30);
}

function take_photo(){
    save('snap.png');
}

function pose_NET(){
    console.log("Pose Net is initialized");
}

function On(results){
    if(results.length > 0) {
        console.log(results);
        mostache_x = results[0].pose.nose.x -15;
        mostache_y = results[0].pose.nose.y;

    }
}