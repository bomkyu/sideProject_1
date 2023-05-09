gsap.timeline({
    scrollTrigger: {
      trigger: ".sec1",
      start: "center center",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers : true
    }
  })
.from(".txt2", { y: innerHeight * 2})
.from(".txt3", { y: innerHeight * 2});


const images = gsap.utils.toArray('img');

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  
  gsap.utils.toArray('.demo-wrapper section').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
    });
  });
}

imagesLoaded(images).on('always', showDemo);
  