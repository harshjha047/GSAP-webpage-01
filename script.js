let section1Animation = () => {
  let tl = gsap.timeline();
  tl.from("nav a,nav button", {
    y: -30,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
  });

  brackedText = () => {
    let h1 = document.querySelector("#section1TextContentHead");
    let p = document.querySelector("#nav-para");
    let splitp = p.textContent.split(" ");
    let splith1 = h1.textContent.split(" ");
    let clutterP = "";
    let clutterH1 = "";
    splitp.forEach((value) => {
      clutterP += `<span class="section1TextContentParaText">${value}&nbsp;</span>`;
    });
    splith1.forEach((value) => {
      clutterH1 += `<span class="section1TextContentHeadText">${value}&nbsp;</span>`;
    });
    p.innerHTML = clutterP;
    h1.innerHTML = clutterH1;
  };
  brackedText();
  tl.from(".section1TextContentHeadText", {
    y: -30,
    duration: 0.2,
    stagger: 0.05,
    opacity: 0,
  });
  tl.from(".section1TextContentParaText", {
    y: -30,
    duration: 0.2,
    stagger: 0.05,
    opacity: 0,
  });
  tl.from(".section1-text-content button", {
    y: -30,
    stagger: 0.05,
    opacity: 0,
  });
  tl.from(
    ".section1-media-content img",
    {
      y: -30,
      opacity: 0,
    },
    "-=0.5"
  );
  tl.from(".logo", {
    opacity: 0,
    stagger: 0.1,
    y:30,
    scrollTrigger: {
      trigger: ".section1logosBar",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top 50%",
      scrub: 2,
    },
  });
};
section1Animation();
let section2Animation = () => {
  let tlTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
    //   markers: true,
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    },
  });
  tlTrigger.from(".section2top", {
    x: 40,
    opacity: 0,
    duration: 0.3,
  });
  tlTrigger.from(
    "#section2box1",
    {
      x: -300,
      opacity: 0,
      duration: 0.3,
    },
    "top"
  );
  tlTrigger.from(
    "#section2box2",
    {
      x: 300,
      opacity: 0,
      duration: 0.3,
    },
    "top"
  );
  tlTrigger.from(
    "#section2box3",
    {
      x: -300,
      opacity: 0,
      duration: 0.3,
    },
    "bottom"
  );
  tlTrigger.from(
    "#section2box4",
    {
      x: 300,
      opacity: 0,
      duration: 0.3,
    },
    "bottom"
  );
};
section2Animation();
