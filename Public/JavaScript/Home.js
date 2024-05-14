const scroller = document.querySelectorAll(".testimonial-list");
const scroller2 = document.querySelectorAll(".owl-carousel");

function addAnimation(){
scroller.forEach((scroller)=>{
    scroller.setAttribute("data-animated", true);
   const scrollerinner = scroller.querySelectorAll("a");
   const scrollerarry = Array.from(scrollerinner);
//    console.log(scrollerarry);
   scrollerarry.forEach(item =>{
    const dublicateitem = item.cloneNode(true);
    dublicateitem.setAttribute('aria-hidden', true);
    scroller.appendChild(dublicateitem)
   })
})
}

function addAnimation2(){
   scroller2.forEach((scroller2)=>{
       scroller2.setAttribute("data-animated", true);
      const scrollerinner = scroller2.querySelectorAll("li");
      const scrollerarry = Array.from(scrollerinner);
   //    console.log(scrollerarry);
      scrollerarry.forEach(item =>{
       const dublicateitem = item.cloneNode(true);
       dublicateitem.setAttribute('aria-hidden', true);
       scroller2.appendChild(dublicateitem)
      })
   })
   }
   function toggleMenu() {
      var menu = document.querySelector('.nav-menu1');
      menu.classList.toggle('open');
  }
  toggleMenu();
addAnimation();
addAnimation2();
