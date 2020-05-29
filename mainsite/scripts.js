
  // this is a sript to get a hover and un-hover effect.
  // you need to reference this library first but afterwards the results should be flawless
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>

  // create variable for the div id you want to apply the effect to
  var el = document.getElementById('divID');

  // create a timeline for this element in paused state
  var tl = new TimelineMax({paused: true});

  // create your tween of the timeline in a variable
  tl
  .set(el,{willChange:"transform"})
  .to(el, 1, {transform:"rotate(60deg)", ease:Power1.easeInOut});

  // store the tween timeline in the javascript DOM node
  el.animation = tl;

  //create the event handler
  $(el).on("mouseenter",function(){
    //this.style.willChange = 'transform';
    this.animation.play();
  }).on("mouseleave",function(){
     //this.style.willChange = 'auto';
    this.animation.reverse();
  });
