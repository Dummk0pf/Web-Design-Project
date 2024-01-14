// Section - Navigation

// Elements

let currentSection = document.getElementById("overview");
let currentCard = document.getElementById("card-1");

const sectionNavigation = document.getElementById("section-nav");
const highlightBox = document.getElementById("section-highlight");
const cardBox = document.getElementById("card-box");

// Event Handlers

const selectNavSection =  function(event){
    const element = event.target;
    
    if(!element.classList.contains("section-button")) 
    return;

    currentSection.classList.toggle("section-button-active");
    element.classList.toggle("section-button-active");

    currentSection = element;

    if(currentSection.id === ("overview"))
    highlightBox.style.transform = "translateX(0%)";
    if(currentSection.id === ("specs"))
    highlightBox.style.transform = "translateX(100%)";
    if(currentSection.id === ("modules"))
    highlightBox.style.transform = "translateX(200%)";
}

const selectCard = function(event){

    const element = event.target.closest(".card");

    if(element === null)
    return;

    element.classList.toggle("card-active");
    currentCard.classList.toggle("card-active");

    currentCard = element;
}

// Event Listeners

sectionNavigation.addEventListener("click", selectNavSection);

cardBox.addEventListener("click", selectCard);
