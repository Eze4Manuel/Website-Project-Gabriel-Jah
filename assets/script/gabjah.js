$(document).ready(() => {


  //Nicescroll settings
  $(function() {
      $("body").niceScroll({
        cursorborder: "none",
        cursorcolor: "#7c3018"
      });
  });

//Setting up the listen audio button
    $('.listen').click((e) => {
       let de = '.aud' + e.target.id;
      $('.audio').css({'display':'none'});
      $(de).css({'display':'block'});

    })

//Setting up the download link
    $('.Download').click((e) => {
      let de = '.au' + e.target.id;
     $('.audio').css({'display':'none'});
     $(de).css({'display':'block'});
    })


})
