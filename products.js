"use-strict";
// Elements

// Section - Navigation

let currentSectionNav = document.getElementById("overview");
let currentCard = document.getElementById("card-1");

const sectionNavigation = document.getElementById("section-nav");
const highlightBox = document.getElementById("section-highlight");
const cardBox = document.getElementById("card-box");

// Section - Change

const section1 = document.getElementById("section-1");
const overviewSection1 = document.getElementById("section-overview-1");
const specsSection1 = document.getElementById("section-specs-1");
const moduleSection1 = document.getElementById("section-modules-1");

const section2 = document.getElementById("section-2");
const overviewSection2 = document.getElementById("section-overview-2");
const specsSection2 = document.getElementById("section-specs-2");
const moduleSection2 = document.getElementById("section-modules-2");

// Helper Functions

const init = function(){
    currentSectionNav = document.getElementById("overview");
    const navButtons = sectionNavigation.querySelectorAll(".section-button");

    if(!navButtons[0].classList.contains("section-button-active"))
    navButtons[0].classList.add("section-button-active");

    if(navButtons[1].classList.contains("section-button-active"))
    navButtons[1].classList.remove("section-button-active");

    if(navButtons[2].classList.contains("section-button-active"))
    navButtons[2].classList.remove("section-button-active");

    highlightBox.style.transform = "translateX(0%)";
    if(currentCard.id === "card-1")
    sectionVisible(overviewSection1, [specsSection1, moduleSection1]);
    if(currentCard.id === "card-2")
    sectionVisible(overviewSection2, [specsSection2, moduleSection2]);
}


const sectionVisible = function (visible, invisible = []) {
    if(visible.classList.contains("hide"))
    visible.classList.remove("hide");

    invisible.forEach(element => {
        if(!element.classList.contains("hide"))
        element.classList.add("hide");
    })
}

// Event Handlers

const selectNavSection =  function(event){
    const element = event.target;
    
    if(!element.classList.contains("section-button")) 
    return;

    currentSectionNav.classList.toggle("section-button-active");
    element.classList.toggle("section-button-active");

    currentSectionNav = element;
    currentSectionNav.scrollIntoView({
        behavior: "smooth"
    });
    
    if(currentSectionNav.id === ("overview")){
        highlightBox.style.transform = "translateX(0%)";
        
        if(currentCard.id === "card-1")
        sectionVisible(overviewSection1, [specsSection1, moduleSection1]);
        if(currentCard.id === "card-2")
        sectionVisible(overviewSection2, [specsSection2, moduleSection2]);
    }
    if(currentSectionNav.id === ("specs")){
        highlightBox.style.transform = "translateX(100%)";
        
        if(currentCard.id === "card-1")
        sectionVisible(specsSection1, [overviewSection1, moduleSection1]);
        if(currentCard.id === "card-2")
        sectionVisible(specsSection2, [overviewSection2, moduleSection2]);
    }
    if(currentSectionNav.id === ("modules")){
        highlightBox.style.transform = "translateX(200%)";
        
        if(currentCard.id === "card-1")
        sectionVisible(moduleSection1, [overviewSection1, specsSection1]);
        if(currentCard.id === "card-2")
        sectionVisible(moduleSection2, [overviewSection2, specsSection2]);
    }

}

const selectCard = function(event){

    const element = event.target.closest(".card");

    if(element === null)
    return;


    if(element.id === "card-1"){
        if(section1.classList.contains("hide")){
            section1.classList.remove("hide");
        }
        if(!section2.classList.contains("hide")){
            section2.classList.add("hide");
        }
    }
    
    if(element.id === "card-2"){
        if(!section1.classList.contains("hide")){
            section1.classList.add("hide");
        }
        if(section2.classList.contains("hide")){
            section2.classList.remove("hide");
        }
    }

    element.classList.toggle("card-active");
    currentCard.classList.toggle("card-active");

    init();
    currentCard = element;
}

// Event Listeners

sectionNavigation.addEventListener("click", selectNavSection);

cardBox.addEventListener("click", selectCard);
