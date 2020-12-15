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
sittingroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/1ewTw1_cdP4/embed";
  window.location.hash = 'lightbox';
});
landing.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/7WJQcTd_FZ2/embed";
  window.location.hash = 'lightbox';
});
diningroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/c2SJ2pxoKT1/embed";
  window.location.hash = 'lightbox';
});
study.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/fW2xZXLnbDn/embed";
  window.location.hash = 'lightbox';
});
toilet.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/cV8VMZ_DXD5/embed";
  window.location.hash = 'lightbox';
});
gallery.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/eaB_E7zazpz/embed";
  window.location.hash = 'lightbox';
});
utility.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/fVk9qBN-8v6/embed";
  window.location.hash = 'lightbox';
});
masterbedroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/9j-P_ngv_T9/embed";
  window.location.hash = 'lightbox';
});
hallwaystairs.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/dd_jruCux13/embed";
  window.location.hash = 'lightbox';
});
hallwaydownstairs.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/atHF4d6vuHG/embed";
  window.location.hash = 'lightbox';
});
bedroom1.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/6udKN_N9Z-C/embed";
  window.location.hash = 'lightbox';
});
bedroom2.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/aRWhoAsnQmp/embed";
  window.location.hash = 'lightbox';
});
computerroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/93lGubbu_U6/embed";
  window.location.hash = 'lightbox';
});
bathroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/9IbCutXez_2/embed";
  window.location.hash = 'lightbox';
});
gamesroom.addEventListener('click', () => {
  document.getElementById("iframeContainer").src="https://poly.google.com/view/3HZyViDl8O9/embed";
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