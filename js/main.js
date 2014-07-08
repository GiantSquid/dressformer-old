function closePopup() {
	document.getElementById('popup_bg').style.display = 'none';
	document.getElementById('floating_pan').style.display = 'block';
	document.getElementById('settings_pan').style.display = 'block';
}
function openPopup() {
	document.getElementById('popup_bg').style.display = 'block';
	document.getElementById('floating_pan').style.display = 'none';
	document.getElementById('settings_pan').style.display = 'none';
}
function viewportFull() {
    document.getElementById('viewport').className = 'viewport_full animation';
}
function switchToWebcam() {
	var video = document.querySelector('#videoElement');
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
	if (navigator.getUserMedia) {       
	    navigator.getUserMedia({video: true}, handleVideo, videoError);
		}
 
	function handleVideo(stream) {
   		video.src = window.URL.createObjectURL(stream);
		}
 
	function videoError(e) {
    	alert('Karamba!');
		}
}
function switchTo3d() {
	alert('3D');
}

function bgUrlControl() {
	var newUrl = prompt('Enter URL:','http://');
	if (newUrl === null) {
		return;
	} else if (newUrl == 'http://') {
		return;
	} else {
	document.getElementById('bg_iframe').src = newUrl;
	}
}