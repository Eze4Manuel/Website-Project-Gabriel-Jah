$(document).ready(() => {


  let girl1 = $('.geeguidemouse'),
      girl2 = $('.geeguidemouse1')

      gsap.set('.geeguidemouse, .geeguidemouse1', {autoAlpha: 0})
    let tl = new TimelineLite({repeat: -1});

    tl.to(girl1, 1, {autoAlpha: 1})
      .to(girl1, 6, {autoAlpha: 1})
      .to(girl1, 1, {autoAlpha: 0})
      .to(girl2, 1, {autoAlpha: 1})
      .to(girl2, 6, {autoAlpha: 1}) 
      .to(girl2, 1, {autoAlpha: 0})



        let pop1 = $('.pop1'),
            pop2 = $('.pop2')

            gsap.set('.pop1, .pop2', {autoAlpha: 0})
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
              let t2 = new TimelineLite({repeat: -1});

              t2.to(pop3, 0.1, {autoAlpha: 1})
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
