const navBtn = document.getElementById("nav-btn");
const navBtnMobile = document.getElementById("nav-btn-mobile");
const navbar = document.getElementById("navbar");
const navitemTitles = document.getElementsByClassName("navitem-title");

const map = document.getElementById("map");
const grid = document.getElementById("grid");
const gridCards = document.getElementsByClassName("grid-card");
const gridCardsArray = Array.from(gridCards);
const currencyButton = document.getElementById("currency-button");
const mapSwitch = document.getElementById("map-switch");
const gridSwitch = document.getElementById("grid-switch");
const currenciesContainer = document.getElementById("currencies");
const projectSidebar = document.getElementById("project-sidebar");
const mainContainer = document.getElementById("main-container");

const gridContainer = document.getElementById("grid-container");

const scriptsButton = document.querySelector("#scripts-button");
const scriptsPanel = document.querySelector("#scripts-panel");
const projectSidebarFilters = document.querySelector(
  ".project-sidebar-filters"
);

const filtersBtn = document.getElementById("filters-button");
const filtersWrapper = document.getElementById("filters-wrapper");
const statesBtn = document.getElementById("states-button");
const statesWrapper = document.getElementById("states-wrapper");
const emiratesBtn = document.getElementById("emirates-button");
const emiratesWrapper = document.getElementById("emirates-wrapper");
const developersBtn = document.getElementById("developers-button");
const developersWrapper = document.getElementById("developers-wrapper");

navBtn?.addEventListener("click", toggleNavbar);
navBtnMobile?.addEventListener("click", toggleNavbar);
currencyButton?.addEventListener("click", handleCurrencyChange);
mapSwitch?.addEventListener("click", handleMapswitch);
gridSwitch?.addEventListener("click", handleGridswitch);
map?.addEventListener("click", openProjectSidebar);
gridCardsArray?.forEach((item) =>
  item.addEventListener("click", openProjectSidebar)
);
scriptsButton?.addEventListener("click", toggleScriptsPanel);

filtersBtn?.addEventListener("click", toggleFilterWrapper);
statesBtn?.addEventListener("click", toggleStatesWrapper);
emiratesBtn?.addEventListener("click", toggleEmiratesWrapper);
developersBtn?.addEventListener("click", toggleDevelopersWrapper);

function toggleNavbar() {
  if (navbar.classList.contains("md:max-w-16")) {
    navbar.classList.remove("max-w-0", "md:max-w-16");
    navbar.classList.add("max-w-64", "md:max-w-52");
    navBtn.firstElementChild.setAttribute("name", "chevron-back");
    navBtnMobile.firstElementChild.setAttribute("name", "close-outline");
    setTimeout(() => {
      Array.from(navitemTitles).forEach((item) => {
        item.classList.remove("hidden");
      });
    }, 150);
  } else {
    navbar.classList.remove("max-w-64", "md:max-w-52");
    navbar.classList.add("max-w-0", "md:max-w-16");
    navBtn.firstElementChild.setAttribute("name", "reorder-three");
    navBtnMobile.firstElementChild.setAttribute("name", "reorder-three");
    Array.from(navitemTitles).forEach((item) => {
      item.classList.add("hidden");
    });
  }
}

