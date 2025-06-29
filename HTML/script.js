const scroll = new LocomotiveScroll({
    el: document.querySelector(`#main`),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: `-10`,
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
       y: 0,
       ease: Expo.easeInOut,
       duration: 2,
       delay: -1,
       stagger: .2 
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
}

function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets) {


        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;
        
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xdiff);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

       
    });
}

circleChaptaKaro(); 


function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}


circleMouseFollower();
firstPageAnim();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets) {
         gsap.to(elem.querySelector("images"), {
          opacity : 0,
          ease: Power3,
          duration: 0.5,  
         });
      });
    
    elem.addEventListener("mousemove", function(dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX; 

       gsap.to(elem.querySelector("images"), {
        opacity : 1,
        ease: Power1, 
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot), 
       });
    });
});
  