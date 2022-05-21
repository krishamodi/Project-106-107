function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2SuzhcxMB/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
if (error){
    console.error(error);
}
else{
    console.log (results);
}
}