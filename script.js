const toggleButton = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.classList.add("hidden");
toggleButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Observer RF IMAGE

const randomFact = document.querySelector("#rf");
const rfImage = randomFact.querySelector(".rf-pre-image");
const { height } = randomFact.getBoundingClientRect();

const rf = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    rfImage.classList.remove("rf-pre-image");
    rfImage.classList.add("rf-image");
    observer.unobserve(entry.target);
  }
};

const rfObserver = new IntersectionObserver(rf, {
  root: null,
  threshold: 0,
  rootMargin: `-${height / 1.2}px`,
});

rfObserver.observe(randomFact);

// Observer SKILLS IMAGE

const skl = document.querySelector("#skl");
const skillsImage = skl.querySelector(".skills-image img");
const { height: ht } = skl.getBoundingClientRect();

const sk = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    skillsImage.classList.add("skills-image-animation");
    observer.unobserve(entry.target);
  }
};

const skObserver = new IntersectionObserver(sk, {
  root: null,
  threshold: 0,
  rootMargin: `-${ht / 1.2}px`,
});

skObserver.observe(skl);
