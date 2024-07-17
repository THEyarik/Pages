window.onload = function() {
    const BURGER_MENU_ICON = document.querySelector(".hamburger__menu__icon");
    const CLOSE_MENU_ICON = document.querySelector(".header__mobile__close__icon");
    const HEADER_MOBILE = document.querySelector(".header__mobile");
    const BODY = document.body;

    BURGER_MENU_ICON.addEventListener("click", function() {
        HEADER_MOBILE.classList.remove("hide");
        BODY.classList.add("no-scroll");
    })
    CLOSE_MENU_ICON.addEventListener("click", function() {
        HEADER_MOBILE.classList.add("hide");
        BODY.classList.remove("no-scroll");
    })
}
