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
const moreFiltersBtn = document.getElementById("more-filters-button");
const moreFiltersWrapper = document.getElementById("more-filters-wrapper");

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
moreFiltersBtn?.addEventListener("click", toggleMoreFilterWrapper);

function toggleNavbar() {
  if (navbar.classList.contains("lg:w-16")) {
    navbar.classList.remove("w-0", "lg:w-16");
    navbar.classList.add("w-64", "lg:w-72");
    navbar.firstElementChild.classList.remove("rounded-full");
    navbar.firstElementChild.classList.add("lg:rounded-3xl");
    navBtn.firstElementChild.setAttribute("name", "chevron-back");
    navBtnMobile.firstElementChild.setAttribute("name", "close-outline");
    setTimeout(() => {
      document.querySelector(".brand-name").style.display = "block";
      Array.from(navitemTitles).forEach((item) => {
        item.classList.remove("hidden");
      });
    }, 150);
  } else {
    navbar.classList.remove("w-64", "lg:w-72");
    navbar.classList.add("w-0", "lg:w-16");
    navBtn.firstElementChild.setAttribute("name", "chevron-forward");
    navBtnMobile.firstElementChild.setAttribute("name", "reorder-three");
    Array.from(navitemTitles).forEach((item) => {
      item.classList.add("hidden");
    });
    setTimeout(() => {
      document.querySelector(".brand-name").style.display = "none";
      navbar.firstElementChild.classList.remove("lg:rounded-3xl");
      navbar.firstElementChild.classList.add("rounded-full");
    }, 100);
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

function toggleMoreFilterWrapper() {
  if (moreFiltersWrapper.classList.contains("opacity-0")) {
    moreFiltersWrapper.classList.remove(
      "-translate-y-2",
      "opacity-0",
      "pointer-events-none"
    );
    moreFiltersWrapper.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    moreFiltersWrapper.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto"
    );
    moreFiltersWrapper.classList.add(
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
    mapSwitch.querySelector("ion-icon").classList.remove("text-gray-600");
    mapSwitch.querySelector("ion-icon").classList.add("text-white");
    gridSwitch.firstElementChild.classList.remove("text-white");
    gridSwitch.firstElementChild.classList.add("text-gray-600");
    gridSwitch.querySelector("ion-icon").classList.remove("text-white");
    gridSwitch.querySelector("ion-icon").classList.add("text-gray-600");
    if (!grid.classList.contains("hidden")) {
      // map.classList.remove("hidden");
      grid.classList.add("hidden");
    }
  }
}

function handleGridswitch() {
  if (gridSwitch.classList.contains("bg-blue-500")) {
    return;
  } else {
    mapSwitch.classList.remove("bg-blue-500", "shadow-sm");
    gridSwitch.classList.add("bg-blue-500", "shadow-sm");
    gridSwitch.firstElementChild.classList.remove("text-gray-600");
    gridSwitch.firstElementChild.classList.add("text-white");
    gridSwitch.querySelector("ion-icon").classList.remove("text-gray-600");
    gridSwitch.querySelector("ion-icon").classList.add("text-white");
    mapSwitch.firstElementChild.classList.remove("text-white");
    mapSwitch.firstElementChild.classList.add("text-gray-600");
    mapSwitch.querySelector("ion-icon").classList.remove("text-white");
    mapSwitch.querySelector("ion-icon").classList.add("text-gray-600");
    if (grid.classList.contains("hidden")) {
      grid.classList.remove("hidden");
      // map.classList.add("hidden");
    }
  }
}

function selectCurrency(element) {
  const selectedCurrency = element.value;
  currencyButton.querySelector(".currency").innerHTML = selectedCurrency;
}

function selectMeasure(element) {
  const selectedMeasure = element.innerHTML;
  currencyButton.querySelector(".measure").innerHTML =
    selectedMeasure;
    const ftBtn = document.getElementById("ft-btn")
    const mBtn = document.getElementById("m-btn")
    console.log(selectedMeasure === ftBtn.innerHTML);
    if (selectedMeasure === ftBtn.innerHTML) {
      ftBtn.classList.remove("bg-white", "text-gray-700", "border" ,"border-gray-300","hover:bg-gray-50")
      ftBtn.classList.add("bg-blue-100", "text-blue-700","hover:bg-blue-200")
      mBtn.classList.remove("bg-blue-100", "text-blue-700","hover:bg-blue-200")
      mBtn.classList.add("bg-white", "text-gray-700", "border" ,"border-gray-300","hover:bg-gray-50")
    } else {
      mBtn.classList.remove("bg-white", "text-gray-700", "border" ,"border-gray-300","hover:bg-gray-50")
      mBtn.classList.add("bg-blue-100", "text-blue-700","hover:bg-blue-200")
      ftBtn.classList.remove("bg-blue-100", "text-blue-700","hover:bg-blue-200")
      ftBtn.classList.add("bg-white", "text-gray-700", "border" ,"border-gray-300","hover:bg-gray-50")
    }
}
const mobileSearch = document.querySelector("#mobile-search");
const searchExpandBtn = document.querySelector("#search-expand-btn");
// mobileSearch.addEventListener("click", expandSearch);
searchExpandBtn.addEventListener("click", expandSearch);

function expandSearch() {
  if (mobileSearch.classList.contains("max-w-7")) {
    searchExpandBtn.classList.add("hidden");
    mobileSearch.classList.remove("max-w-7");
    mobileSearch.classList.add("min-w-64");
    const input = mobileSearch.querySelector("input");
    input.classList.remove("opacity-0");
    input.focus();
    const submitBtn = mobileSearch.querySelector("button[type='submit']");
    const closeBtn = mobileSearch.querySelector("button[type='button']");
    submitBtn.classList.remove("hidden");
    submitBtn.classList.add("grid");
    closeBtn.classList.remove("hidden");
    closeBtn.classList.add("grid");
  } else {
    closeExpandSearch();
  }
}

function closeExpandSearch() {
  searchExpandBtn.classList.remove("hidden");
  mobileSearch.classList.remove("min-w-64");
  mobileSearch.classList.add("max-w-7");
  const input = mobileSearch.querySelector("input");
  input.classList.add("opacity-0");
  const submitBtn = mobileSearch.querySelector("button[type='submit']");
  submitBtn.classList.remove("grid");
  submitBtn.classList.add("hidden");
  const closeBtn = mobileSearch.querySelector("button[type='button']");
  closeBtn.classList.remove("grid");
  closeBtn.classList.add("hidden");
}

// Project Sidebar

function openProjectSidebar() {
  // checking only one class is enough
  if (projectSidebar?.classList?.contains("max-w-xs")) return;
  projectSidebar?.classList.remove("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar?.classList.add("max-w-xs", "lg:max-w-md", "opacity-100");

  // mainContainer.classList.add("hidden", "lg:block");
  setTimeout(() => {
    gridContainer?.classList.remove("lg:grid-cols-4");
    gridContainer?.classList.add("lg:grid-cols-3");
  }, 150);
}

function closeProjectSidebar() {
  projectSidebar?.classList.add("max-w-0", "lg:max-w-0", "opacity-0");
  projectSidebar?.classList.remove("max-w-xs", "lg:max-w-md", "opacity-100");
  // mainContainer.classList.remove("hidden", "lg:block");
  setTimeout(() => {
    gridContainer?.classList.add("lg:grid-cols-4");
    gridContainer?.classList.remove("lg:grid-cols-3");
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
    element.parentElement.classList.remove(
      "max-w-0",
      "lg:max-w-72",
      "right-0",
      "lg:right-4"
    );
    element.parentElement.classList.add(
      "max-w-72",
      "lg:max-w-0",
      "right-4",
      "lg:right-0"
    );
  } else {
    element.parentElement.classList.remove(
      "max-w-72",
      "lg:max-w-0",
      "right-4",
      "lg:right-0"
    );
    element.parentElement.classList.add(
      "max-w-0",
      "lg:max-w-72",
      "right-0",
      "lg:right-4"
    );
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
      btn.classList.remove("text-gray-800", "bg-gray-100/40");
      btn.classList.add("text-white", "bg-gray-600/40");

      Array.from(projectSidebarFilters.children)
        .filter((item) => item.innerHTML !== btn.innerHTML)
        .forEach((element) => {
          element.classList.remove("text-white", "bg-gray-600/40");
          element.classList.add("text-gray-800", "bg-gray-100/40");
        });
    });
  });
}

// list-view-n-map-view
const listViewBtn = document.getElementById("list-view");
const mapViewBtn = document.getElementById("map-view");
const listViewContainer = document.getElementById("list-view-container");
const mapViewContainer = document.getElementById("map-view-container");

listViewBtn?.addEventListener("click", (e) => {
  if (listViewBtn.classList.contains("bg-white")) {
    return;
  } else {
    // btn style
    mapViewBtn.classList.remove("bg-white");
    mapViewBtn.firstElementChild.classList.remove("text-gray-800");
    mapViewBtn.firstElementChild.classList.add("text-gray-500");
    //
    listViewBtn.classList.add("bg-white");
    listViewBtn.firstElementChild.classList.remove("text-gray-500");
    listViewBtn.firstElementChild.classList.add("text-gray-800");
    // container style
    listViewContainer.classList.remove("hidden");
    mapViewContainer.classList.add("hidden");
  }
});

mapViewBtn?.addEventListener("click", (e) => {
  if (mapViewBtn.classList.contains("bg-white")) {
    return;
  } else {
    // btn style
    listViewBtn.classList.remove("bg-white");
    listViewBtn.firstElementChild.classList.remove("text-gray-800");
    listViewBtn.firstElementChild.classList.add("text-gray-500");
    //
    mapViewBtn.classList.add("bg-white");
    mapViewBtn.firstElementChild.classList.remove("text-gray-500");
    mapViewBtn.firstElementChild.classList.add("text-gray-800");
    // container style
    mapViewContainer.classList.remove("hidden");
    listViewContainer.classList.add("hidden");
  }
});

// my-scripts-n-managers-scripts
const myScriptsBtn = document.getElementById("my-scripts-btn");
const managersScriptBtn = document.getElementById("managers-scripts-btn");
const myScriptsPanel = document.getElementById("my-scripts-panel");
const managersScriptsPanel = document.getElementById("managers-scripts-panel");

myScriptsBtn?.addEventListener("click", (e) => {
  if (myScriptsBtn.classList.contains("bg-white")) {
    return;
  } else {
    // btn style
    managersScriptBtn.classList.remove("bg-white");
    managersScriptBtn.firstElementChild.classList.remove("text-gray-800");
    managersScriptBtn.firstElementChild.classList.add("text-gray-500");
    //
    myScriptsBtn.classList.add("bg-white");
    myScriptsBtn.firstElementChild.classList.remove("text-gray-500");
    myScriptsBtn.firstElementChild.classList.add("text-gray-800");
    // container style
    myScriptsPanel.classList.remove("hidden");
    managersScriptsPanel.classList.add("hidden");
  }
});

managersScriptBtn?.addEventListener("click", (e) => {
  if (managersScriptBtn.classList.contains("bg-white")) {
    return;
  } else {
    // btn style
    myScriptsBtn.classList.remove("bg-white");
    myScriptsBtn.firstElementChild.classList.remove("text-gray-800");
    myScriptsBtn.firstElementChild.classList.add("text-gray-500");
    //
    managersScriptBtn.classList.add("bg-white");
    managersScriptBtn.firstElementChild.classList.remove("text-gray-500");
    managersScriptBtn.firstElementChild.classList.add("text-gray-800");
    // container style
    managersScriptsPanel.classList.remove("hidden");
    myScriptsPanel.classList.add("hidden");
  }
});

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
  if (
    !emiratesBtn?.contains(e.target) &&
    !emiratesWrapper?.contains(e.target)
  ) {
    if (emiratesWrapper?.classList.contains("opacity-100")) {
      toggleEmiratesWrapper();
    }
  }
  if (
    !developersBtn?.contains(e.target) &&
    !developersWrapper?.contains(e.target)
  ) {
    if (developersWrapper?.classList.contains("opacity-100")) {
      toggleDevelopersWrapper();
    }
  }
  if (
    !moreFiltersBtn?.contains(e.target) &&
    !moreFiltersWrapper?.contains(e.target)
  ) {
    if (moreFiltersWrapper?.classList.contains("opacity-100")) {
      toggleMoreFilterWrapper();
    }
  }

  // close scripts panel
  // if (!scriptsButton.contains(e.target) && !scriptsPanel.contains(e.target)) {
  //   if (scriptsPanel.classList.contains("opacity-100")) {
  //     toggleScriptsPanel()
  //   }
  // }

  if (
    developerInput &&
    !developerInput.contains(e.target) &&
    !developerList.contains(e.target)
  ) {
    closeDeveloperList();
  }
});

