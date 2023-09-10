var openCameraLink = document.getElementById("openCameraLink");
openCameraLink.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default link behavior

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      var video = document.querySelector("video");
      video.srcObject = stream;
      video.play();
    })
    .catch(function (error) {
      console.log("Unable to access camera: " + error);
    });
});
