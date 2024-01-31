"use strict";

const imageBlock = document.getElementById("configure-image");

const processorBlock = document.getElementById("system");
const memoryBlock = document.getElementById("memory");
const primaryStorageBlock = document.getElementById("primary-storage");
const secondaryStorageBlock = document.getElementById("secondary-storage");
const operatingSystemBlock = document.getElementById("operating-system");
const inputModulesBlock = document.getElementById("input-modules");
const bezelBlock = document.getElementById("bezel");
const ecardBlock = document.getElementById("ecardBlock");

const observer1 = new IntersectionObserver(
  (obs) => {
    if (obs[0].isIntersecting) {
      console.log(obs[0].target.id);
    }
  },
  {
    root: null,
    threshold: 0.6,
    rootMargin: "0px",
  }
);

observer1.observe(processorBlock);
