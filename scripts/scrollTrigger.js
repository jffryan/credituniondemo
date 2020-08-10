const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".home__main-content",
    start: "center bottom",
  },
});

timeline.from("img", { x: 200, opacity: 0, duration: 1.5 });
timeline.from(".img-overlay", { x: 200, opacity: 0, duration: 1.5 }, "-=1.5");
timeline.from("#main-content", { y: 300, opacity: 0, duration: 1 }, "-=1");

const secondaryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".home__data-content",
    start: "center bottom",
  },
});

secondaryTimeline
  .from("#data-content", { y: 300, opacity: 0, duration: 1.5 })
  .from(".data-container", { x: -100, opacity: 0, duration: 1 }, "-=1");

const tertiaryTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".call-to-action",
    start: "center bottom",
  },
});

tertiaryTimeline.from(".cards-container", { opacity: 0, duration: 2 });
