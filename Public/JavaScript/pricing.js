const scroller = document.querySelectorAll(".testimonial-list");
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
    function toggleMenu() {
      var menu = document.querySelector('.nav-menu1');
      menu.classList.toggle('open');
  }
  toggleMenu();
    addAnimation();