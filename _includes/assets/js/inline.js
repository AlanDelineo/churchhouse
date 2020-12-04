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

const model = document.querySelector("model-viewer");

verticalCam.addEventListener('click', () => {
	model.cameraOrbit="0.4116deg 25.74deg 3618m";
});

startCam.addEventListener('click', () => {
  model.cameraOrbit="43.79deg 68.31deg 4008m";
});

viewAll.addEventListener('click', () => {
  var hotspots = document.querySelectorAll(".Hotspot");
  hotspots.forEach(function(hotspot){
      hotspot.classList.remove("visible");
  })
});
viewFloor1.addEventListener('click', () => {
  var hotspots = document.querySelectorAll(".Hotspot");
  hotspots.forEach(function(hotspot){
      hotspot.classList.remove("visible");
  })
  var visibleHotspots = document.querySelectorAll(".floor1Hotspot");
  visibleHotspots.forEach(function(visibleHotspot){
      visibleHotspot.classList.add("visible");
  })
});
viewFloor0.addEventListener('click', () => {
  var hotspots = document.querySelectorAll(".Hotspot");
  hotspots.forEach(function(hotspot){
      hotspot.classList.remove("visible");
  })
  var visibleHotspots = document.querySelectorAll(".floor0Hotspot");
  visibleHotspots.forEach(function(visibleHotspot){
      visibleHotspot.classList.add("visible");
  })
});

window.switchSrc = (element, name) => {
    const base = "static/img/" + name;
    model.src = base + '.glb';
    const slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {element.classList.remove("selected");});
    element.classList.add("selected");
  };

 document.querySelector(".controls").addEventListener('beforexrselect', (ev) => {
    // Keep slider interactions from affecting the XR scene.
    ev.preventDefault();
  });