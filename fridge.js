Status = "";
fridge_image = "";

function preload(){
    fridge_image = loadImage("fridge.jpg");
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
    object_Detector.detect(fridge_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fridge_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%",object[i].x, object[i].y);
            noFill();
            stroke("#fc0303");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
