// Add your code here
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("section");
  container.className = "container";

  const h1 = document.createElement("h1");
  h1.textContent = "01 - Hello";
  h1.style.textAlign = "center";
  container.appendChild(h1);

  const img = document.createElement("img");
  img.src = "IMG_0547.JPG";
  img.alt = "Yuki Yamada's photo";
  img.className = "img";
  img.style.display = "block";
  img.style.margin = "0 auto";
  img.style.borderRadius = "50%";
  img.style.width = "180px";
  img.style.height = "180px";
  container.appendChild(img);

  const bio = document.createElement("p");
  bio.textContent = `My name is Yuki Yamada.I'm a senior. I like to play soccer and video games in my free time. This term I'm taking 4 classes, so I'm exhausted every day. Nice to meet you guys.`;
  bio.className = "bio";
  bio.style.margin = "20px auto";
  bio.style.width = "300px";
  container.appendChild(bio);

  const main = document.querySelector("main");
  main.appendChild(container);

  const firstSentence = document.createElement("span");
  firstSentence.textContent = bio.textContent.split(".")[0] + ".";
  firstSentence.style.fontWeight = "bold";
  bio.textContent = bio.textContent.replace(firstSentence.textContent, "");
  bio.prepend(firstSentence);
});
