const cursor = document.querySelector(".custom-cursor");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

// Animate trailing ring
function animateRing() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;

  ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateRing);
}
animateRing();




// Hover Detection for clickable elements
const clickableItems = document.querySelectorAll("a, button, .clickable");

clickableItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    // Show real cursor
    document.body.style.cursor = "pointer";

    // Hide custom dot
    cursor.style.display = "none";
    ring.style.height = "80px";
    ring.style.width = "80px";
  });

  item.addEventListener("mouseleave", () => {
    // Hide real cursor
    document.body.style.cursor = "none";

    // Show custom dot again
    cursor.style.display = "block";
    ring.style.height = "52px";
    ring.style.width = "52px";
  });
});


let opening = document.querySelector(".opening");
window.addEventListener("load", () => {
    setTimeout(() => {
        opening.style.height = "0%";
    }, 3900);
    setTimeout(() => {
        opening.style.display = "none";
        document.body.style.overflowY = "auto";
    }, 5500);
})


const big_bitrix = document.querySelector(".scroll-move");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Har halat mein scroll ke hisaab se calculate karo
  const speedFactor = 0.03; // adjust for faster/slower movement

  // Calculate left and clamp it to minimum 22%
  const newLeft = Math.max(22, 44 - scrollY * speedFactor);

  big_bitrix.style.left = `${newLeft}%`;
});

const image2 = document.querySelector(".photo2");
const startScroll = 697;
const maxReveal = 100; // % visible

window.addEventListener("scroll", () => {

  if (scrollY <= startScroll) {
    image2.style.clipPath = `inset(0% 0% 0% 100%)`; // fully hidden
  } else {
    let percent = (scrollY - startScroll) * 0.6; // adjust speed here
    if (percent > maxReveal) percent = maxReveal;

    // Reveal from left → reduce left clip %
    image2.style.clipPath = `inset(0% 0% 0% ${100 - percent}%)`;
  }
});  

  const image3 = document.querySelector(".photo3");
  const startScroll2 = 831;

  window.addEventListener("scroll", () => {

    if (scrollY <= startScroll2) {
      image3.style.clipPath = `inset(0% 100% 0% 10%)`; // fully hidden from left
    } else {
      let percent = (scrollY - startScroll2) * 0.6; // speed control
      if (percent > maxReveal) percent = maxReveal;

      // Reveal from left (decrease left value)
      image3.style.clipPath = `inset(0% ${100 - percent}% 0% 0%)`;
    }
  });


  const image4 = document.querySelector(".photo4");
  const startScroll3 = 1075;

  window.addEventListener("scroll", () => {
    
    if (scrollY <= startScroll3) {
      image4.style.clipPath = `inset(0% 100% 0% 10%)`; // fully hidden from left
    } else {
      let percent = (scrollY - startScroll3) * 1; // speed control
      if (percent > maxReveal) percent = maxReveal;

      // Reveal from left (decrease left value)
      image4.style.clipPath = `inset(0% ${100 - percent}% 0% 0%)`;
    }
  });

  const image5 = document.querySelector(".photo5");
  const startScroll4 = 1180;

  window.addEventListener("scroll", () => {
    
    if (scrollY <= startScroll4) {
      image5.style.clipPath = `inset(0% 0% 0% 100%)`; // fully hidden from left
    } else {
      let percent = (scrollY - startScroll4) * 1; // speed control
      if (percent > maxReveal) percent = maxReveal;

      // Reveal from left (decrease left value)
      image5.style.clipPath = `inset(0% 0% 0% ${100 - percent}%)`;
    }
  });

const image6 = document.querySelector(".photo6");
  const startScroll5 = 1281;

  window.addEventListener("scroll", () => {
    
    if (scrollY <= startScroll5) {
      image6.style.clipPath = `inset(0% 100% 0% 10%)`; // fully hidden from left
    } else {
      let percent = (scrollY - startScroll5) * 0.6; // speed control
      if (percent > maxReveal) percent = maxReveal;

      // Reveal from left (decrease left value)
      image6.style.clipPath = `inset(0% ${100 - percent}% 0% 0%)`;
    }
  });

