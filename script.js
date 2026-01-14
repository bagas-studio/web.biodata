document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("imgZoom");
  var span = document.getElementsByClassName("close")[0];

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  span.onclick = function() { 
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});