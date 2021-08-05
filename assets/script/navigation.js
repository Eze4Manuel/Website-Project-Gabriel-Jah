$(document).ready(() => {
  //setting dropdown menu
  $('header nav .mobilesidenav .tabuloid ul .hid').slideUp();

  $('#theeye').on('click', () => {
    console.log('clicked');
  $('header nav .mobilesidenav .tabuloid ul .hid').slideToggle();
  })

  $('.dropGabriel').slideUp()

  $('#ontop').on('mouseover', () => {
    $('.dropGabriel').css({'opacity': 1})

      $('.dropGabriel').slideDown();
  }) 



    $('.dropGabriel').on('mouseleave', () => {
        $('.dropGabriel').slideUp();
    })
  //Sidenav settings
  $('.mobilebar i').click(() => {
     //let t1 = new TimelineLite();
    gsap.to('.mobilesidenav', 0.4, { height: "800px", autoAlpha: 1});

  })

    //Sidenav settings
    $('header nav .mobilesidenav .tabuloid ul li i').click(() => {
      gsap.to('.mobilesidenav',0.4, {height: "0px", autoAlpha: 0});
    });


    let bling = $('.bling');
    let t2 = new TimelineLite();
    let t3 = new TimelineLite();









    ////Media Query of less than 1900px for Bling
       var x = window.matchMedia("(max-width: 1900px)")
       myFunction(x) // Call listener function at run time
       x.addListener(myFunction) // Attach listener function on state changes

       function myFunction(x, t4) {
        if (x.matches) { // If media query matches

          t2.from(bling, 2, {y: -300})
          .to(bling, 2, {opacity: 0.2})
          .to(bling, 1, {opacity: 1})
          .to(bling, 2, {y: -300, opacity: 0.4})
          .to(bling, 1, {x: 200, opacity: 1})
          .to(bling, 2, {y: -150, opacity: 0.5})
          .to(bling, 5, {opacity: 0})
          .to(bling, 5, {opacity: 1})
          .to(bling, 2, {x: 0 ,y:0, opacity: .5})
          .to(bling, 6, {opacity: 0})
          .to(bling, 4, {y: -300, opacity: 1})
          .repeat(-1);

                } else {
         }
      }


////Media Query of less than 1080px for Bling
      var x = window.matchMedia("(max-width: 1080px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

      function myFunction(x, t4) {
       if (x.matches) { // If media query matches

         t2.from(bling, 2, {y: 300})
         .to(bling, 2, {opacity: 0.2})
         .to(bling, 1, {opacity: 1})
         .to(bling, 2, {y: 300, opacity: 0.4})
         .to(bling, 1, {x: 200, opacity: 1})
         .to(bling, 2, {y: -50, opacity: 0.5})
         .to(bling, 5, {opacity: 0})
         .to(bling, 5, {opacity: 1})
         .to(bling, 2, {x: 0 ,y:60, opacity: .5})
         .to(bling, 6, {opacity: 0})
         .to(bling, 4, {y: -300, opacity: 1})
         .repeat(-1);

               } else {
        }
     }




     ////Media Query of less than 1080px for Bling
           var x = window.matchMedia("(max-width: 910px)")
           myFunction(x) // Call listener function at run time
           x.addListener(myFunction) // Attach listener function on state changes

           function myFunction(x, t4) {
            if (x.matches) { // If media query matches

              t2.from(bling, 2, {y: 200})
              .to(bling, 2, {opacity: 0.2})
              .to(bling, 1, {opacity: 1})
              .to(bling, 2, {y: 200, opacity: 0.4})
              .to(bling, 1, {x: 190, opacity: 1})
              .to(bling, 2, {y: -70, opacity: 0.5})
              .to(bling, 5, {opacity: 0})
              .to(bling, 5, {opacity: 1})
              .to(bling, 2, {x: 0 ,y:60, opacity: .5})
              .to(bling, 6, {opacity: 0})
              .to(bling, 4, {y: 200, opacity: 1})
              .repeat(-1);

                    } else {
             }
          }




          ////Media Query of less than 1080px for Bling
                var x = window.matchMedia("(max-width: 743px)")
                myFunction(x) // Call listener function at run time
                x.addListener(myFunction) // Attach listener function on state changes

                function myFunction(x, t4) {
                 if (x.matches) { // If media query matches
                   gsap.set(bling, {top: "-400px"})
                   t2.from(bling, 2, {y: 100})
                   .to(bling, 2, {opacity: 0.2})
                   .to(bling, 1, {opacity: 1})
                   .to(bling, 2, {y: 200, opacity: 0.4})
                   .to(bling, 1, {x: 0, opacity: 1})
                   .to(bling, 2, {y: 0, opacity: 0.5})
                   .to(bling, 5, {opacity: 0})
                   .to(bling, 5, {opacity: 1})
                   .to(bling, 2, {x: 0 ,y: 160, opacity: .5})
                   .to(bling, 6, {opacity: 0})
                   .to(bling, 4, {y: 100, opacity: 1})
                   .repeat(-1);

                         } else {
                  }
               }























 });




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body
function openNav() {
  $('#mySidenav').css({'width':'250px'})
  $('#mySidenav').css({'height':'100vh'})

  $('#main').css({'marginLeft':'250px'})
  $('body').css({'backgroundColor':'rgba(0,0,0,0.4)'})



}

 Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white
function closeNav() {
  $('#mySidenav').css({'width':'0'})
  $('#main').css({'marginLeft':'0'})
  $('body').css({'backgroundColor':'white'})

}
*/
