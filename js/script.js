// ------------------cloud animate---------------------------------------------------------------/
document.addEventListener('DOMContentLoaded',  function() {
  setTimeout(function(){
    let cloud = document.querySelector('.cloud').classList.add('show');
  }, 3000);

}, false);

//----------------------- menu  ---------------------------------------------------------/
const menuBtn = document.querySelector(".burger-nav__btn"),
  menuBody = document.querySelector(".burger-nav__body");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("active");
  menuBody.classList.toggle("open");
});

//----------------------- tabs  ---------------------------------------------------------/
const tabsBtn = document.querySelectorAll(".tabs__nav__item");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

//----------------------- custom select  ---------------------------------------------------------/

function select() {
  let selectBtn = document.querySelector(".select__header"),
    selectList = document.querySelector(".select__body"),
    selectItem = document.querySelectorAll(".select__item");

  selectBtn.addEventListener("click", selectTogle);

  function selectTogle() {
    this.classList.toggle("active");
    selectList.classList.toggle("active");
  }
  selectItem.forEach((item) => {
    item.addEventListener("click", chooseItem);
  });

  function chooseItem() {
    let text = this.innerText,
      currentItem = this.closest(".select").querySelector(".select__current");
    currentItem.innerText = text;
    selectBtn.classList.remove("active");
    selectList.classList.remove("active");
  }
}
select();
