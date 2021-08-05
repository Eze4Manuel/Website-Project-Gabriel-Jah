


$(document).ready(function(){


  $('#regcourse').on('click', () => {
    console.log('up up up');

    $('.popup').fadeOut(300, () => {
      $('.registerpage').fadeIn(500);
        $("html, body").animate({ scrollTop: 0 }, "slow");
       return false;
    })
  })
   //Form Select settings
  $('select').formSelect();



  //Dealing with price ranges
    $('.priceRange').slideUp(10);
    $('.buttons').fadeOut(10);


  $('.dropdown-content li > a, .dropdown-content li > span').click((e) => {

    $('.priceRange').slideDown(500, function(){
      $('.buttons').fadeIn(500);

    });

    let aa = e.target.innerHTML;
    let squire = document.getElementById("squire");
      if(squire.childElementCount != 0){
             for (var i = 0; i < 3; i++) {
               console.log(squire.firstElementChild);
              squire.firstElementChild.remove();
              }
       }
     for (var i = 0; i < collects.length; i++) {
        if(aa == collects[i].name){
          for (var j = 0; j < 3; j++) {
            let label = document.createElement('label');
             let span0 = document.createElement('span');
            var att = document.createAttribute("style");
            att.value = "color: #000";
            span0.setAttributeNode(att);
            span0.innerHTML = core[j];

            let input = document.createElement('input');
            var attr = document.createAttribute("type");
            attr.value = "radio";
            input.setAttributeNode(attr);
            var attr1 = document.createAttribute("value");
            attr1.value = core[j]+ '='+Object.values(collects[i])[j+1];
            input.setAttributeNode(attr1);
            var attr2 = document.createAttribute("id");
            attr2.value = 'choosen';
            input.setAttributeNode(attr2);
            var attr3 = document.createAttribute("name");
            attr3.value = 'group1';
            input.setAttributeNode(attr3);

            let span1 = document.createElement('span');
            let arr = Object.values(collects[i]);
            span1.innerHTML = 'N' + arr[j+1];
             label.appendChild(span0);
             label.appendChild(input);
             label.appendChild(span1);
               squire.appendChild(label);
          }
      }
    }
   });
  //Nicescroll settings
    $(function() {
        $("body").niceScroll({
          cursorborder: "none",
          cursorcolor: "#832a02"
        });

    });
    $(function() {
      $(".dropdown-content").niceScroll({
        cursorborder: "none",
        cursorcolor: "#555"
      })
    });
    //Nicescroll settings Ends

    //Image Animation
      let girl1 = $('.pic1'),
          girl2 = $('.pic2'),
          girl3 = $('.pic3'),
          girl4 = $('.pic4'),
          girl5 = $('.pic5'),
          girl6 = $('.pic6')
          gsap.set('.pic1, .pic2, .pic3, .pic4, .pic5, .pic6', {autoAlpha: 0})
        let tl = new TimelineLite({repeat: -1});
        let t2 = new TimelineLite({repeat: -1});

        tl.to(girl1, 1, {autoAlpha: 1})
          .to(girl1, 5, {autoAlpha: 1})
          .to(girl1, 1, {autoAlpha: 0})
          .to(girl3, 1, {autoAlpha: 1})
          .to(girl3, 5, {autoAlpha: 1})
          .to(girl3, 1, {autoAlpha: 0})
          .to(girl4, 1, {autoAlpha: 1})
          .to(girl4, 5, {autoAlpha: 1})
          .to(girl4, 1, {autoAlpha: 0});

          t2.to(girl2, 1, {autoAlpha: 1})
            .to(girl2, 5, {autoAlpha: 1})
            .to(girl2, 1, {autoAlpha: 0})
            .to(girl5, 1, {autoAlpha: 1})
            .to(girl5, 5, {autoAlpha: 1})
            .to(girl5, 1, {autoAlpha: 0})
            .to(girl6, 1, {autoAlpha: 1})
            .to(girl6, 5, {autoAlpha: 1})
            .to(girl6, 1, {autoAlpha: 0})
    //Image Animation Ends


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



});










var collects = [{
  name: "Graphics Design",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Compositing",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Cinematography",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Photography",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
{
  name: "2D Animation",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
{
  name: "3D Animation",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Sound Design",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Sound Engineering",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Music Production",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
{
  name: "Mixing and Mastering",
  standard: "0",
  intermediate: "0",
  professional: "50,000"
},
 {
  name: "Video Production",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
},
 {
  name: "Holograming",
  standard: "25,000",
  intermediate: "35,000",
  professional: "50,000"
}
];

var core = [ "Standard", "Intermediate", "Professional"];
