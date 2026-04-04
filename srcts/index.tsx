class TimePicker extends HTMLElement {
  connectedCallback() {
    const input = document.createElement("input");
    input.type = "time";
    input.step = "1";  // 1-second steps (HH:MM:SS)
    input.value = this.getAttribute("initial-value") || "12:00:00";
    input.style.cssText = `
      width: 160px; 
      padding: 8px 12px; 
      border: 1px solid #ccc; 
      border-radius: 4px;
      font-size: 16px;
    `;
    
    // Send value changes
    input.addEventListener("change", () => {
      window.Shiny.setInputValue(this.id, input.value, {priority: "event"});
    });
    
    // Send initial value
    setTimeout(() => {
      window.Shiny.setInputValue(this.id, input.value);
    }, 50);
    
    this.appendChild(input);
  }
}

customElements.define("time-picker", TimePicker);
