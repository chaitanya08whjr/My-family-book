var images = ["TheFamilyBook.jpg","IMG_20200102_105450606.jpg","IMG_20200102_105922523.jpg","IMG_20200102_131936.jpg"];
var i = 0;
function nextslide() {
    document.getElementById("album").src = images[i]; i++;
    document.getElementById("audio").play();
}