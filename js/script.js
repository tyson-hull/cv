var i = 0;
function animateProgressBars() {
  if (i == 0) {
    i = 1;
    var elems = document.getElementsByClassName("myBars");
    var maxBarWidth = document.getElementsByClassName("maxBarWidth");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame () {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        for (let index=0; index < elems.length; index++){
          if (width <= parseFloat(maxBarWidth[index].style.width)){
            elems[index].style.width = width + "%"
          }else
          {
            elems[index].style.width = maxBarWidth[index].style.width;
          } 
            
        }
        
      }
    }
  }
}
animateProgressBars();