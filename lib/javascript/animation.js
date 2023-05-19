const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec1",
    start: "center center",
    end: "bottom top",
    scrub: true,
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
        scrub: 0.5,
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
    markers: false,
  },
});

gsap.utils.toArray('.sec3_list li').forEach((listItem, index) => {
  const listItemAni = gsap.timeline(); // 각 리스트 아이템의 애니메이션을 정의하기 위한 Timeline 생성

  // 각 리스트 아이템에 대한 애니메이션 정의
  listItemAni.from(listItem, {
    x: -100, // 시작 위치 설정 (화면 왼쪽에 숨겨진 상태)
    opacity: 0, // 시작 시 투명도 설정
    duration: 1, // 애니메이션 지속 시간
  });

  // ScrollTrigger를 사용하여 애니메이션 트리거 설정
  ScrollTrigger.create({
    trigger: listItem, // ScrollTrigger의 트리거로 리스트 아이템을 사용
    start: 'center bottom', // 시작 위치 설정 (가운데에 도달하면 애니메이션 시작)
    end: 'center center', // 종료 위치 설정 (가운데에 도달하면 애니메이션 종료)
    toggleActions: 'play none none none', // 트리거에 진입하면 애니메이션 실행, 트리거를 벗어나면 애니메이션 일시 정지
    markers: true, // 디버깅을 위한 마커 표시 (필요하지 않을 경우 삭제)
    id: `listAnimation-${index}`, // 애니메이션 식별자
    scrub: true, // 스크롤 시 애니메이션을 부드럽게 전환
    animation: listItemAni, // 애니메이션을 ScrollTrigger에 등록
  });
});