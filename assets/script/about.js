$(document).ready(() => {


  let girl1 = $('.girl1'),
      girl2 = $('.girl2'),
      girl3 = $('.girl3')

      gsap.set('.girl1, .girl2, .girl3', {autoAlpha: 0})
    let tl = new TimelineLite({repeat: -1});

    tl.to(girl1, 1, {autoAlpha: 1})
      .to(girl1, 10, {autoAlpha: 1})
      .to(girl1, 1, {autoAlpha: 0})
      .to(girl2, 1, {autoAlpha: 1})
      .to(girl2, 10, {autoAlpha: 1})
      .to(girl2, 1, {autoAlpha: 0})
      .to(girl3, 1, {autoAlpha: 1})
      .to(girl3, 10, {autoAlpha: 1})
      .to(girl3, 1, {autoAlpha: 0})


//Nicescroll settings
$(function() {
    $("body").niceScroll({
      cursorborder: "none",
      cursorcolor: "#832a02"
    });
});
})
