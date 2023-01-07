var modeloteache = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3riSByN3m/model.json", modeloCargado)
function modeloCargado(){
    console.log("ModeloCARGO")
}
var opcion1 = ""
var opcion2 = ""
var camara = document.getElementById("cameraa")
Webcam.attach("#cameraa")
Webcam.set({
    width: 300,
    height: 300,
    image_format: "jpg", jpg_quality: 90
});
function foto(){
    Webcam.snap(function(data){
        document.getElementById("tufoto").innerHTML = '<img id="ioooo" src=" '+data+' ">'
    })
} 
function predict(){
    var save_image = document.getElementById("ioooo")
    modeloteache.classify(save_image, gotResult)
}
function gotResult( error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("ola").innerHTML = results[0].label
        document.getElementById("pro").innerHTML = results[1].label
        var save_result0 = results[0].label
        var save_result1 = results[1].label
        if(results[0].label == "Serio"){
            document.getElementById("olaaa").innerHTML = "&#128528"
        }
        if(results[0].label == "FELIZ"){
            document.getElementById("olaaa").innerHTML = "&#128515"
        }
        if(results[0].label == "DOrmido"){
            document.getElementById("olaaa").innerHTML = "&#128564"
        }
        if(results[0].label == "Enojado"){
            document.getElementById("olaaa").innerHTML = "&#128545"
        }
        if(results[1].label == "Serio"){
            document.getElementById("proo").innerHTML = "&#128528"
        }
        if(results[1].label == "FELIZ"){
            document.getElementById("proo").innerHTML = "&#128515"
        }
        if(results[1].label == "DOrmido"){
            document.getElementById("proo").innerHTML = "&#128564"
        }
        if(results[1].label == "Enojado"){
            document.getElementById("proo").innerHTML = "&#128545"
        }

    }
}
