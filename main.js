currentRotation = 0;
aui = document.getElementById("MyAudio");
aaa = document.getElementById("aaudio");

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(280,170)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function classifyCanvas(){
    classifier.classify(canvas,gotresults);
}

function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML='You are doodling a...... '+results[0].label;
        document.getElementById("confidence").innerHTML='I am...... '+Math.round(results[0].confidence*100)+'% '+"sure";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
        if (results[0].label == 'spider'){
        document.body.style.backgroundImage="url('https://i.kym-cdn.com/entries/icons/original/000/012/781/upload.png')";
            aaa.play()
        }
    }
}

function draw(){
    strokeWeight(7);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }    
}

function Balllin(){
    var bodyElement = document.body;
    currentRotation += 22.5;
    bodyElement.style.transform = 'rotate(' + currentRotation + 'deg)';
}    

function fort(){
    aui.play();
    interval1 = setInterval(Balllin, 400);
}

function clearCanvas(){
    background("white");
}

function nite(){
    aui.pause()
    clearInterval(interval1);
}