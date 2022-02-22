Status = "";
fan_image = "";

function preload(){
    fan_image = loadImage("fan.jpeg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fan_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%",object[i].x - 14, object[i].y - 175);
            noFill();
            stroke("#fc0303");
            rect(object[i].x - 14, object[i].y - 175, object[i].width - 2326, object[i].height - 2850);
        }
    }
}