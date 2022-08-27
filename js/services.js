
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

const tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
   item.addEventListener("click", function(){
   let currentBtn = item;
   let tabId = currentBtn.getAttribute('data-tab');
   let currentTab = document.querySelector(tabId);

   
   tabsBtn.forEach(function(item) {
    item.classList.remove('active');
   })

   currentBtn.classList.add('active');
   currentTab.classList.add('active');



   });
});
