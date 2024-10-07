export function homePage() {
  const page = document.querySelector("#content");
  page.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "House of Rice";
  const divPresentation = document.createElement("div");
  divPresentation.setAttribute("id", "presentation");
  const presentation = document.createElement("p");
  presentation.textContent = "Nothing better tan a bowl full of rice";
  divPresentation.appendChild(presentation);

  page?.appendChild(title);
  page?.appendChild(divPresentation);
}
