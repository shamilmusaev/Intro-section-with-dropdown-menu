const featuresElement = document.querySelector(".nav_features_elem"),
      featuresPopup = document.querySelector(".features_popup"),
      companyElem = document.querySelector(".nav_company_elem"),
      companyPopup = document.querySelector(".company_popup"),
      arrowSvg1 = document.querySelector("#arrow_svg1"),
      arrowSvg2 = document.querySelector("#arrow_svg2")




featuresElement.addEventListener("mouseover", () => {
    featuresPopup.classList.add("features_popup_show")
    arrowSvg1.src = "./images/icon-arrow-up.svg"
    companyPopup.classList.remove("company_popup_show")
})

featuresPopup.addEventListener("mouseleave", ()=> {
    setTimeout(() => {
        featuresPopup.classList.remove("features_popup_show")
    },200)
    arrowSvg1.src = "./images/icon-arrow-down.svg"
})

companyElem.addEventListener("mouseover", () => {
    companyPopup.classList.add("company_popup_show")
    arrowSvg2.src = "./images/icon-arrow-up.svg"
    featuresPopup.classList.remove("features_popup_show")
})


companyPopup.addEventListener("mouseleave", ()=> {
    setTimeout(() => {
        companyPopup.classList.remove("company_popup_show")
    },200)
    arrowSvg2.src = "./images/icon-arrow-down.svg"
})