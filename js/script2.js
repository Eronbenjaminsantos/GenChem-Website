// gsap.registerPlugin(ScrollTrigger);

(function init() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#bg"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#bg", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#bg").style.transform ? "transform" : "initial"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#bg'),
    smooth: true
  });
})();
var flag = 0;
var menu = document.querySelector('#menu');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
menu.addEventListener('click', () => {
  if (flag === 0) {
    document.getElementById('topmenu').style.transform = `translateY(0)`
    line1.style.backgroundColor = `#232025`;
    line2.style.backgroundColor = `#232025`;
    line1.style.transform = `rotate(40deg)`;
    line1.style.width = `70%`;
    line2.style.transform = `rotate(-40deg)`;
    line2.style.backgroundColor = `#232025`;
    document.getElementById('nav').style.color = `#232025`;
    flag = 1;
  }
  else {
    document.getElementById('topmenu').style.transform = `translateY(-100%)`
    line1.style.backgroundColor = `#cecece`;
    line2.style.backgroundColor = `#cecece`;
    line1.style.transform = `rotate(00deg)`;
    line1.style.width = `100%`;
    line2.style.transform = `rotate(-0deg)`;
    line2.style.backgroundColor = `#cecece`;
    document.getElementById('nav').style.color = `#cecece`;
    flag = 0;
  }
})


gsap.from('#page1 h1', {
  duration: 2,
  opacity: 0,
  onStart: function () {
    $(document).ready(function () {
      $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
    })
  }
})
gsap.from(['#page1 h2', '#page1 h4'], {
  duration: 1.5,
  delay: 0.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  stagger: {
    amount: 0.5
  }
});


gsap.to('#page1 img', {
  duration: 2,
  scrollTrigger: {
    trigger: '#page1 img',
    scroller: '#bg',
    scrub: 2,
    end: 'bottom 30%',
    start: 'top 80%',

  },
  scale: 1.12,
});

gsap.to('#page2 #part1 h1', {
  duration: 1,
  opacity: 1,
  rotateX: 0,
  scrollTrigger: {
    trigger: '#page2 #part1 h1',
    scroller: '#bg',
    scrub: 2,
    end: 'bottom 85%',
    // markers:true,
    start: 'top 60%',
  },
})

gsap.to('#part2 #line', {
  scrollTrigger: {
    trigger: '#part2',
    scroller: '#bg',
    scrub: 2,
    end: 'bottom 90%',
    // markers:true,
    start: 'top 80%',
  },
  width: '100%',
})

var atomcard = document.querySelector('.atomcard');
document.querySelector('#atoms h1').addEventListener('mouseenter', function (dets) {
  atomcard.style.opacity = 1;
  atomcard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  atomcard.style.left = `40%`
})
document.querySelector('#atoms').addEventListener('mousemove', function (dets) {
  atomcard.style.left = `${dets.x}px`
})
document.querySelector('#atoms').addEventListener('mouseleave', function (dets) {
  atomcard.style.opacity = 0;
  atomcard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  atomcard.style.left = `20%`
})

var gascard = document.querySelector('.gascard');
document.querySelector('#gas h1').addEventListener('mouseenter', function (dets) {
  gascard.style.opacity = 1;
  gascard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  gascard.style.left = `40%`
})
document.querySelector('#gas').addEventListener('mousemove', function (dets) {
  gascard.style.left = `${dets.x}px`
})
document.querySelector('#gas').addEventListener('mouseleave', function (dets) {
  gascard.style.opacity = 0;
  gascard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  gascard.style.left = `20%`
})

var mricard = document.querySelector('.mricard');
document.querySelector('#mri h1').addEventListener('mouseenter', function (dets) {
  mricard.style.opacity = 1;
  mricard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  mricard.style.left = `40%`
})
document.querySelector('#mri').addEventListener('mousemove', function (dets) {
  mricard.style.left = `${dets.x}px`
})
document.querySelector('#mri').addEventListener('mouseleave', function (dets) {
  mricard.style.opacity = 0;
  mricard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  mricard.style.left = `20%`
})

var reactcard = document.querySelector('.reactcard');
document.querySelector('#react h1').addEventListener('mouseenter', function (dets) {
  reactcard.style.opacity = 1;
  reactcard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
  reactcard.style.left = `40%`
})
document.querySelector('#react').addEventListener('mousemove', function (dets) {
  reactcard.style.left = `${dets.x}px`
})
document.querySelector('#react').addEventListener('mouseleave', function (dets) {
  reactcard.style.opacity = 0;
  reactcard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
  reactcard.style.left = `20%`
})

gsap.to('#finish', {
  scrollTrigger: {
    trigger: '#finish',
    scroller: '#bg',
    // markers: true,
    start: 'top 45%',
  },
  opacity: 1,
  duration:1,
  onStart: function () {
    $(document).ready(function () {
      $('#finish h1').textillate({ in: { effect: 'fadeInUp' } });
    })
  },
})

gsap.to('#page4 img', {
  rotate: 360,
  repeat: -1,
  duration: 2.5,
  ease: 'linear'
})
var slide1h1 = document.querySelectorAll('#page5 .slide1h1 h1');
slide1h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(-96%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page5',
      scroller: '#bg',
      // markers: true,
      scrub: 3
    }
  })
})
var slide2h1 = document.querySelectorAll('#page5 .slide2h1 h1');
slide2h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(0%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page5',
      scroller: '#bg',
      // markers: true,
      scrub: 3
    }
  })
})
var yestag = document.querySelector('#op1');
var gifimg = document.querySelector('#op1 .gifimg');

yestag.addEventListener('mouseover',function(){
    gifimg.style.opacity = 1
})
yestag.addEventListener('mouseleave',function(){
    gifimg.style.opacity = 0
})
yestag.addEventListener('mousemove',function(dets){
    gifimg.style.top = `${dets.y-250}px`
    gifimg.style.left = `${dets.x-50}px`
})

var yestag2 = document.querySelector('#op2');
var gifimg2 = document.querySelector('#op2 .gifimg');

yestag2.addEventListener('mouseover',function(){
    gifimg2.style.opacity = 1
})
yestag2.addEventListener('mousemove',function(dets){
  gifimg2.style.top = `${dets.y-250}px`
  gifimg2.style.left = `${dets.x-650}px`
})
yestag2.addEventListener('mouseleave',function(){
    gifimg2.style.opacity = 0
})
