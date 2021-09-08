import ready from 'Utils/documentReady.js';

ready(function() {
    let tabsItem = document.querySelectorAll(".tabs__item");

    tabsItem.forEach(element => {
        element.addEventListener("click", function() {
            // console.log(this.dataset.tabsIndex)
            // console.log(document.querySelector("[data-tabs='" + this.dataset.tabsIndex + "']"));
            document.querySelector(".tabs-content--show").classList.remove("tabs-content--show");
            document.querySelector("[data-tabs-content='" + this.dataset.tabsIndex + "']").classList.add("tabs-content--show");
            document.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
            this.classList.add('tabs__item--active')
        });
    });
});
