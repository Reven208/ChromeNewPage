
  
  
  function Search() {
      var URL = document.getElementById("SCH").value.toString();
      if (URL == "") {
          alert("Introduce Algo!")
          return
      }
  
      if (URL.toString().startsWith("https://") || URL.toString().startsWith("http://")) {
          window.open(URL);
      }
      else {
          window.open("https://www.google.com/search?q=" + URL)
      }
  }
  const element = document.querySelector(".GoogleInput");

  element.addEventListener("keypress", function(e){
    if (e.keyCode == 13) {
      Search();

  }
  })