const image7 = document.querySelector(".photo7");
  const startScroll6 = 1449;

  window.addEventListener("scroll", () => {
    
    if (scrollY <= startScroll6) {
      image7.style.clipPath = `inset(0% 0% 0% 100%)`; // fully hidden from left
    } else {
      let percent = (scrollY - startScroll6) * 1; // speed control
      if (percent > maxReveal) percent = maxReveal;

      // Reveal from left (decrease left value)
      image7.style.clipPath = `inset(0% 0% 0% ${100 - percent}%)`;
    }
  });

  let service_text = document.querySelector(".Service-animation");
  let Below_services1_animation = document.querySelector(".Below-services1-animation");
  let Below_services2_animation = document.querySelector(".Below-services2-animation");
  let technology_text_animation = document.querySelector(".technology-head");
  let below_tech1_animation = document.querySelector(".below-tech");
  let below_tech2_animation = document.querySelector(".below-tech2");
  let below_tech3_animation = document.querySelector(".below-tech3");
  let below_tech4_animation = document.querySelector(".below-tech4");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 1550) {
      service_text.style.top = "0px";
    };
    if(window.scrollY > 1715) {
      Below_services1_animation.style.top = "0px";
    };
    if(window.scrollY > 1795) {
      Below_services2_animation.style.top = "0px";
    };
    if(window.scrollY > 2412){
      technology_text_animation.style.top = "0%";
    };
    if(window.scrollY > 2720) {
      below_tech1_animation.style.top = "0%";
    };
    if(window.scrollY > 2784) {
      below_tech2_animation.style.top = "0%";
    };
    if(window.scrollY > 2900) {
      below_tech3_animation.style.top = "0%";
    };
    if(window.scrollY > 3000) {
      below_tech4_animation.style.top = "0%";
    };
  });

  const unity = document.querySelector(".unity-scroll");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const speedFactor = 4; // adjust for faster/slower movement

  // Scroll 3010 se pehle koi movement nahi
  if (scrollY >= 2900) {
    // Adjust scroll value to start from 0 at 3010
    const adjustedScroll = scrollY - 3010;

    // Calculate left and clamp it to minimum -925
    const newLeft = Math.max(-925, 1325 - adjustedScroll * speedFactor);

    unity.style.left = `${newLeft}px`;
  }
});

const unity_image = document.querySelector(".unity-img");
let targetX = 0;
let currentX = 0;
let animationFrame;

unity.addEventListener("mouseover", () => {
  unity_image.style.display = "block";
  document.addEventListener("mousemove", updateTargetXunity);
  animateunity();
});

unity.addEventListener("mouseout", () => {
  unity_image.style.display = "none";
  cancelAnimationFrame(animationFrame);
  document.removeEventListener("mousemove", updateTargetXunity);
});

function updateTargetXunity(e) {
  const imageWidth = unity_image.offsetWidth / 2;
  targetX = e.pageX - imageWidth;
}

// animate() will slowly move image from currentX to targetX
function animateunity() {
  const speed = 0.9; // smaller = smoother & slower
  currentX += (targetX - currentX) * speed;
  unity_image.style.left = `${currentX}px`;
  unity_image.style.top = `64%`; // keep it fixed vertically

  animationFrame = requestAnimationFrame(animateunity);
}












const unreal = document.querySelector(".Unreal-en");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const speedFactor = 3.5; // adjust for faster/slower movement

  // Scroll 3010 se pehle koi movement nahi
  if (scrollY >= 2950) {
    // Adjust scroll value to start from 0 at 3010
    const adjustedScroll = scrollY - 3010;

    // Calculate left and clamp it to minimum -925
    const newLeft = Math.max(-900, 1400 - adjustedScroll * speedFactor);

    unreal.style.left = `${newLeft}px`;
  }
});



const unreal_img = document.querySelector(".unreal-img");
let animationFrame2;

unreal.addEventListener("mouseover", () => {
  unreal_img.style.display = "block";
  document.addEventListener("mousemove", updateTargetXunreal);
  animateunreal();
});

unreal.addEventListener("mouseout", () => {
  unreal_img.style.display = "none";
  cancelAnimationFrame(animationFrame2);
  document.removeEventListener("mousemove", updateTargetXunreal);
});

function updateTargetXunreal(e) {
  const imageWidth = unreal_img.offsetWidth / 2;
  targetX = e.pageX - imageWidth;
}

