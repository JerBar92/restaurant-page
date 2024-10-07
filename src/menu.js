export function menu() {
  const page = document.querySelector("#content");
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  page.innerHTML = "";

  page?.appendChild(menuTitle);
}
