const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec1",
    start: "center center",
    end: "bottom top",
    scrub: true,
    scrub:1,
    pin: true
  }
});

tl1.to('.txt1', { opacity:0 })
  .from(".txt2", { y: innerHeight * 2}).to('.txt2', { opacity:0 })
  .from(".txt3", { y: innerHeight * 2});



const images = gsap.utils.toArray('img');
const showDemo = () => {
  document.querySelector('.sec2').style.overflow = 'hidden';
  document.scrollingElement.scrollTo(0, 0);
  
  gsap.utils.toArray('.sec2 > .deg > div').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true, 
        scrub: 1,
      }
    });
  });
};

imagesLoaded(images).on('always', showDemo);

let sec3_hori = gsap.utils.toArray('.sec3_list > li');

const storyAni = gsap.timeline();

storyAni.to(sec3_hori, {
  xPercent: -100 * (sec3_hori.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.sec3',
    start: 'top',
    end: '+=6000',
    pin: true,
    scrub: 1,
    markers: false 
  }
});

sec3_hori.forEach((list, index) => {
  const liWidth = list.offsetWidth;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: list,
      start: `top ${30 - index * 400}%`,
      end: `bottom ${70 - index * 400}%`,
      scrub: 1,
      markers: true
    },
  });
  tl.to(list, {
    scale: 0.5,
    opacity: 0.3,
    duration: 3
  });
});