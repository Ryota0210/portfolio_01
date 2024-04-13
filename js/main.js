document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // drawer-menu
  const drawerLines = document.querySelectorAll(".drawer-line");
  const drawerBtn = document.querySelector(".drawer-btn");
  const drawerMenu = document.querySelector(".drawer-menu");
  drawerBtn.addEventListener("click", () => {
    drawerLines.forEach((line) => {
      line.classList.toggle("active");
    });
  });
  drawerBtn.addEventListener("click", () => {
    if (drawerLines[0].classList.contains("active")) {
      gsap.fromTo(
        drawerMenu,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5 }
      );
    } else {
      gsap.fromTo(
        drawerMenu,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.5 }
      );
    }
  });
  //product-hover
  const productContent = document.querySelectorAll(".product-content-item");
  const productImage = document.querySelectorAll(".product-image");
  productContent.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(productImage[index], { opacity: 1, duration: 0.5 });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(productImage[index], { opacity: 0, duration: 0.5 });
    });
  });
  //blog-hover
  const blogArticle = document.querySelectorAll(".blog-content-title");
  const blogCircle = document.querySelectorAll(".dli-caret-circle-fill-right");
  blogArticle.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(blogCircle[index], { color: "#d8cb5a", duration: 0.5 });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(blogCircle[index], { color: "#cacaca", duration: 0.5 });
    });
  });
  //contact-hover
  const contactLink = document.querySelector(".contact-link");
  const contactArrow = document.querySelector(".dli-arrow-right");
  contactLink.addEventListener("mouseenter", () => {
    gsap.to(contactArrow, { color: "#d8cb5a", duration: 0.5 });
  });
  contactLink.addEventListener("mouseleave", () => {
    gsap.to(contactArrow, { color: "white", duration: 0.5 });
  });
  // c-title
  const cTitle = document.querySelectorAll(".c-title");
  cTitle.forEach((title) => {
    gsap.to(title, {
      color: "#cacaca",
      duration: 0.5,
      scrollTrigger: {
        trigger: title,
        start: "bottom bottom",
      },
    });
  });
  // loading
  // loading > image
  const fvImage = document.querySelector(".fv-img-animate");
  window.addEventListener("load", () => {
    gsap.to(fvImage, {
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      delay: 7,
    });
  });
  // text-animate
  const subTitle = document.querySelectorAll(".animate-sub-title");
  subTitle.forEach((subtitle) => {
    gsap.fromTo(
      subtitle,
      {
        autoAlpha: 0,
        y: "50",
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: subtitle,
          start: "bottom bottom",
        },
      }
    );
  });
  const aboutText = document.querySelector(".about-text");
  gsap.to(aboutText, {
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      trigger: aboutText,
      star: "bottom bottom",
    },
  });
  const blogAnimate = document.querySelectorAll(".blog-content");
  gsap.set(blogAnimate, { autoAlpha: 0, y: "50" });
  gsap.to(blogAnimate, {
    autoAlpha: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: blogAnimate,
      start: "bottom bottom",
    },
  });
  // loading
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");
  window.addEventListener("load", () => {
    gsap.to(loading, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 5.5,
    });
    gsap.to(loadingBar, {
      width: "100%",
      duration: 5,
      ease: "power2.inOut",
    });
  });
});
