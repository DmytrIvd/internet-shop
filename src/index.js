import { configureHeader } from "./header";
const indexModule = require("./indexModule");

configureHeader();

document.addEventListener("DOMContentLoaded", function () {
  indexModule.InitElements();
  document.querySelectorAll(".main-contents-list-item_addToBascet").forEach((button) => {
    button.addEventListener("click", indexModule.clickBascetEvent);
  });
});


