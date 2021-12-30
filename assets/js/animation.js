let title = document.querySelector('.title')

let animation = bodymovin.loadAnimation({
  container: title, // Required
  renderer: "svg", // Required
  loop: false, // Optional
  autoplay: true, // Optional
  name: "Robot", // Name for future reference. Optional.
  path: "esteban-logo.json" // Required
});

title.addEventListener("click", () =>{
  animation.goToAndPlay(0,true)
});