// animate() will slowly move image from currentX to targetX
function animateunreal() {
  const speed = 0.9; // smaller = smoother & slower
  currentX += (targetX - currentX) * speed;
  unreal_img.style.left = `${currentX}px`;
  unreal_img.style.top = `69%`; // keep it fixed vertically

  animationFrame2 = requestAnimationFrame(animateunreal);
}










const flutter = document.querySelector(".Flutter-app");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const speedFactor = 3; // adjust for faster/slower movement

  // Scroll 3010 se pehle koi movement nahi
  if (scrollY >= 2980) {
    // Adjust scroll value to start from 0 at 3010
    const adjustedScroll = scrollY - 3010;

    // Calculate left and clamp it to minimum -925
    const newLeft = Math.max(-900, 1475 - adjustedScroll * speedFactor);

    flutter.style.left = `${newLeft}px`;
  }
});


const flutter_img = document.querySelector(".flutter-img");
let animationFrame3;

flutter.addEventListener("mouseover", () => {
  flutter_img.style.display = "block";
  document.addEventListener("mousemove", updateTargetXflutter);
  animateflutter();
});

flutter.addEventListener("mouseout", () => {
  flutter_img.style.display = "none";
  cancelAnimationFrame(animationFrame3);
  document.removeEventListener("mousemove", updateTargetXflutter);
});

function updateTargetXflutter(e) {
  const imageWidth = flutter_img.offsetWidth / 2;
  targetX = e.pageX - imageWidth;
}

// animate() will slowly move image from currentX to targetX
function animateflutter() {
  const speed = 0.9; // smaller = smoother & slower
  currentX += (targetX - currentX) * speed;
  flutter_img.style.left = `${currentX}px`;
  flutter_img.style.top = `74%`; // keep it fixed vertically

  animationFrame3 = requestAnimationFrame(animateflutter);
}













const React_Native = document.querySelector(".Native-app");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const speedFactor = 2.8; // adjust for faster/slower movement

  // Scroll 3010 se pehle koi movement nahi
  if (scrollY >= 2980) {
    // Adjust scroll value to start from 0 at 3010
    const adjustedScroll = scrollY - 3010;

    // Calculate left and clamp it to minimum -925
    const newLeft = Math.max(-900, 1510 - adjustedScroll * speedFactor);

    React_Native.style.left = `${newLeft}px`;
  }
});


const Native_img = document.querySelector(".Native-img");
let animationFrame4;

React_Native.addEventListener("mouseover", () => {
  Native_img.style.display = "block";
  document.addEventListener("mousemove", updateTargetXnative);
  animatenative();
});

React_Native.addEventListener("mouseout", () => {
  Native_img.style.display = "none";
  cancelAnimationFrame(animationFrame4);
  document.removeEventListener("mousemove", updateTargetXnative);
});

function updateTargetXnative(e) {
  const imageWidth = Native_img.offsetWidth / 2;
  targetX = e.pageX - imageWidth;
}

// animate() will slowly move image from currentX to targetX
function animatenative() {
  const speed = 0.9; // smaller = smoother & slower
  currentX += (targetX - currentX) * speed;
  Native_img.style.left = `${currentX}px`;
  Native_img.style.top = `78.7%`; // keep it fixed vertically

  animationFrame4 = requestAnimationFrame(animatenative);
}
















const NFT = document.querySelector(".NFT-dev");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const speedFactor = 2.8; // adjust for faster/slower movement

  // Scroll 3010 se pehle koi movement nahi
  if (scrollY >= 2980) {
    // Adjust scroll value to start from 0 at 3010
    const adjustedScroll = scrollY - 3010;

    // Calculate left and clamp it to minimum -925
    const newLeft = Math.max(-900, 1630 - adjustedScroll * speedFactor);

    NFT.style.left = `${newLeft}px`;
  }
});


const NFT_img = document.querySelector(".NFT-img");
let animationFrame5;

NFT.addEventListener("mouseover", () => {
  NFT_img.style.display = "block";
  document.addEventListener("mousemove", updateTargetX);
  animate();
});

NFT.addEventListener("mouseout", () => {
  NFT_img.style.display = "none";
  cancelAnimationFrame(animationFrame5);
  document.removeEventListener("mousemove", updateTargetX);
});

function updateTargetX(e) {
  const imageWidth = NFT_img.offsetWidth / 2;
  targetX = e.pageX - imageWidth;
}

