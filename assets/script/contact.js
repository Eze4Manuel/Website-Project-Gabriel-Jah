$(document).ready(() => {




      let pop1 = $('.pop1'),
          pop2 = $('.pop2');

        //  gsap.set('.pop1, .pop2', {autoAlpha: 0});
        let t3 = new TimelineLite({repeat: -1});

        t3.to(pop1, 0.1, {autoAlpha: 1})
          .to(pop1, 5, {autoAlpha: 1})
          .to(pop1, 0.1, {autoAlpha: 0})
          .to(pop2, 0.1, {autoAlpha: 1})
          .to(pop2, 5, {autoAlpha: 1})
          .to(pop2, 0.1, {autoAlpha: 0});


          let pop3 = $('.pop3'),
              pop4 = $('.pop4')

              gsap.set('.pop3, .pop4', {autoAlpha: 0})
            let t4 = new TimelineLite({repeat: -1});

            t4.to(pop3, 0.1, {autoAlpha: 1})
              .to(pop3, 5, {autoAlpha: 1})
              .to(pop3, 0.1, {autoAlpha: 0})
              .to(pop4, 0.1, {autoAlpha: 1})
              .to(pop4, 5, {autoAlpha: 1})
              .to(pop4, 0.1, {autoAlpha: 0});


  //Modal pop up
  $('.modal').modal();



//Nicescroll settings
$(function() {
    $("body").niceScroll({
      cursorborder: "none",
      cursorcolor: "#832a02"
    });
});
})
