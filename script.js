
gsap.to(".headline", {
  opacity: 1,
  y: -15,
  duration: 1.2,
  ease: "power3.out"
});

gsap.to(".stat", {
  opacity: 1,
  y: 0,
  stagger: 0.25,
  duration: 1,
  delay: 0.4,
  ease: "power3.out"
});


const car = document.querySelector(".car");

let current = 0;
let target = 0;


function animate() {

  target = window.scrollY;
  current += (target - current) * 0.08;

 
  const translateY = current * 0.35;
  const scale = 1 + current * 0.0002;


  car.style.transform =
    `translateY(${translateY}px) scale(${scale})`;

  requestAnimationFrame(animate);
}

animate();
