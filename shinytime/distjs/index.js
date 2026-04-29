"use strict";
(() => {
  // srcts/index.tsx
  var TimePicker = class extends HTMLElement {
    connectedCallback() {
      const input = document.createElement("input");
      input.type = "time";
      input.step = this.getAttribute("step-seconds") || "1";
      console.log(input.step);
      input.value = this.getAttribute("initial-value") || "12:00:00";
      const width = this.getAttribute("input-width") || "160px";
      input.style.cssText = `
      width: ${width}; 
      padding: 8px 12px; 
      border: 1px solid #ccc; 
      border-radius: 4px;
      font-size: 16px;
    `;
      input.addEventListener("change", () => {
        window.Shiny.setInputValue(this.id, input.value, { priority: "event" });
      });
      setTimeout(() => {
        window.Shiny.setInputValue(this.id, input.value);
      }, 50);
      this.appendChild(input);
    }
  };
  customElements.define("time-picker", TimePicker);
})();
