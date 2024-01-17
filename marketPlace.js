"use strict";   

// Elements

const laptopGrid = document.getElementById("laptops-grid");

// Helper Functions

const initializeLaptopGrid = function(){
    laptops.forEach(laptop => {
        const html = `
        <div class="item laptop-item" id="${laptop.id}">
            <div class="item-image">
                <img src="${laptop.image}" class="item-image" alt="" srcset="">
            </div>
            <div class="item-content">
                <h1 class="item-title">${laptop.modelName}</h1>
                <p class="item-desc">Starting at $${laptop.dollarPrice} <a class="configure-button" id="c-${laptop.id}" href="configure.html">Configure -></a></p>
            </div>
        </div>
        `;    
        laptopGrid.insertAdjacentHTML("beforeend", html);
    });

    const lItems = document.querySelectorAll(".laptop-item");

    lItems.forEach(item => {
        item.addEventListener("click", function(event){
            currentProductId = item.id;
            console.log(currentProductId);
        })
    });
}

// For now this simulates JSON data from server
const getLaptops = function(){
    return [
        {
            id: "lap-1",
            modelName: "Woz BlueBox 13",
            dollarPrice: 999,
            image: "res/marketPlace/BlueBox13_12thgen.jpeg"
        },
        {
            id: "lap-2",
            modelName: "Woz BlueBox 16",
            dollarPrice: 999,
            image: "res/marketPlace/BlueBox16_ryzen7.jpeg"
        },
    ];
}

const init = function(){
    const laptopArray = getLaptops();
    laptops = [...laptopArray];
    initializeLaptopGrid();
}

init();

// Event Listeners