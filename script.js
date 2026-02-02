function goNext(){
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  let music = document.getElementById("bgm");
  if(music) music.play();
}

let text = "You make my world brighter every day 💖 I’m so lucky to have you.";
let i = 0;

function showLetter(){
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("photos").classList.add("hidden");

  i = 0;
  document.getElementById("loveText").innerHTML = "";

  let typing = setInterval(() => {
    document.getElementById("loveText").innerHTML += text[i];
    i++;
    if(i >= text.length) clearInterval(typing);
  }, 50);
}

function showPhotos(){
  document.getElementById("photos").classList.remove("hidden");
  document.getElementById("letter").classList.add("hidden");
}
