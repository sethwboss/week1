import { getParkData, parkInfoLinks, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";






async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}

init();











function setIntro(data) {
  const introSection = document.querySelector("#intro")
  introSection.innerHTML = `<h1>${data.fullName}</h1> 
  <p>${data.description}</p>`;
}





function setParkInfoLinks(data) {
  const infoEl = document.querySelector("#info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}