const developers = [
  "Developer 1",
  "Developer 2",
  "Developer 3",
  "Developer 4",
  "Developer 5",
  "Developer 6",
  "Developer 7",
  "Developer 8",
  "Developer 9",
  "Developer 10",
  "Developer 11",
  "Developer 12",
  "Developer 13",
  "Developer 14",
  "Developer 15",
  "Developer 16",
];

const developerInput = document.getElementById("developer-name");
const developerList = document.getElementById("developer-names-list");
const formsList = document.getElementById("forms-list");

function populateDeveloperList(list) {
  if (developerList) {
    developerList.innerHTML = "";
    list?.forEach((developer) => {
      const li = document.createElement("li");
      li.className = "hover:bg-gray-100 rounded p-2 cursor-pointer";
      const p = document.createElement("p");
      p.textContent = developer;
      li.appendChild(p);
      li.addEventListener("click", () => selectDeveloper(developer));
      developerList.appendChild(li);
    });
  }
}
populateDeveloperList(developers);

developerInput?.addEventListener("focus", openDeveloperList);

function openDeveloperList() {
  developerList.style.display = "block";
}
function closeDeveloperList() {
  developerList.style.display = "none";
}
function selectDeveloper(developer) {
  developerInput.value = developer;
  closeDeveloperList();
}

