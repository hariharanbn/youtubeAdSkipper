// const skipAdInput = document.getElementById('skipAdInput');
// const skipAnnotationInput = document.getElementById('skipAnnotationInput');
// const autoplayInput = document.getElementById('autoplayInput');
const switchInput = document.getElementsByClassName('switchInput');

const inputChange = function() {
    var attribute = this.getAttribute("data-name");
    window[attribute](this.checked);
};

Array.from(switchInput).forEach(function(element){
    element.addEventListener('change', inputChange);
});

function skipAd(result){
    console.log("skipAd: "+ result);
}

function skipAnnotation(result){
    console.log("skipAnnotation: "+ result);
    if(!((result && _z_annotationStatus == "inactive") || (!result && _z_annotationStatus == "active"))){
        _z_annotationStatus = _z_annotationStatus == "inactive" ? "active" : "inactive";
    }
}

function autoplay(result){
    console.log("autoplay: "+ result);
    if(!((result && _z_autoplayStatus == "inactive") || (!result && _z_autoplayStatus == "active"))){
        _z_autoplayStatus = _z_autoplayStatus == "inactive" ? "active" : "inactive";
        _z_autoplay();
    }
}