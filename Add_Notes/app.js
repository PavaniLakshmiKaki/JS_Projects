"use strict";

const bt = document.querySelector(".but-class");

bt.addEventListener("click", function () {
  const titleName = prompt("Enter title");
  const desc = prompt("Enter Description of notes");
  const para = document.createElement("p");
  const heading = document.createElement("h3");
  const content = document.createElement("p");
  heading.textContent = titleName;
  content.textContent = desc;
  document.body.appendChild(para);
  para.appendChild(heading);
  para.appendChild(content);
  para.classList.add("notes");
});
