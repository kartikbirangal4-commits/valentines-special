function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = ["💖","💘","💝","💕"][Math.floor(Math.random()*4)];

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (30 + Math.random()*60) + "px";
  h.style.animationDuration = (5 + Math.random()*6) + "s";

  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 10000);
}

setInterval(createHeart, 300);
