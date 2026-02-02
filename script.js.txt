function goNext(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function showLetter(){
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("photos").classList.add("hidden");
}

function showPhotos(){
  document.getElementById("photos").classList.remove("hidden");
  document.getElementById("letter").classList.add("hidden");
}