// animate() will slowly move image from currentX to targetX
function animate() {
  const speed = 0.9; // smaller = smoother & slower
  currentX += (targetX - currentX) * speed;
  NFT_img.style.left = `${currentX}px`;
  NFT_img.style.top = `83.3%`; // keep it fixed vertically

  animationFrame5 = requestAnimationFrame(animate);
}

let featured = document.querySelector(".featured");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Only activate after scrollY > 4158
  if (scrollY > 4175) {
    const speedFactor = 0.09;
    const newLeft = Math.max(-42, 42 - (scrollY - 4158) * speedFactor);

    featured.style.left = `${newLeft}%`;
  }
});

let Projects = document.querySelector(".Projects-scroll");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 4175) {
    const speedFactor = 0.07;
    const newLeft = Math.min(65, -6 + (scrollY - 4158) * speedFactor);

    Projects.style.left = `${newLeft}%`;
  }
});


let pick_div = document.querySelector(".Pic-div1");

let felicia = document.querySelector(".Felicia");
let Felicia_text = document.querySelector(".Felicia-paris");
let shop_lux = document.querySelector(".shop-lux");
let about_felicia = document.querySelector(".about-felicia");
let casestudy = document.querySelector(".case-study1");
let circle = document.querySelector(".circle");
let arrow = document.querySelector(".arrow");
pick_div.addEventListener("mouseover", () => {
  // pick_div.style.background = "url('https://bytrix.com/assets/external/l566d3egsswy/port-5.webp')";
  // pick_div.style.backgroundSize = "cover";
  // pick_div.style.backgroundRepeat = "no-repeat";
  // pick_div.style.backgroundPosition = "center";
  felicia.style.opacity = "0";
  Felicia_text.style.opacity = "0";
  shop_lux.style.color = "white";
  about_felicia.style.color = "white";
  casestudy.style.color = "white";
  circle.style.border = '2px solid white';
  circle.style.zIndex = "0";
  arrow.style.filter = "brightness(1000%) grayscale(100%)"
});
pick_div.addEventListener("mouseout", () => {
  pick_div.style.background = 'none';
  felicia.style.opacity = "1";
  Felicia_text.style.opacity = "1"
  Felicia_text.style.color = "black";
  shop_lux.style.color = "black";
  about_felicia.style.color = "black";
  casestudy.style.color = "black";
  circle.style.border = '2px solid black';
  circle.style.zIndex = "-1";
  arrow.style.filter = "none";
})

let pick_div2 = document.querySelector(".Pic-div2");
let patient_pic = document.querySelector(".The-Pateint-wait");
let pateint_wait = document.querySelector(".Patient-wait");
let Respond_Siftly = document.querySelector(".Respond");
let about_wait = document.querySelector(".about-patient-wait");
let casestudy2 = document.querySelector(".case-study2");
let circle2 = document.querySelector(".circle2");
let arrow2 = document.querySelector(".arrow2");

pick_div2.addEventListener("mouseover", () => {
  patient_pic.style.opacity = "0";
  pateint_wait.style.opacity = "0";
  Respond_Siftly.style.color = "white";
  about_wait.style.color = "white";
  casestudy2.style.color = "white";
  circle2.style.border = '2px solid white';
  circle2.style.zIndex = "0";
  arrow2.style.filter = "brightness(1000%) grayscale(100%)"
});
pick_div2.addEventListener("mouseout", () => {
  pick_div2.style.background = 'none';
  patient_pic.style.opacity = "1";
  pateint_wait.style.opacity = "1"
  Respond_Siftly.style.color = "black";
  about_wait.style.color = "black";
  casestudy2.style.color = "black";
  circle2.style.border = '2px solid black';
  circle2.style.zIndex = "-1";
  arrow2.style.filter = "none";
})


let pick_div3 = document.querySelector(".Pic-div3");
let Horse_pic = document.querySelector(".Horse");
let Horse_match = document.querySelector(".Horse-match");
let Horse_ontip = document.querySelector(".Horse-ontip");
let about_horse = document.querySelector(".about-horse");
let casestudy3 = document.querySelector(".case-study3");
let circle3 = document.querySelector(".circle3");
let arrow3 = document.querySelector(".arrow3");

