import { configureHeader } from "./header";
import indexModule from "./indexModule";

configureHeader();

document.addEventListener("DOMContentLoaded", function () {
  indexModule.InitElements();
  document.querySelectorAll(".main-contents-list-item_addToBascet").forEach((button) => {
    button.addEventListener("click", indexModule.clickBascetEvent);
  });
});


