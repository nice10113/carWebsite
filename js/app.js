const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
var menuOpen = false;

const tl = new TimelineLite();

// AOS
AOS.init({
  once: false,
  duration: 3000,
});

function PageLoadAnimation() {
  tl.staggerFrom(
    ".navbar .logo, .navbar ul li, .navbar .btn",
    1,
    {
      opacity: 0,
      pointerEvents: "none",
    },
    0.2
  );

  tl.staggerFrom(
    ".hero .line, .hero .social-media i",
    1,
    {
      opacity: 0,
      pointerEvents: "none",
    },
    0.2
  );

  tl.from(".hero__content", 1, {
    opacity: 0,
    pointerEvents: "none",
  });
}

function navbarAniamtionOnScroll() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add("activeScroll");
    } else {
      navbar.classList.remove("activeScroll");
    }
  });
}

function toggleNav() {
  navbarToggler.addEventListener("click", () => {
    if (!menuOpen) {
      menuOpen = true;
      navbar.classList.add("navToggled");
      navbarToggler.classList.add("activeToggle");
    } else {
      menuOpen = false;
      navbar.classList.remove("navToggled");
      navbarToggler.classList.remove("activeToggle");
    }
  });
}

// Smooth Scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });

PageLoadAnimation();
toggleNav();
navbarAniamtionOnScroll();
