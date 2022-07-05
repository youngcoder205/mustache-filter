nosex = 0
nosey = 0



function preload() {

butterfly = loadImage("https://i.postimg.cc/Px6F1Qww/ujZ3X.png")

}

function setup() { 
canvas = createCanvas(300,300) 
canvas.center()
video = createCapture(VIDEO)
video.size(300,300) 
video.hide()
posnet = ml5.poseNet(video,modelloaded) 
posnet.on('pose',gotposes) }

function modelloaded()  {

console.log("posnet is loaded")

}

function draw() {

    image(video,0,0,300,300)

image(butterfly,nosex,nosey,40,40)

}

function gotposes(results)  {

if(results.length>0) {
    console.log(results)
    console.log("nose x = "+ results[0].pose.nose.x)
    console.log("nose y = "+ results[0].pose.nose.y)
    nosex=results[0].pose.nose.x-15
    nosey=results[0].pose.nose.y-15
}

}

function take_snapshot()  {
    save ("filter.png")
}

