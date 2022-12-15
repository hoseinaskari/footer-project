/* ------------------- select header --------------------- */

let products = document.querySelector(".Products");
let learn_to_trade = document.querySelector(".Learn_to_trade")
let about_us = document.querySelector(".about_us")
let conditions = document.querySelector(".conditions")

/* ------------------- links --------------------- */

let products_links = document.querySelector(".Products_links")
let learn_to_trade_links = document.querySelector(".learn_to_trade_links")
let About_us_links = document.querySelector(".About_us_links")
let conditions_Links = document.querySelector(".conditions_Links")

/* ------------------- Array --------------------- */

let linksList = [products_links, learn_to_trade_links, About_us_links, conditions_Links]
let headerList = [products, learn_to_trade, about_us, conditions]

let upDown = document.querySelectorAll(".upDown")

function upDownFunc(upDown, linksList, headerList) {
    linksList.classList.toggle("active");           // Links display
    upDown.classList.toggle("active");              // Arrow updown
    if (linksList.classList.contains("active")) {   
        headerList.style.color = "green";           // headers color
        headerList.style.transition = "all 0.3s";   // headers transitions
        upDown.style.transition = "all 0.1s";       // Arrow transitions
        console.log(linksList.classList.contains("active"));
    } else {
        headerList.style.color = "azure";
    }
}


/* ------------------- Products --------------------- */
products.addEventListener("click", () => {
    upDownFunc(upDown[0], linksList[0], headerList[0]);
});

/* ------------------- learn_to_trade --------------------- */
learn_to_trade.addEventListener("click", () => {
    upDownFunc(upDown[1], linksList[1], headerList[1]);
})
/* ------------------- about_us --------------------- */

about_us.addEventListener("click", () => {
    upDownFunc(upDown[2], linksList[2], headerList[2]);
})
/* ------------------- conditions --------------------- */

conditions.addEventListener("click", () => {
    upDownFunc(upDown[3], linksList[3], headerList[3]);
})