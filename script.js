document.getElementById('create').addEventListener("click", writeText);
document.getElementById('save').addEventListener("click", saveImage);

function writeText() {
    var fullName = document.getElementById('full-name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var mark = document.getElementById('mark').value;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 10, 10);
        context.font = "bold 15px Roboto";
        context.fillStyle = "#3B3B3B";
        context.fillText(fullName, 125, 123);
        context.fillText(dob, 528, 123);
        context.fillText(gender, 900, 123);
        context.fillStyle = "black";
        context.font = "15px Roboto";
        context.fillText(mark, 750, 350);
    };
    imageObj.src = "img.png"; 
}

function saveImage() {
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    downloadImage(dataURL, 'hinhanhthi.jpeg');
}

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();  
}
