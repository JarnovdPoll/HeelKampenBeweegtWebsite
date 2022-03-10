class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <div class="header">
  <a href="#home" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a href="#home">Home</a>
  </div>
</div>
        `
    }
}

customElements.define(`main-header`, MainHeader)