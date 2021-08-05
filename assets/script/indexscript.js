$(document).ready(() => {

  $('.splendor').click(() => {
      location.href = 'register';
  })


  let pic1 = $('.pic1'),
      pic2 = $('.pic2'),
      pic3 = $('.pic3'),
      pic4 = $('.pic4')
 
      gsap.set('.pic1, .pic2, .pic3, .pic4', {autoAlpha: 0})
    let tl = new TimelineLite({repeat: -1});

    tl.to(pic1, 6, {autoAlpha: 1})
      .to(pic1, 1, {autoAlpha: 0})
      .to(pic2, 5, {autoAlpha: 1})
      .to(pic2, 1, {autoAlpha: 0})
      .to(pic3, 7, {autoAlpha: 1})
      .to(pic3, 1, {autoAlpha: 0})
      .to(pic4, 5, {autoAlpha: 1})
      .to(pic4, 1, {autoAlpha: 0});


     //Nicescroll settings
       $(function() {
           $("body").niceScroll({
             cursorborder: "none",
             cursorcolor: "#832a02"
           });

       });


       //Nicescroll settings Ends



})
