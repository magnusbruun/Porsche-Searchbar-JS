var carBrands = ["911", "Carrera", "Panemera", "Targa", "GT3", "Taycan", "Cayenne"]
      
var searchInput = document.getElementById("searchInput");
var results = document.getElementById("results");

searchInput.addEventListener("keyup", function() {
  var searchValue = searchInput.value.toLowerCase();
  results.innerHTML = "";
  
  for (var i = 0; i < carBrands.length; i++) {
    if (carBrands[i].toLowerCase().includes(searchValue)) {
      results.innerHTML += "<li>" + carBrands[i] + "</li>";
    }
  }
});