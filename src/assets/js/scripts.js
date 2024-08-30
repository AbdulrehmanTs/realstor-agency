const map = document.getElementById("map");
const grid = document.getElementById("grid");
const gridCards = document.getElementsByClassName("grid-card");
const gridCardsArray = Array.from(gridCards);
const currencyButton = document.getElementById("currency-button");
const mapSwitch = document.getElementById("map-switch");
const gridSwitch = document.getElementById("grid-switch");
const currenciesContainer = document.getElementById("currencies");
const leftSidebar = document.getElementById("left-sidebar");
const mainContainer = document.getElementById("main-container")

currencyButton.addEventListener("click", handleCurrencyChange);
mapSwitch.addEventListener("click", handleMapswitch);
gridSwitch.addEventListener("click", handleGridswitch);
map.addEventListener("click", openLeftSidebar);
gridCardsArray.forEach((item) =>
  item.addEventListener("click", openLeftSidebar)
);

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
  if (mapSwitch.classList.contains("bg-gray-200")) {
    return;
  } else {
    mapSwitch.classList.add("bg-gray-200", "shadow-sm");
    gridSwitch.classList.remove("bg-gray-200", "shadow-sm");
    if (map.classList.contains("hidden")) {
      map.classList.remove("hidden");
      grid.classList.add("hidden");
    }
  }
}
function handleGridswitch() {
  if (gridSwitch.classList.contains("bg-gray-200")) {
    return;
  } else {
    gridSwitch.classList.add("bg-gray-200", "shadow-sm");
    mapSwitch.classList.remove("bg-gray-200", "shadow-sm");
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


function openLeftSidebar() {
  // checking only one class is enough
  if (leftSidebar.classList.contains("max-w-xs")) return;
  leftSidebar.classList.remove("max-w-0", "lg:max-w-0", "opacity-0");
  leftSidebar.classList.add("max-w-xs", "lg:max-w-md", "opacity-100");
  mainContainer.classList.add("hidden", "md:block")

}

function closeLeftSidebar() {
  leftSidebar.classList.add("max-w-0", "lg:max-w-0", "opacity-0");
  leftSidebar.classList.remove("max-w-xs", "lg:max-w-md", "opacity-100");
  mainContainer.classList.remove("hidden", "md:block")
}

// Image Slider

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
  });
});
