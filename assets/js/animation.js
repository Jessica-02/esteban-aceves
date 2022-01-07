// Animacion del logo de esteban
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

// Animacion de los rombos
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(Layer => {
    
    const speed = Layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageX*speed)/100

    Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}

