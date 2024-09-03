const navBtn = document.getElementById("nav-btn")
const navbar = document.getElementById("navbar")
const navitemTitles = document.getElementsByClassName("navitem-title")

const map = document.getElementById("map");
const grid = document.getElementById("grid");
const gridCards = document.getElementsByClassName("grid-card");
const gridCardsArray = Array.from(gridCards);
const currencyButton = document.getElementById("currency-button");
const mapSwitch = document.getElementById("map-switch");
const gridSwitch = document.getElementById("grid-switch");
const currenciesContainer = document.getElementById("currencies");
const projectSidebar = document.getElementById("project-sidebar");
const mainContainer = document.getElementById("main-container")

const gridContainer = document.getElementById("grid-container")

navBtn.addEventListener("click", toggleNavbar)
currencyButton.addEventListener("click", handleCurrencyChange);
mapSwitch.addEventListener("click", handleMapswitch);
gridSwitch.addEventListener("click", handleGridswitch);
map.addEventListener("click", openProjectSidebar);
gridCardsArray.forEach((item) =>
  item.addEventListener("click", openProjectSidebar)
);

function toggleNavbar () {
  if (navbar.classList.contains("max-w-16")) {
    navbar.classList.remove("max-w-16")
    navbar.classList.add("max-w-52")
    navBtn.firstElementChild.setAttribute("name", "chevron-back")
    setTimeout(()=> {
      Array.from(navitemTitles).forEach(item=> {
        item.classList.remove("hidden")
      })
    }, 150)
  } else {
    navbar.classList.remove("max-w-52")
    navbar.classList.add("max-w-16")
    navBtn.firstElementChild.setAttribute("name", "reorder-three")
    Array.from(navitemTitles).forEach(item=> {
      item.classList.add("hidden")
    })
  }
}

function handleCurrencyChange() {
  if (currenciesContainer.classList.contains("scale-0")) {
    currenciesContainer.classList.remove("scale-0", "opacity-0");
    currenciesContainer.classList.add("scale-100", "opacity-100");
  } else {
    currenciesContainer.classList.remove("scale-100", "opacity-100");
    currenciesContainer.classList.add("scale-0", "opacity-0");
  }
}

function handleMapswitch() {
  if (mapSwitch.classList.contains("bg-blue-500")) {
    return;
  } else {
    mapSwitch.classList.add("bg-blue-500", "shadow-sm");
    gridSwitch.classList.remove("bg-blue-500", "shadow-sm");
    mapSwitch.firstElementChild.classList.remove("text-gray-600")
    mapSwitch.firstElementChild.classList.add("text-white")
    gridSwitch.firstElementChild.classList.remove("text-white")
    gridSwitch.firstElementChild.classList.add("text-gray-600")
    if (map.classList.contains("hidden")) {
      map.classList.remove("hidden");
      grid.classList.add("hidden");
    }
  }
}

function handleGridswitch() {
  if (gridSwitch.classList.contains("bg-blue-500")) {
    return;
  } else {
    gridSwitch.classList.add("bg-blue-500", "shadow-sm");
    mapSwitch.classList.remove("bg-blue-500", "shadow-sm");
    gridSwitch.firstElementChild.classList.remove("text-gray-600")
    gridSwitch.firstElementChild.classList.add("text-white")
    mapSwitch.firstElementChild.classList.remove("text-white")
    mapSwitch.firstElementChild.classList.add("text-gray-600")
    if (grid.classList.contains("hidden")) {
      grid.classList.remove("hidden");
      map.classList.add("hidden");
    }
  }
}

// Clicking outside close currenySelector
window.addEventListener("click", (e) => {
  // currency dropdwon close
  if (currencyButton.contains(e.target)) return;
  if (!currenciesContainer.contains(e.target)) {
    if (currenciesContainer.classList.contains("scale-100")) {
      handleCurrencyChange();
    }
  }
});

function selectCurrency(element) {
  const selectedCurrency = element.querySelector(".currency");
  currencyButton.querySelector(".currency").innerHTML =
    selectedCurrency.innerHTML;
  // handleCurrencyChange();
  currenciesContainer.querySelectorAll(".currency").forEach((item) => {
    // if already selected
    if (selectedCurrency.innerHTML === item.innerHTML) {
      item.parentElement.classList.add("bg-gray-600");
      item.parentElement.classList.remove("bg-gray-200");
      item.classList.add("text-gray-100");
      item.classList.remove("text-gray-600");
    } else {
      item.parentElement.classList.add("bg-gray-200");
      item.parentElement.classList.remove("bg-gray-600");
      item.classList.add("text-gray-600");
      item.classList.remove("text-gray-100");
    }
  });
}

function selectMeasure(element) {
  const selectedMeasure = element.querySelector(".measure");
  currencyButton.querySelector(".measure").innerHTML =
    selectedMeasure.innerHTML;
  // handleCurrencyChange();
  currenciesContainer.querySelectorAll(".measure").forEach((item) => {
    // if already selected
    if (selectedMeasure.innerHTML === item.innerHTML) {
      item.parentElement.classList.add("bg-gray-600");
      item.parentElement.classList.remove("bg-gray-200");
      item.classList.add("text-gray-100");
      item.classList.remove("text-gray-600");
    } else {
      item.parentElement.classList.add("bg-gray-200");
      item.parentElement.classList.remove("bg-gray-600");
      item.classList.add("text-gray-600");
      item.classList.remove("text-gray-100");
    }
  });
}

// Project Sidebar

function openProjectSidebar() {
  // checking only one class is enough
  if (projectSidebar.classList.contains("max-w-xs")) return;
  projectSidebar.classList.remove("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar.classList.add("max-w-xs", "lg:max-w-md", "opacity-100");
  mainContainer.classList.add("hidden", "md:block")
  gridContainer.classList.remove("lg:grid-cols-4")
  gridContainer.classList.add("lg:grid-cols-2")
}

function closeProjectSidebar() {
  projectSidebar.classList.add("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar.classList.remove("max-w-xs", "lg:max-w-md", "opacity-100");
  mainContainer.classList.remove("hidden", "md:block")
  gridContainer.classList.add("lg:grid-cols-4")
  gridContainer.classList.remove("lg:grid-cols-2")
}
// 

function addToFavorites(element) {
  const hearIcon = element.querySelector("ion-icon")
  let att = hearIcon.getAttribute("name")
  if (att === "heart-outline") {
    hearIcon.setAttribute("name", "heart")
  } else {
    hearIcon.setAttribute("name", "heart-outline")
  }
}

// Image Slider

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
  });
});
