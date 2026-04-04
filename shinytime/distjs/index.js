"use strict";
(() => {
  // srcts/index.tsx
  var TimePicker = class extends HTMLElement {
    connectedCallback() {
      const input = document.createElement("input");
      input.type = "time";
      input.step = "1";
      input.value = this.getAttribute("initial-value") || "12:00:00";
      input.style.cssText = `
      width: 160px; 
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
