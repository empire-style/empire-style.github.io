 &#39;use strict&#39;;

// modal variables
const modal = document.querySelector(&#39;[data-modal]&#39;);
const modalCloseBtn = document.querySelector(&#39;[data-modal-close]&#39;);
const modalCloseOverlay = document.querySelector(&#39;[data-modal-overlay]&#39;);

// modal function
const modalCloseFunc = function () { modal.classList.add(&#39;closed&#39;) }

// modal eventListener
modalCloseOverlay.addEventListener(&#39;click&#39;, modalCloseFunc);
modalCloseBtn.addEventListener(&#39;click&#39;, modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector(&#39;[data-toast]&#39;);
const toastCloseBtn = document.querySelector(&#39;[data-toast-close]&#39;);

// notification toast eventListener
toastCloseBtn.addEventListener(&#39;click&#39;, function () {
  notificationToast.classList.add(&#39;closed&#39;);
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(&#39;[data-mobile-menu-open-btn]&#39;);
const mobileMenu = document.querySelectorAll(&#39;[data-mobile-menu]&#39;);
const mobileMenuCloseBtn = document.querySelectorAll(&#39;[data-mobile-menu-close-btn]&#39;);
const overlay = document.querySelector(&#39;[data-overlay]&#39;);

for (let i = 0; i &lt; mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove(&#39;active&#39;);
    overlay.classList.remove(&#39;active&#39;);
  }

  mobileMenuOpenBtn[i].addEventListener(&#39;click&#39;, function () {
    mobileMenu[i].classList.add(&#39;active&#39;);
    overlay.classList.add(&#39;active&#39;);
  });

  mobileMenuCloseBtn[i].addEventListener(&#39;click&#39;, mobileMenuCloseFunc);
  overlay.addEventListener(&#39;click&#39;, mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll(&#39;[data-accordion-btn]&#39;);
const accordion = document.querySelectorAll(&#39;[data-accordion]&#39;);

for (let i = 0; i &lt; accordionBtn.length; i++) {

  accordionBtn[i].addEventListener(&#39;click&#39;, function () {

    const clickedBtn = this.nextElementSibling.classList.contains(&#39;active&#39;);

    for (let i = 0; i &lt; accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains(&#39;active&#39;)) {

        accordion[i].classList.remove(&#39;active&#39;);
        accordionBtn[i].classList.remove(&#39;active&#39;);

      }

    }

    this.nextElementSibling.classList.toggle(&#39;active&#39;);
    this.classList.toggle(&#39;active&#39;);

  });

}
