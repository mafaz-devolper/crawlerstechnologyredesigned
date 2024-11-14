var cursor = document.querySelector("#cursor");
var SB = document.querySelector("#home .elem");
var home = document.querySelector("#home");

// Smooth cursor following
document.body.addEventListener("mousemove", function (dets) {
  let mouseX = dets.clientX;
  let mouseY = dets.clientY;

  // Animate cursor position
  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.5,
    ease: "power2.out",
  });

  // Calculate shadow offset based on mouse position
  let xOffset = (mouseX - window.innerWidth / 2) / 25;
  let yOffset = (mouseY - window.innerHeight / 2) / 25;

  // Apply drop shadow filter following mouse movement
  SB.style.filter = `drop-shadow(${xOffset}px ${yOffset}px 28px #222)`;
});

// Hide cursor when mouse leaves the window
document.body.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0,
    duration: 0.3,
  });
});

// Show cursor when mouse enters the window
document.body.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
  });
});

function homepageAnimation() {
  var tl = gsap.timeline();

  tl.from("nav", {
    y: -40,
    duration: 1,
    opacity: 0.5,
  });

  tl.from("#home h1", {
    duration: 0.6,
    opacity: 0,
    y: 40,
  });
  tl.from("#home h2", {
    duration: 1,
    delay: 0.4,
    x: 50,
    opacity: 0,
  });
  tl.from("#home h2 span", {
    duration: 1,
    x: -50,
    opacity: 0,
  });
  tl.from("#home #video-div", {
    duration: 1,
    x: -50,
    opacity: 0,
  });
  tl.from("#home #privecy-feature", {
    duration: 1,
    opacity: 0,
    position: "fixed",
    delay: 2.8,
  });
}
function backgroundColor() {
  gsap.to("#crafting", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "#111",
    duration: 0.8,
  });

  gsap.to("#services", {
    scrollTrigger: {
      trigger: "#services",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "black",
    duration: 0.8,
  });

  gsap.to("#work", {
    scrollTrigger: {
      trigger: "#work",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "white",
    duration: 0.8,
  });
}
function craftingPageAnimation() {
  gsap.from("#crafting .title", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
  });
  gsap.from("#crafting #text-con", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    x: 100,
    opacity: 0,
    duration: 1,
  });

  gsap.from("#crafting #text-con h1", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
  });

  gsap.from("#crafting #text-con button", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    stagger: 0.2,
    delay: 0.4,
  });

  gsap.from("#crafting .silde button", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    stagger: 0.2,
  });

  gsap.from("#crafting .silde", {
    scrollTrigger: {
      trigger: "#crafting",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });
}
function serviceAnimation() {
  gsap.from(".services-container", {
    scrollTrigger: {
      trigger: ".services-container",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
  });
}
function workAnimation() {
  gsap.utils.toArray(".project-box").forEach((box) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
    });
  });
}
function craftingSlideAnime() {
  const slideContent = [
    {
      title: "serious facts",
      number: "01/03",
      stat: "100+",
      text: "Ratione nihil expedita animi laudantium explicabo. At, est explicabo saepe debitis animi dolorum suscipit praesentium neque libero harum nesciunt.",
    },
    {
      title: "client success",
      number: "02/03",
      stat: "85%",
      text: "Our clients see remarkable growth and success through our strategic branding and digital design solutions that connect with their target audience.",
    },
    {
      title: "global reach",
      number: "03/03",
      stat: "25+",
      text: "Working with startups and scaleups across continents, delivering premium branding solutions that transcend geographical boundaries.",
    },
  ];

  let currentSlide = 0;

  // Get slide elements
  const slideTitle = document.querySelector("#crafting .silde .title h5");
  const slideNumber = document.querySelector(
    "#crafting .silde .title h5:last-child"
  );
  const slideStat = document.querySelector("#crafting .silde h1");
  const slideText = document.querySelector("#crafting .silde p");

  // Add click handlers for slide buttons
  document.querySelectorAll("#crafting .silde button").forEach((button) => {
    button.addEventListener("click", () => {
      // Determine direction
      const isNext = button.innerHTML === "▶";

      // Update current slide index
      if (isNext) {
        currentSlide = (currentSlide + 1) % slideContent.length;
      } else {
        currentSlide =
          (currentSlide - 1 + slideContent.length) % slideContent.length;
      }

      // Animate content change
      gsap.to([slideTitle, slideNumber, slideStat, slideText], {
        opacity: 0,
        y: isNext ? 20 : -20,
        duration: 0.3,
        onComplete: () => {
          // Update content
          slideTitle.innerHTML = slideContent[currentSlide].title;
          slideNumber.innerHTML = slideContent[currentSlide].number;
          slideStat.innerHTML = slideContent[currentSlide].stat;
          slideText.innerHTML = slideContent[currentSlide].text;

          // Animate new content in
          gsap.to([slideTitle, slideNumber, slideStat, slideText], {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
        },
      });
    });
  });
}
function testimonialSlider() {
  // Get testimonials slider and control buttons
  const slider = document.querySelector(".testimonials-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Get width of a single card including gap
  const cardWidth =
    document.querySelector(".testimonial-card").offsetWidth +
    parseFloat(getComputedStyle(slider).gap);

  // Add click handlers for testimonial slider controls
  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  });

  // Testimonials section animation
  gsap.to("#testimonials", {
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "#111",
    duration: 0.8,
  });

  gsap.utils.toArray(".testimonial-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
}
function footerpageAnimation() {
  gsap.to("#footer", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "#fff",
    duration: 0.8,
  });
  gsap.from("#footer .footer-con", {
    scrollTrigger: {
      trigger: "#footer .footer-con",
      start: "top center",
      end: "bottom center",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
  });
}
function menuOC() {
  var menuOpen = document.querySelector("nav button:nth-child(3)");
  var menuClose = document.querySelector("#menu-page #cross");

  menuOpen.addEventListener("click", function () {
    gsap.to("#menu-page", {
      right: 0,
      duration: 0.8,
    });
    gsap.to("#menu-page #links a", {
      opacity: 1,
      duration: 0.4,
      ease: Power4,
      x: 40,
      stagger: 0.8,
      delay: 0.8,
    });
    gsap.from("#menu-page #cross h3", {
      opacity: 0,
      duration: 1,
    });
  });

  menuClose.addEventListener("click", function () {
    gsap.to("#menu-page", {
      duration: 0.8,
      right: 2000,
    });
  });
}
function letworkForm() {
  var letworkBtn = document.querySelector("nav button:nth-child(1)");
  var formClose = document.querySelector("#contact-form .title h2");

  letworkBtn.addEventListener("click", () => {
    gsap.to("#contact-form", {
      left: "50%",
      duration: 0.6,
    });
  });

  formClose.addEventListener("click", () => {
    gsap.to("#contact-form", {
      left: "-50%",
      duration: 0.6,
    });
  });
}

homepageAnimation();
backgroundColor();
craftingPageAnimation();
serviceAnimation();
workAnimation();
craftingSlideAnime();
testimonialSlider();
footerpageAnimation();
menuOC();
letworkForm();
