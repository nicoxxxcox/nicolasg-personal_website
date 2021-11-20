/**
* Template Name: Personal - v4.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   *  listen scroll
   */

   let observer = new IntersectionObserver(function(entries) {
     entries.forEach(entrie => {
       let anchorTarget = select(`.nav-link[href="#${entrie.target.id}"]`);
       if(entrie.intersectionRatio > 0.1 ) {
         anchorTarget.classList.add('active')
          } else { anchorTarget.classList.remove('active')}


       })


  }, { threshold : [0.1]});


  select('.js-observe', true).forEach( el => {
    observer.observe(el);

  })



})()