pick_div3.addEventListener("mouseover", () => {
  Horse_pic.style.opacity = "0";
  Horse_match.style.opacity = "0";
  Horse_ontip.style.color = "white";
  about_horse.style.color = "white";
  casestudy3.style.color = "white";
  circle3.style.border = '2px solid white';
  circle3.style.zIndex = "0";
  arrow3.style.filter = "brightness(1000%) grayscale(100%)"
});
pick_div3.addEventListener("mouseout", () => {
  pick_div3.style.background = 'none';
  Horse_pic.style.opacity = "1";
  Horse_match.style.opacity = "1"
  Horse_ontip.style.color = "black";
  about_horse.style.color = "black";
  casestudy3.style.color = "black";
  circle3.style.border = '2px solid black';
  circle3.style.zIndex = "-1";
  arrow3.style.filter = "none";
})


let body = document.querySelector("body");
let maxScroll = 7090;
let scroller = document.querySelector(".scroller");

let lockScroll = true;

// ✅ Track last scroll position to detect upward scroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // 1. Lock user at maxScroll if lockScroll is active
  if (currentScrollY > maxScroll && lockScroll) {
    window.scrollTo({ top: maxScroll, behavior: "auto" });
    document.body.classList.add("lock-scroll");
    scroller.style.overflowY = "scroll";
  }

  // 2. Prevent user from scrolling UP if scroller isn't back to top
  if (
    currentScrollY < lastScrollY && // 👈 scrolling up
    scroller.scrollTop > 0 &&       // 👈 scroller not reset yet
    currentScrollY < maxScroll      // 👈 only after crossing lock area
  ) {
    window.scrollTo({ top: lastScrollY, behavior: "auto" }); // 👈 force back down
  }

  // 3. Re-enable locking logic only if back above threshold
  if (currentScrollY < maxScroll - 100) {
    lockScroll = true;
    scroller.style.overflowY = "hidden";
  }

  lastScrollY = currentScrollY;
});

// 🔓 Unlock scroll when scroller is deeply scrolled
scroller.addEventListener("scroll", () => {
  if (scroller.scrollTop >= 950) {
    lockScroll = false;
    document.body.classList.remove("lock-scroll");
    body.style.overflowY = "auto";
  }
});

let Mobile_Dvelopment = document.querySelector("#Mobile-development");
let mobil_application = document.querySelector(".mobile-application");
let mobile_categories = document.querySelectorAll(".mobile-categories");
Mobile_Dvelopment.addEventListener("mouseover", () => {
  mobil_application.style.color = "white";
  for (const CATE of mobile_categories) {
      CATE.style.color = "white";
  }
});
Mobile_Dvelopment.addEventListener("mouseout", () => {
  mobil_application.style.color = "Black";
  for (const CATE of mobile_categories) {
      CATE.style.color = "Grey";
  }
});

let Game_development = document.querySelector("#Game-Developments");
let game_head = document.querySelector(".Game-Development");
let Game_Categories = document.querySelectorAll(".Game-Categories");
Game_development.addEventListener("mouseover", () => {
  game_head.style.color = "white";
  for (const gc of Game_Categories) {
    gc.style.color = "white";
  }
});
Game_development.addEventListener("mouseout", () => {
  game_head.style.color = "black";
  for (const gc of Game_Categories) {
    gc.style.color = "grey";
  }
});


let marketing_development = document.querySelector("#Marketing-Development");
let Marketing_head = document.querySelector(".Marketing-support");
let Market_Categories = document.querySelectorAll(".Market-categories");
marketing_development.addEventListener("mouseover", () => {
  Marketing_head.style.color = "white";
  for (const cate of Market_Categories) {
        cate.style.color = "white";    
  };
});
marketing_development.addEventListener("mouseout", () => {
  Marketing_head.style.color = "black";
  for (const cate of Market_Categories) {
        cate.style.color = "grey";    
  };
});

let Products_development = document.querySelector("#Products-Development");
let Products_head = document.querySelector(".Products-solutions");
let Product_categories = document.querySelectorAll(".product_categories");
Products_development.addEventListener("mouseover", () => {
  Products_head.style.color = "white";
  for (const cate of Product_categories) {
    cate.style.color = "white";
  };
});
Products_development.addEventListener("mouseout", () => {
  Products_head.style.color = "black";
  for (const cate of Product_categories) {
    cate.style.color = "grey";
  };
});