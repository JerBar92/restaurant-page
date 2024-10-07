export function about() {
  const page = document.querySelector("#content");
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About";

  page.innerHTML = "";

  page?.appendChild(aboutTitle);
}
