const parentElement = document.getElementById("wrapper");


parentElement.addEventListener("click", function(event) {
  
  if (event.target.classList.contains("button")) {
    const buttons = parentElement.querySelectorAll(".button");
    
    buttons.forEach(function(button) {
      
      if (button.classList.contains("active")) {
        
        button.classList.remove("active");
      }
    });

    event.target.classList.add("active");
  } else {
    const buttons = parentElement.querySelectorAll(".button");
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });
  }
});