function toggleFilterWrapper() {
  if (filtersWrapper.classList.contains("opacity-0")) {
    filtersWrapper.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    filtersWrapper.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    filtersWrapper.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    filtersWrapper.classList.add(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
  }
}

function toggleStatesWrapper() {
  if (statesWrapper.classList.contains("opacity-0")) {
    statesWrapper.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    statesWrapper.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    statesWrapper.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    statesWrapper.classList.add(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
  }
}

function toggleEmiratesWrapper() {
  if (emiratesWrapper.classList.contains("opacity-0")) {
    emiratesWrapper.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    emiratesWrapper.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    emiratesWrapper.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    emiratesWrapper.classList.add(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
  }
}

function toggleDevelopersWrapper() {
  if (developersWrapper.classList.contains("opacity-0")) {
    developersWrapper.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    developersWrapper.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    developersWrapper.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    developersWrapper.classList.add(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
  }
}

function handleCurrencyChange() {
  if (currenciesContainer.classList.contains("opacity-0")) {
    currenciesContainer.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    currenciesContainer.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    currenciesContainer.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    currenciesContainer.classList.add(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
  }
}

function handleMapswitch() {
  if (mapSwitch.classList.contains("bg-blue-500")) {
    return;
  } else {
    mapSwitch.classList.add("bg-blue-500", "shadow-sm");
    gridSwitch.classList.remove("bg-blue-500", "shadow-sm");
    mapSwitch.firstElementChild.classList.remove("text-gray-600");
    mapSwitch.firstElementChild.classList.add("text-white");
    gridSwitch.firstElementChild.classList.remove("text-white");
    gridSwitch.firstElementChild.classList.add("text-gray-600");
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
    gridSwitch.firstElementChild.classList.remove("text-gray-600");
    gridSwitch.firstElementChild.classList.add("text-white");
    mapSwitch.firstElementChild.classList.remove("text-white");
    mapSwitch.firstElementChild.classList.add("text-gray-600");
    if (grid.classList.contains("hidden")) {
      grid.classList.remove("hidden");
      map.classList.add("hidden");
    }
  }
}

function selectCurrency(element) {
  const selectedCurrency = element.querySelector(".currency");
  currencyButton.querySelector(".currency").innerHTML =
    selectedCurrency.innerHTML;
  // handleCurrencyChange();
  currenciesContainer.querySelectorAll(".currency").forEach((item) => {
    // if already selected
    if (selectedCurrency.innerHTML === item.innerHTML) {
      item.parentElement.classList.add("bg-blue-500");
      item.parentElement.classList.remove("bg-gray-200");
      item.classList.add("text-gray-100");
      item.classList.remove("text-gray-600");
    } else {
      item.parentElement.classList.add("bg-gray-200");
      item.parentElement.classList.remove("bg-blue-500");
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
      item.parentElement.classList.add("bg-blue-500");
      item.parentElement.classList.remove("bg-gray-200");
      item.classList.add("text-gray-100");
      item.classList.remove("text-gray-600");
    } else {
      item.parentElement.classList.add("bg-gray-200");
      item.parentElement.classList.remove("bg-blue-500");
      item.classList.add("text-gray-600");
      item.classList.remove("text-gray-100");
    }
  });
}
const mobileSearch = document.querySelector("#mobile-search");
const searchExpandBtn = document.querySelector("#search-expand-btn")
// mobileSearch.addEventListener("click", expandSearch);
searchExpandBtn.addEventListener("click", expandSearch);

function expandSearch() {
  if (mobileSearch.classList.contains("max-w-7")){
    searchExpandBtn.classList.add("hidden");
    mobileSearch.classList.remove("max-w-7");
    mobileSearch.classList.add("min-w-72");
    const input = mobileSearch.querySelector("input");
    input.classList.remove("opacity-0");
    input.focus()
    const submitBtn = mobileSearch.querySelector("button[type='submit']");
    const closeBtn = mobileSearch.querySelector("button[type='button']");
    submitBtn.classList.remove("hidden")
    submitBtn.classList.add("grid")
    closeBtn.classList.remove("hidden");
    closeBtn.classList.add("grid");
  } else {
    closeExpandSearch()
  }
}

function closeExpandSearch() {
  searchExpandBtn.classList.remove("hidden");
  mobileSearch.classList.remove("min-w-72");
  mobileSearch.classList.add("max-w-7");
  const input = mobileSearch.querySelector("input");
  input.classList.add("opacity-0");
  const submitBtn = mobileSearch.querySelector("button[type='submit']");
  submitBtn.classList.remove("grid")
  submitBtn.classList.add("hidden")
  const closeBtn = mobileSearch.querySelector("button[type='button']");
  closeBtn.classList.remove("grid");
  closeBtn.classList.add("hidden");
}

// Project Sidebar

function openProjectSidebar() {
  // checking only one class is enough
  if (projectSidebar.classList.contains("max-w-xs")) return;
  projectSidebar.classList.remove("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar.classList.add("max-w-xs", "lg:max-w-md", "opacity-100");
  // mainContainer.classList.add("hidden", "md:block");
  setTimeout(() => {
    gridContainer.classList.remove("md:grid-cols-2","lg:grid-cols-5");
    gridContainer.classList.add("md:grid-cols-1","lg:grid-cols-3");
  }, 150);
}

function closeProjectSidebar() {
  projectSidebar.classList.add("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar.classList.remove("max-w-xs", "lg:max-w-md", "opacity-100");
  // mainContainer.classList.remove("hidden", "md:block");
  setTimeout(() => {
    gridContainer.classList.add("md:grid-cols-2", "lg:grid-cols-5");
    gridContainer.classList.remove("md:grid-cols-1", "lg:grid-cols-3");
  }, 150);
}
//

function addToFavorites(element) {
  const heartIcon = element.querySelector("ion-icon");
  let att = heartIcon.getAttribute("name");
  if (att === "heart-outline") {
    heartIcon.setAttribute("name", "heart");
  } else {
    heartIcon.setAttribute("name", "heart-outline");
  }
}

// open script panel

function toggleScriptsPanel() {
  if (scriptsPanel.classList.contains("opacity-0")) {
    // btn style
    scriptsButton.classList.remove("bg-gray-200", "text-gray-600");
    scriptsButton.classList.add("bg-blue-500", "text-white");
    scriptsButton.firstElementChild.classList.remove("text-gray-600");
    scriptsButton.firstElementChild.classList.add("text-white");
    // panel style
    scriptsPanel.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
    scriptsPanel.classList.add(
      "opacity-100",
      "pointer-events-auto",
      "-translate-y-0"
    );
  } else {
    // btn style
    scriptsButton.classList.remove("bg-blue-500", "text-white");
    scriptsButton.classList.add("bg-gray-200", "text-gray-600");
    scriptsButton.firstElementChild.classList.remove("text-white");
    scriptsButton.firstElementChild.classList.add("text-gray-600");
    // panel style
    scriptsPanel.classList.remove(
      "opacity-100",
      "pointer-events-auto",
      "-translate-y-0"
    );
    scriptsPanel.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-4"
    );
  }
}

function toggleRightSidebar(element) {
  if (element.parentElement.classList.contains("max-w-0")) {
    element.parentElement.classList.remove("max-w-0", "md:max-w-72", "right-0", "md:right-4")
    element.parentElement.classList.add("max-w-72", "md:max-w-0", "right-4", "md:right-0")
  } else {
    element.parentElement.classList.remove("max-w-72", "md:max-w-0", "right-4", "md:right-0")
    element.parentElement.classList.add("max-w-0", "md:max-w-72", "right-0", "md:right-4")
  }
  element.firstElementChild.classList.toggle("rotate-180");
}

//
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    // If "Read Less" is clicked
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    // If "Read More" is clicked
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

const backScrollbtn = document.querySelector("#scroll-back-filter");
const forwardScrollbtn = document.querySelector("#scroll-forward-filter");

backScrollbtn?.addEventListener("click", () => {
  let container = projectSidebarFilters;
  container.scrollBy({
    left: -(container.scrollLeft + 100),
    behavior: "smooth",
  });
});
forwardScrollbtn?.addEventListener("click", () => {
  let container = projectSidebarFilters;
  container.scrollBy({ left: container.scrollLeft + 100, behavior: "smooth" });
});

// side-bar-filters
projectSidebarFilters?.addEventListener("scroll", () => {
  let container = projectSidebarFilters;
  if (container.scrollLeft === 0) {
    backScrollbtn.style.display = "none";
  } else {
    backScrollbtn.style.display = "flex";
  }
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    forwardScrollbtn.style.display = "none";
  } else {
    forwardScrollbtn.style.display = "flex";
  }
});

// selectProjectFilter

if (projectSidebarFilters) {
  Array.from(projectSidebarFilters.children).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.classList.add("text-white", "bg-gray-600");
      btn.classList.remove("text-gray-800", "bg-gray-100");
  
      Array.from(projectSidebarFilters.children)
        .filter((item) => item.innerHTML !== btn.innerHTML)
        .forEach((element) => {
          element.classList.add("text-gray-800", "bg-gray-100");
          element.classList.remove("text-white", "bg-gray-600");
        });
    });
  });
}

// Clicking outside close currenySelector
window.addEventListener("click", (e) => {
  // currency dropdwon
  if (
    !currencyButton?.contains(e.target) &&
    !currenciesContainer?.contains(e.target)
  ) {
    if (currenciesContainer?.classList.contains("opacity-100")) {
      handleCurrencyChange();
    }
  }

  // close filters container
  if (!filtersBtn?.contains(e.target) && !filtersWrapper?.contains(e.target)) {
    if (filtersWrapper?.classList.contains("opacity-100")) {
      toggleFilterWrapper();
    }
  }
  if (!statesBtn?.contains(e.target) && !statesWrapper?.contains(e.target)) {
    if (statesWrapper?.classList.contains("opacity-100")) {
      toggleStatesWrapper();
    }
  }
  if (!emiratesBtn?.contains(e.target) && !emiratesWrapper?.contains(e.target)) {
    if (emiratesWrapper?.classList.contains("opacity-100")) {
      toggleEmiratesWrapper();
    }
  }
  if (!developersBtn?.contains(e.target) && !developersWrapper?.contains(e.target)) {
    if (developersWrapper?.classList.contains("opacity-100")) {
      toggleDevelopersWrapper();
    }
  }

  // close scripts panel
  // if (!scriptsButton.contains(e.target) && !scriptsPanel.contains(e.target)) {
  //   if (scriptsPanel.classList.contains("opacity-100")) {
  //     toggleScriptsPanel()
  //   }
  // }
});

// Image Slider

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
  });
});

$(document).ready(function () {
  $(".scripts-slider").slick({
    dots: true,
    autoplay: false,
    adaptiveHeight: true,
    prevArrow:
      '<button class="z-10 absolute right-12 bottom-2 bg-blue-200 rounded-full size-6 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-back"></ion-icon></button>',
    nextArrow:
      '<button class="z-10 absolute right-4 bottom-2 bg-blue-200 rounded-full size-6 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-forward"></ion-icon></button>',
  });
});
