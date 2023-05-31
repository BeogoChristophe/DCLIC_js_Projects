var modal = document.getElementById("myModal");
    var btnOpen = document.getElementById("openModal");
    var spanClose = document.getElementsByClassName("close")[0];
    
    btnOpen.addEventListener("click", function () {
      modal.style.display = "block";
    });
    
    spanClose.addEventListener("click", function () {
      modal.style.display = "none";
    });
    
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });