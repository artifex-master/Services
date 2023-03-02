'use strict'

const mobileMenu = document.querySelector('.mobile-menu');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const mainWrapper = document.querySelector('.main-wrapper');

const chooseServiceSelectBox = document.querySelector('.choose-service-input__select-box'); 
const chooseServiceDropdown = document.querySelector('.choose-service-input__dropdown');
const chooseServiceOptions = document.querySelectorAll('.choose-service-input__item');
const chooseServiceLabel = document.querySelector('.choose-service-input__label');
const chooseServiceChevronIcon = document.querySelector('.choose-service-input__chevron-down-wrapper');

const chooseServiceCitySelectBox = document.querySelector("[data-city-select]");
const chooseServiceCityDropdown = document.querySelector('[data-city-dropdown]');
const chooseServiceCityOptions = document.querySelectorAll('.city-option');
const chooseServiceCityLabel = document.querySelector('.city-label');
const chooseServiceCityChevronIcon = document.querySelector('.city-option-chevron');


mobileMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("active");
  mobileSidebar.classList.toggle("active");
  mainWrapper.classList.toggle("disable-scroll");

});

chooseServiceSelectBox.addEventListener("click", function() {
  chooseServiceDropdown.classList.toggle("active");
  chooseServiceChevronIcon.classList.toggle("active");
});

chooseServiceCitySelectBox.addEventListener("click", function() {
  chooseServiceCityDropdown.classList.toggle("active");
  chooseServiceCityChevronIcon.classList.toogle("active");
});

chooseServiceOptions.forEach(o => {
  o.addEventListener("click", function() {
    chooseServiceLabel.innerHTML = o.querySelector("input").value;
    chooseServiceDropdown.classList.remove("active");
    chooseServiceChevronIcon.classList.remove("active");
  });
});

chooseServiceCityOptions.forEach(o => {
  o.addEventListener("click", function() {
    chooseServiceCityLabel.innerHTML = o.querySelector("input").value;
    chooseServiceCityDropdown.classList.remove("active");
    chooseServiceCityChevronIcon.classList.remove("active");

  });
});