developerInput?.addEventListener("input", handleDeveloperSearch);

function handleDeveloperSearch(e) {
  let filteredDevelopers = developers.filter((developer) =>
    developer.toLowerCase().includes(e.target.value.toLowerCase())
  );
  populateDeveloperList(filteredDevelopers);
}

const formSteps = document.getElementById("form-steps");
const stepsProgress = document.getElementById("steps-progress");

if (formsList?.children) {
  Array.from(formsList?.children)?.forEach((form, index) => {
    if (index > 0) {
      form.style.display = "none";
    }
  });
}

function nextStep(stepNumber) {
  const percentageMap = {
    1: 25,
    2: 50,
    3: 75,
    4: 100,
  };
  Array.from(formSteps?.children)?.forEach((item, index) => {
    if (stepNumber === index + 1) {
      item.classList.add("text-blue-600");
    } else {
      item.classList.remove("text-blue-600");
    }
    stepsProgress.style.width = `${percentageMap[stepNumber]}%`;
  });
  Array.from(formsList?.children)?.forEach((form, index) => {
    if (stepNumber === index + 1) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
}

// Image Slider

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
  });

  $(".scripts-slider").slick({
    dots: false,
    autoplay: false,
    adaptiveHeight: true,
    prevArrow:
      '<button class="z-10 absolute right-12 bottom-2 bg-blue-200 rounded-full size-6 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-back"></ion-icon></button>',
    nextArrow:
      '<button class="z-10 absolute right-4 bottom-2 bg-blue-200 rounded-full size-6 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-forward"></ion-icon></button>',
  });
  $(".dashboard-slider").slick({
    autoplay: false,
    fade: true,
    prevArrow:
      '<button class="z-10 absolute right-12 lg:right-14 -bottom-10 bg-blue-200 rounded-full size-6 lg:size-8 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-back"></ion-icon></button>',
    nextArrow:
      '<button class="z-10 absolute right-4 -bottom-10 bg-blue-200 rounded-full size-6 lg:size-8 flex items-center justify-center hover:bg-blue-100"><ion-icon name="chevron-forward"></ion-icon></button>',
  });
});
