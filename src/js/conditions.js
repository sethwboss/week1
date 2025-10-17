import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, activityListTemplate, visitorCenterTemplate } from "./templates.mjs";
import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/conditions.css";





function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
  const centersContainer = document.querySelector(".visitor ul");
  const html = centers.map(visitorCenterTemplate);
  centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  const html = activityListTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}


async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();



setVisitorCenters()






