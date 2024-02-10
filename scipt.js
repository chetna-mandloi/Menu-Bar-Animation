var menu = document.querySelector(".nav i")
var close = document.querySelector(".full i")

var tl = gsap.timeline({paused:true})

tl.to(".full",{
   right:0,
   duration:2,

})
tl.from(".full h4",{
   duration:1,
   x:400,
   stagger:0.3,
   opacity:0

   // x:"30%",
   // opacity:0,
   // stagger:0.3,
})
tl.pause()

menu.addEventListener("click",function(){
   tl.play()
})

close.addEventListener("click",function(){
   
   tl.reverse();
})


