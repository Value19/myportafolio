document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

const sections = document.querySelectorAll('.section');

const revealOnScroll = () => {
  const scrollPos = window.scrollY + window.innerHeight * 0.8;

  sections.forEach(section => {
    if (scrollPos > section.offsetTop) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

