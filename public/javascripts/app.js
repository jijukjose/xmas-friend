var path = document.getElementById("pic").getAttribute("image-path");
document.getElementById("pic").style.backgroundImage = "url("+path+")";
setTimeout(function() {
    window.location.replace("/logout");
}, 40000);