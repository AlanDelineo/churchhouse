// import '@google/model-viewer';

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

livingRoom.addEventListener('click', () => {
	document.getElementById("iframeContainer").src="https://poly.google.com/view/6kZo0HjevLU/embed";
	window.location.hash = 'lightbox';
});

kitchen.addEventListener('click', () => {
	document.getElementById("iframeContainer").src="https://poly.google.com/view/0QGwh1u5m3H/embed";
	window.location.hash = 'lightbox';
});

hallway.addEventListener('click', () => {
	document.getElementById("iframeContainer").src="https://poly.google.com/view/cS2BErpQ3EG/embed";
	window.location.hash = 'lightbox';
});

// verticalCam.addEventListener('click', () => {
// 	modelViewer.cameraOrbit="0.78deg 133deg 3134m";
// });